const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

const TILE_SIZE = 512;
const PLAYER_SPEED = 220;
const SOURCE_TEXTURE = 'ChatGPT Image Mar 6, 2026, 07_25_41 PM.png';

const input = {
  left: false,
  right: false,
  up: false,
  down: false,
};

const camera = {
  x: 0,
  y: 0,
};

let waterTile = null;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

function createWaterTile(size) {
  const tile = document.createElement('canvas');
  tile.width = size;
  tile.height = size;
  const tctx = tile.getContext('2d');

  // Violet-tinted shallow base.
  const grad = tctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, '#c8b9e9');
  grad.addColorStop(0.5, '#beade2');
  grad.addColorStop(1, '#d8caef');
  tctx.fillStyle = grad;
  tctx.fillRect(0, 0, size, size);

  // Fine noise for seabed detail.
  const image = tctx.getImageData(0, 0, size, size);
  const data = image.data;
  for (let i = 0; i < data.length; i += 4) {
    const n = (Math.random() - 0.5) * 12;
    data[i] = Math.max(0, Math.min(255, data[i] + n));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + n));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + n));
  }
  tctx.putImageData(image, 0, 0);

  // Cellular caustic rings.
  const cells = [];
  for (let i = 0; i < 70; i += 1) {
    cells.push({
      x: Math.random() * size,
      y: Math.random() * size,
      r: 24 + Math.random() * 52,
    });
  }

  tctx.lineWidth = 1.2;
  for (const cell of cells) {
    tctx.strokeStyle = 'rgba(253, 244, 255, 0.28)';
    tctx.beginPath();
    tctx.ellipse(cell.x, cell.y, cell.r * 1.1, cell.r * 0.95, Math.random() * Math.PI, 0, Math.PI * 2);
    tctx.stroke();

    tctx.strokeStyle = 'rgba(245, 232, 255, 0.18)';
    tctx.beginPath();
    tctx.ellipse(cell.x, cell.y, cell.r * 0.8, cell.r * 0.7, Math.random() * Math.PI, 0, Math.PI * 2);
    tctx.stroke();
  }

  // Bright connecting highlights.
  for (let i = 0; i < 120; i += 1) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    tctx.fillStyle = 'rgba(255, 247, 255, 0.42)';
    tctx.fillRect(x, y, 2, 2);
  }

  // Soft vignette to reduce visible seams.
  const vignette = tctx.createRadialGradient(size / 2, size / 2, size * 0.15, size / 2, size / 2, size * 0.7);
  vignette.addColorStop(0, 'rgba(255, 255, 255, 0)');
  vignette.addColorStop(1, 'rgba(187, 165, 220, 0.14)');
  tctx.fillStyle = vignette;
  tctx.fillRect(0, 0, size, size);

  return tile;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function blendPixel(data, indexA, indexB, t) {
  const u = 1 - t;
  data[indexA] = Math.round((data[indexA] * u) + (data[indexB] * t));
  data[indexA + 1] = Math.round((data[indexA + 1] * u) + (data[indexB + 1] * t));
  data[indexA + 2] = Math.round((data[indexA + 2] * u) + (data[indexB + 2] * t));
}

function createSeamlessTileFromImage(img, size) {
  const tile = document.createElement('canvas');
  tile.width = size;
  tile.height = size;
  const tctx = tile.getContext('2d');

  // Cover-fit image into square tile.
  const scale = Math.max(size / img.width, size / img.height);
  const drawW = img.width * scale;
  const drawH = img.height * scale;
  const dx = (size - drawW) / 2;
  const dy = (size - drawH) / 2;
  tctx.drawImage(img, dx, dy, drawW, drawH);

  // Blend opposite edges to remove seams when repeated.
  const image = tctx.getImageData(0, 0, size, size);
  const data = image.data;
  const feather = Math.max(24, Math.floor(size * 0.16));

  // Left/right seam blending.
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < feather; x += 1) {
      const t = x / feather;
      const left = ((y * size) + x) * 4;
      const right = ((y * size) + (size - feather + x)) * 4;
      blendPixel(data, left, right, t * 0.5);
      blendPixel(data, right, left, (1 - t) * 0.5);
    }
  }

  // Top/bottom seam blending.
  for (let y = 0; y < feather; y += 1) {
    const t = y / feather;
    for (let x = 0; x < size; x += 1) {
      const top = ((y * size) + x) * 4;
      const bottom = ((((size - feather) + y) * size) + x) * 4;
      blendPixel(data, top, bottom, t * 0.5);
      blendPixel(data, bottom, top, (1 - t) * 0.5);
    }
  }

  tctx.putImageData(image, 0, 0);
  return tile;
}

function wrap(value, span) {
  return ((value % span) + span) % span;
}

function drawInfiniteWater() {
  if (!waterTile) {
    ctx.fillStyle = '#bba7dc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const ox = -wrap(camera.x, TILE_SIZE);
  const oy = -wrap(camera.y, TILE_SIZE);

  const cols = Math.ceil(canvas.width / TILE_SIZE) + 2;
  const rows = Math.ceil(canvas.height / TILE_SIZE) + 2;

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      ctx.drawImage(
        waterTile,
        ox + (x - 1) * TILE_SIZE,
        oy + (y - 1) * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE,
      );
    }
  }
}

function drawPlayerMarker() {
  const px = canvas.width / 2;
  const py = canvas.height / 2;

  ctx.fillStyle = 'rgba(38, 30, 48, 0.45)';
  ctx.beginPath();
  ctx.ellipse(px, py + 14, 16, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f7f0ff';
  ctx.beginPath();
  ctx.moveTo(px, py - 15);
  ctx.lineTo(px - 11, py + 10);
  ctx.lineTo(px + 11, py + 10);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#c9a6ff';
  ctx.fillRect(px - 3, py - 1, 6, 9);
}

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;

  let dx = 0;
  let dy = 0;
  if (input.left) dx -= 1;
  if (input.right) dx += 1;
  if (input.up) dy -= 1;
  if (input.down) dy += 1;

  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy) || 1;
    camera.x += (dx / len) * PLAYER_SPEED * dt;
    camera.y += (dy / len) * PLAYER_SPEED * dt;
  }

  drawInfiniteWater();
  drawPlayerMarker();

  requestAnimationFrame(frame);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    input.left = true;
    event.preventDefault();
  } else if (event.key === 'ArrowRight') {
    input.right = true;
    event.preventDefault();
  } else if (event.key === 'ArrowUp') {
    input.up = true;
    event.preventDefault();
  } else if (event.key === 'ArrowDown') {
    input.down = true;
    event.preventDefault();
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft') {
    input.left = false;
  } else if (event.key === 'ArrowRight') {
    input.right = false;
  } else if (event.key === 'ArrowUp') {
    input.up = false;
  } else if (event.key === 'ArrowDown') {
    input.down = false;
  }
});

requestAnimationFrame(frame);

async function init() {
  try {
    const img = await loadImage(encodeURI(SOURCE_TEXTURE));
    waterTile = createSeamlessTileFromImage(img, TILE_SIZE);
  } catch {
    waterTile = createWaterTile(TILE_SIZE);
  }
}

init();
