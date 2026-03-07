const http = require('http');
const crypto = require('crypto');
const { WebSocketServer } = require('ws');

const PORT = Number(process.env.PORT || 8080);
const WORLD_W = 48;
const WORLD_H = 48;
const LIFE_TYPES = new Set(['blue', 'red']);
const EAT_RADIUS = 0.44;

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

function makeId() {
  return crypto.randomBytes(3).toString('hex');
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

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true, players: players.size }));
    return;
  }
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('LIFE ON KHAROX multiplayer server is running.\n');
});

const wss = new WebSocketServer({ server });
const players = new Map();

function serializePlayer(player) {
  return {
    id: player.id,
    x: player.x,
    y: player.y,
    lifeType: player.lifeType,
    moveAngleDeg: player.moveAngleDeg,
    flipX: player.flipX,
    moving: player.moving,
  };
}

function broadcast(message, exceptWs) {
  const raw = JSON.stringify(message);
  for (const [ws] of players.entries()) {
    if (ws === exceptWs) continue;
    if (ws.readyState !== 1) continue;
    ws.send(raw);
  }
}

wss.on('connection', (ws) => {
  const id = makeId();
  players.set(ws, {
    id,
    x: WORLD_W * 0.5,
    y: WORLD_H * 0.5,
    lifeType: 'blue',
    moveAngleDeg: 0,
    flipX: false,
    moving: false,
  });

  ws.send(JSON.stringify({
    type: 'welcome',
    id,
    players: Array.from(players.values()).map(serializePlayer),
  }));

  ws.on('message', (raw) => {
    let data;
    try {
      data = JSON.parse(raw.toString());
    } catch {
      return;
    }

    const player = players.get(ws);
    if (!player) return;

    if (data.type === 'hello') {
      ws.send(JSON.stringify({
        type: 'snapshot',
        players: Array.from(players.values()).map(serializePlayer),
      }));
      return;
    }

    if (data.type === 'eat') {
      if (player.lifeType !== 'red') return;
      const targetId = String(data.targetId || '');
      if (!targetId) return;

      let targetWs = null;
      let target = null;
      for (const [candidateWs, candidate] of players.entries()) {
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

      if (ws.readyState === 1) {
        ws.send(JSON.stringify({
          type: 'fed',
          id: player.id,
          preyLifeType,
        }));
      }
      return;
    }

    if (data.type !== 'state') return;

    player.x = wrap(data.x, WORLD_W);
    player.y = clamp(wrap(data.y, WORLD_H), 0.52, WORLD_H - 0.52);
    player.lifeType = LIFE_TYPES.has(data.lifeType) ? data.lifeType : player.lifeType;
    player.moveAngleDeg = Number.isFinite(data.moveAngleDeg) ? data.moveAngleDeg : player.moveAngleDeg;
    player.flipX = Boolean(data.flipX);
    player.moving = Boolean(data.moving);

    broadcast({
      type: 'upsert',
      player: serializePlayer(player),
    }, ws);
  });

  ws.on('close', () => {
    const player = players.get(ws);
    players.delete(ws);
    if (!player) return;
    broadcast({
      type: 'remove',
      id: player.id,
    });
  });
});

server.listen(PORT, () => {
  console.log(`LIFE ON KHAROX multiplayer server listening on :${PORT}`);
});
