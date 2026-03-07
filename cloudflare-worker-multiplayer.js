const WORLD_W = 48;
const WORLD_H = 48;
const EAT_RADIUS = 0.44;

const clients = new Map();

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function wrap(v, max) {
  let n = Number(v);
  if (!Number.isFinite(n)) n = 0;
  n %= max;
  if (n < 0) n += max;
  return n;
}

function torusSignedDelta(a, b, max) {
  let d = a - b;
  if (d > max * 0.5) d -= max;
  if (d < -max * 0.5) d += max;
  return d;
}

function distance2(a, b) {
  const dx = torusSignedDelta(a.x, b.x, WORLD_W);
  const dy = torusSignedDelta(a.y, b.y, WORLD_H);
  return (dx * dx) + (dy * dy);
}

function randomSpawn() {
  return {
    x: Math.random() * WORLD_W,
    y: 0.52 + Math.random() * (WORLD_H - 1.04),
  };
}

function makeId() {
  const bytes = new Uint8Array(3);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function serializePlayer(p) {
  return {
    id: p.id,
    x: p.x,
    y: p.y,
    lifeType: p.lifeType,
    moveAngleDeg: p.moveAngleDeg,
    flipX: p.flipX,
    moving: p.moving,
  };
}

function send(ws, payload) {
  try {
    ws.send(JSON.stringify(payload));
  } catch (_) {}
}

function broadcast(payload, exceptWs) {
  const msg = JSON.stringify(payload);
  for (const [ws] of clients.entries()) {
    if (ws === exceptWs) continue;
    try {
      ws.send(msg);
    } catch (_) {}
  }
}

function removeClient(ws) {
  const p = clients.get(ws);
  clients.delete(ws);
  if (!p) return;
  broadcast({ type: 'remove', id: p.id });
}

function handleMessage(ws, raw) {
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return;
  }

  const player = clients.get(ws);
  if (!player) return;

  if (data.type === 'hello') {
    send(ws, {
      type: 'snapshot',
      players: Array.from(clients.values()).map(serializePlayer),
    });
    return;
  }

  if (data.type === 'eat') {
    if (player.lifeType !== 'red') return;
    const targetId = String(data.targetId || '');
    if (!targetId) return;

    let targetWs = null;
    let target = null;
    for (const [candidateWs, candidate] of clients.entries()) {
      if (candidate.id === targetId) {
        targetWs = candidateWs;
        target = candidate;
        break;
      }
    }
    if (!targetWs || !target || targetWs === ws) return;
    if (distance2(player, target) > (EAT_RADIUS * EAT_RADIUS)) return;

    const preyLifeType = target.lifeType;
    const spawn = randomSpawn();
    target.x = spawn.x;
    target.y = spawn.y;
    target.moveAngleDeg = 0;
    target.flipX = false;
    target.moving = false;

    broadcast({
      type: 'respawn',
      id: target.id,
      x: target.x,
      y: target.y,
    });

    send(ws, {
      type: 'fed',
      id: player.id,
      preyLifeType,
    });
    return;
  }

  if (data.type !== 'state') return;

  player.x = wrap(data.x, WORLD_W);
  player.y = clamp(wrap(data.y, WORLD_H), 0.52, WORLD_H - 0.52);
  player.lifeType = data.lifeType === 'red' ? 'red' : 'blue';
  player.moveAngleDeg = Number.isFinite(data.moveAngleDeg) ? data.moveAngleDeg : player.moveAngleDeg;
  player.flipX = Boolean(data.flipX);
  player.moving = Boolean(data.moving);

  broadcast({ type: 'upsert', player: serializePlayer(player) }, ws);
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === '/health') {
    return new Response(JSON.stringify({ ok: true, players: clients.size }), {
      headers: { 'content-type': 'application/json' },
    });
  }

  if (request.headers.get('Upgrade') !== 'websocket') {
    return new Response('LIFE ON KHAROX Cloudflare multiplayer is running.');
  }

  const pair = new WebSocketPair();
  const client = pair[0];
  const server = pair[1];
  server.accept();

  const player = {
    id: makeId(),
    x: WORLD_W * 0.5,
    y: WORLD_H * 0.5,
    lifeType: 'blue',
    moveAngleDeg: 0,
    flipX: false,
    moving: false,
  };
  clients.set(server, player);

  send(server, {
    type: 'welcome',
    id: player.id,
    players: Array.from(clients.values()).map(serializePlayer),
  });

  server.addEventListener('message', (evt) => {
    handleMessage(server, evt.data);
  });

  server.addEventListener('close', () => {
    removeClient(server);
  });

  server.addEventListener('error', () => {
    removeClient(server);
  });

  return new Response(null, { status: 101, webSocket: client });
}
