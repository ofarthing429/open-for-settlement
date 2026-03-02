const titlePanel = document.getElementById('titlePanel');
const setupPanel = document.getElementById('setupPanel');
const gamePanel = document.getElementById('gamePanel');
const enterBtn = document.getElementById('enterBtn');
const foodInput = document.getElementById('foodInput');
const startBtn = document.getElementById('startBtn');
const nextTurnBtn = document.getElementById('nextTurnBtn');
const restartBtn = document.getElementById('restartBtn');

const repairBtn = document.getElementById('repairBtn');
const sprayBtn = document.getElementById('sprayBtn');
const sonarBtn = document.getElementById('sonarBtn');
const bouncerBtn = document.getElementById('bouncerBtn');
const buyRepairBtn = document.getElementById('buyRepairBtn');
const buySprayBtn = document.getElementById('buySprayBtn');
const buyBouncerBtn = document.getElementById('buyBouncerBtn');
const buyHpBtn = document.getElementById('buyHpBtn');
const buySonarBtn = document.getElementById('buySonarBtn');
const buyInvestorBtn = document.getElementById('buyInvestorBtn');

const turnValue = document.getElementById('turnValue');
const foodValue = document.getElementById('foodValue');
const pointsValue = document.getElementById('pointsValue');
const targetValue = document.getElementById('targetValue');
const hpValue = document.getElementById('hpValue');
const hpBarFill = document.getElementById('hpBarFill');
const recordRuns = document.getElementById('recordRuns');
const recordWins = document.getElementById('recordWins');
const recordBestPoints = document.getElementById('recordBestPoints');
const recordBestTurns = document.getElementById('recordBestTurns');
const repairCount = document.getElementById('repairCount');
const sprayCount = document.getElementById('sprayCount');
const sonarCount = document.getElementById('sonarCount');
const bouncerCount = document.getElementById('bouncerCount');
const sprayStatus = document.getElementById('sprayStatus');
const sonarStatus = document.getElementById('sonarStatus');
const log = document.getElementById('log');

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const POINTS_STORAGE_KEY = 'black-sand-colony-run-points';
const MAX_HP_STORAGE_KEY = 'black-sand-colony-run-max-hp';
const INVESTOR_STORAGE_KEY = 'black-sand-colony-run-investor';
const RECORDS_STORAGE_KEY = 'black-sand-colony-run-records';

const state = {
  running: false,
  gameOver: false,
  turn: 0,
  food: 0,
  points: 0,
  hp: 100,
  maxHp: 100,
  turnsToWin: 0,
  trackLength: 0,
  position: 0,
  eventAnim: null,
  deathMode: '',
  lastDamageSource: '',
  inventory: {
    repairKits: 3,
    antiNibSpray: 2,
    sonarDisrupter: 0,
    bouncer: 1,
  },
  sprayArmed: false,
  sonarArmed: false,
  investorOwned: false,
  records: {
    runs: 0,
    wins: 0,
    bestPoints: 0,
    bestTurns: 0,
  },
};

const eventTable = [
  { key: 'none', weight: 34 },
  { key: 'weather', weight: 20, dmg: 10, text: 'Bad weather slams your hull. -10 HP' },
  { key: 'sink', weight: 15, dmg: 20, text: 'Sinking sand grabs your treads. -20 HP' },
  { key: 'coral', weight: 12, dmg: 25, text: 'Glowing green coral cuts your armor. -25 HP' },
  { key: 'nibblorax', weight: 8, text: 'Nibblorax infestation. Food loss incoming.' },
  { key: 'wreckage', weight: 7, text: 'You found wreckage supplies. +25 HP' },
  { key: 'orchard', weight: 6, text: 'Glowcore Orchard discovered. +50 food' },
  { key: 'plutonium', weight: 3, text: 'Plutonium deposit found. Reactor jump engaged.' },
  { key: 'worm', weight: 1, kill: true, text: 'The worm erupts from beneath you. Instant kill.' },
];

startBtn.addEventListener('click', startGame);
enterBtn.addEventListener('click', showSetup);
nextTurnBtn.addEventListener('click', advanceTurn);
restartBtn.addEventListener('click', () => {
  titlePanel.classList.remove('hidden');
  setupPanel.classList.add('hidden');
  gamePanel.classList.add('hidden');
});
repairBtn.addEventListener('click', useRepairKit);
sprayBtn.addEventListener('click', useSpray);
sonarBtn.addEventListener('click', useSonar);
bouncerBtn.addEventListener('click', useBouncer);
buyRepairBtn.addEventListener('click', () => buyItem('repair'));
buySprayBtn.addEventListener('click', () => buyItem('spray'));
buyBouncerBtn.addEventListener('click', () => buyItem('bouncer'));
buyHpBtn.addEventListener('click', () => buyItem('maxHp'));
buySonarBtn.addEventListener('click', () => buyItem('sonar'));
buyInvestorBtn.addEventListener('click', () => buyItem('investor'));

function startGame() {
  const chosenFood = Number(foodInput.value);
  const safeFood = Number.isFinite(chosenFood) ? Math.max(20, Math.min(300, chosenFood)) : 120;

  state.running = true;
  state.gameOver = false;
  state.turn = 0;
  state.food = safeFood;
  state.points = loadStoredPoints();
  state.maxHp = loadStoredMaxHp();
  state.investorOwned = loadStoredInvestor();
  state.records = loadStoredRecords();
  state.hp = state.maxHp;
  state.turnsToWin = randInt(15, 50);
  state.trackLength = state.turnsToWin + 2;
  state.position = 0;
  state.eventAnim = null;
  state.deathMode = '';
  state.lastDamageSource = '';
  state.inventory.repairKits = 3;
  state.inventory.antiNibSpray = 2;
  state.inventory.sonarDisrupter = 0;
  state.inventory.bouncer = 1;
  state.sprayArmed = false;
  state.sonarArmed = false;

  titlePanel.classList.add('hidden');
  setupPanel.classList.add('hidden');
  gamePanel.classList.remove('hidden');
  nextTurnBtn.disabled = false;

  log.innerHTML = '';
  addLog(`Mission start. Reach turn ${state.turnsToWin} to win.`, 'good');
  addLog(`Starting food: ${state.food}. Food drain is 10 per turn.`);

  syncHud();
  syncInventoryUi();
  syncRecordsUi();
  draw();
}

function showSetup() {
  titlePanel.classList.add('hidden');
  setupPanel.classList.remove('hidden');
  syncRecordsUi();
}

function advanceTurn() {
  if (!state.running || state.gameOver) {
    return;
  }

  processTurn({ skipHazards: false, skipLabel: '' });
}

function processTurn({ skipHazards, skipLabel = '' }) {
  if (!state.running || state.gameOver) {
    return;
  }

  state.turn += 1;
  state.position = Math.min(state.position + 1, state.trackLength - 1);
  if (skipHazards) {
    addLog(`Turn ${state.turn}: jump turn, no food consumed.`, 'good');
  } else {
    state.food = Math.max(0, state.food - 10);
    addLog(`Turn ${state.turn}: consumed 10 food.`);
  }

  let sprayWasConsumed = false;
  let autoSkipTurns = 0;

  if (skipHazards) {
    addLog(skipLabel || 'Safe jump: hazards skipped this turn.', 'good');
    triggerEventAnimation(skipLabel.includes('Plutonium') ? 'plutonium' : 'bouncer', 64);
  } else {
    const event = pickEvent();
    const result = applyEvent(event);
    sprayWasConsumed = Boolean(result && result.sprayConsumed);
    autoSkipTurns = result && result.autoSkipTurns ? result.autoSkipTurns : 0;
  }

  resolveRoundState(false);

  if (!state.gameOver) {
    state.points += state.investorOwned ? 2 : 1;
    storePoints();
  }

  resolveRoundState(true);
  syncHud();
  syncInventoryUi();
  draw();

  if (!state.gameOver && autoSkipTurns > 0) {
    for (let i = 0; i < autoSkipTurns; i += 1) {
      if (state.gameOver) {
        break;
      }
      processTurn({ skipHazards: true, skipLabel: 'Plutonium jump: hazards skipped this turn.' });
    }
  }
}

function applyEvent(event) {
  if (!event || event.key === 'none') {
    addLog('No hazard this turn. Black dunes stay still.', 'good');
    triggerEventAnimation('none', 32);
    return { sprayConsumed: false, autoSkipTurns: 0 };
  }

  const isGoodEvent = event.key === 'wreckage' || event.key === 'orchard';
  addLog(event.text, isGoodEvent ? 'good' : 'bad');

  if (event.kill) {
    if (state.sonarArmed) {
      state.sonarArmed = false;
      addLog('Sonar disrupter scattered the worm before it surfaced.', 'good');
      triggerEventAnimation('sonar', 64);
      return { sprayConsumed: false, autoSkipTurns: 0 };
    }

    state.hp = 0;
    state.deathMode = 'worm';
    triggerEventAnimation('worm', 72);
    endGame('The worm devoured your crawler.', 'worm');
    return { sprayConsumed: false, autoSkipTurns: 0 };
  }

  if (event.key === 'nibblorax') {
    if (state.sprayArmed) {
      state.sprayArmed = false;
      addLog('Spray blast repelled the Nibblorax.', 'good');
      triggerEventAnimation('spray', 60);
      return { sprayConsumed: true, autoSkipTurns: 0 };
    }

    const eaten = randInt(15, 150);
    state.food = Math.max(0, state.food - eaten);
    addLog(`Nibblorax eats ${eaten} food.`, 'bad');
    triggerEventAnimation('nibblorax', 68, { eaten });
    return { sprayConsumed: false, autoSkipTurns: 0 };
  }

  if (event.key === 'wreckage') {
    state.hp = Math.min(state.maxHp, state.hp + 25);
    applyWreckageLoot();
    triggerEventAnimation('wreckage', 56);
    return { sprayConsumed: false, autoSkipTurns: 0 };
  }

  if (event.key === 'orchard') {
    state.food += 50;
    triggerEventAnimation('orchard', 56);
    return { sprayConsumed: false, autoSkipTurns: 0 };
  }

  if (event.key === 'plutonium') {
    addLog('Plutonium burst launches you 3 turns forward with no hazards.', 'good');
    triggerEventAnimation('plutonium', 60);
    return { sprayConsumed: false, autoSkipTurns: 3 };
  }

  state.lastDamageSource = event.key;
  state.hp = Math.max(0, state.hp - event.dmg);
  triggerEventAnimation(event.key, 56);
  return { sprayConsumed: false, autoSkipTurns: 0 };
}

function applyWreckageLoot() {
  const lootRoll = Math.random();

  if (lootRoll < 0.45) {
    state.inventory.repairKits += 1;
    addLog('Wreckage salvage: +1 Repair Kit.', 'good');
    return;
  }

  if (lootRoll < 0.8) {
    state.inventory.antiNibSpray += 1;
    addLog('Wreckage salvage: +1 Anti-Nib Spray.', 'good');
    return;
  }

  addLog('Wreckage had no usable gear this time.');
}

function useRepairKit() {
  if (!state.running || state.gameOver) {
    return;
  }

  if (state.inventory.repairKits <= 0) {
    addLog('No repair kits left.', 'bad');
    return;
  }

  if (state.hp >= state.maxHp) {
    addLog('Hull already at full HP.', 'bad');
    return;
  }

  state.inventory.repairKits -= 1;
  state.hp = Math.min(state.maxHp, state.hp + 30);
  addLog('Repair kit used. +30 HP.', 'good');
  triggerEventAnimation('repair', 52);
  syncHud();
  syncInventoryUi();
  draw();
}

function useSpray() {
  if (!state.running || state.gameOver) {
    return;
  }

  if (state.inventory.antiNibSpray <= 0) {
    addLog('No Anti-Nib spray left.', 'bad');
    return;
  }

  if (state.sprayArmed) {
    addLog('Spray is already armed.', 'bad');
    return;
  }

  state.inventory.antiNibSpray -= 1;
  state.sprayArmed = true;
  addLog('Anti-Nib spray armed for this turn.', 'good');
  triggerEventAnimation('spray', 52);
  syncInventoryUi();
  draw();
}

function useSonar() {
  if (!state.running || state.gameOver) {
    return;
  }

  if (state.inventory.sonarDisrupter <= 0) {
    addLog('No sonar disrupter left.', 'bad');
    return;
  }

  if (state.sonarArmed) {
    addLog('Sonar disrupter is already armed.', 'bad');
    return;
  }

  state.inventory.sonarDisrupter -= 1;
  state.sonarArmed = true;
  addLog('Sonar disrupter armed until a worm appears.', 'good');
  triggerEventAnimation('sonar', 52);
  syncInventoryUi();
  draw();
}

function useBouncer() {
  if (!state.running || state.gameOver) {
    return;
  }

  if (state.inventory.bouncer <= 0) {
    addLog('No bouncer charges left.', 'bad');
    return;
  }

  state.inventory.bouncer -= 1;
  addLog('Bouncer engaged: jumping 5 turns with hazard immunity.', 'good');

  for (let i = 0; i < 5; i += 1) {
    if (state.gameOver) {
      break;
    }
    processTurn({ skipHazards: true, skipLabel: 'Bouncer field active: hazards skipped this turn.' });
  }

  syncInventoryUi();
}

function buyItem(kind) {
  const prices = {
    repair: 15,
    spray: 5,
    bouncer: 30,
    maxHp: 50,
    sonar: 100,
    investor: 75,
  };

  const labels = {
    repair: 'Repair Kit',
    spray: 'Anti-Nib Spray',
    bouncer: 'Bouncer',
    maxHp: 'Max HP +10',
    sonar: 'Sonar Disrupter',
    investor: 'Investor',
  };

  if (state.points < prices[kind]) {
    addLog(`Not enough points for ${labels[kind]}.`, 'bad');
    return;
  }

  state.points -= prices[kind];

  if (kind === 'repair') {
    state.inventory.repairKits += 1;
  } else if (kind === 'spray') {
    state.inventory.antiNibSpray += 1;
  } else if (kind === 'bouncer') {
    state.inventory.bouncer += 1;
  } else if (kind === 'maxHp') {
    state.maxHp += 10;
    state.hp += 10;
    storeMaxHp();
  } else if (kind === 'sonar') {
    state.inventory.sonarDisrupter += 1;
  } else if (kind === 'investor') {
    state.investorOwned = true;
    storeInvestor();
  }

  storePoints();
  addLog(`Bought ${labels[kind]} for ${prices[kind]} points.`, 'good');
  syncHud();
  syncInventoryUi();
}

function resolveRoundState(checkWin) {
  if (!state.gameOver && state.food <= 0) {
    state.deathMode = 'starve';
    endGame('Out of food. The crawler rolls to a stop.', 'starve');
  }

  if (!state.gameOver && state.hp <= 0) {
    state.hp = 0;
    const explosiveHazards = new Set(['weather', 'coral', 'sink']);
    const cause = explosiveHazards.has(state.lastDamageSource) ? 'explode' : 'destroyed';
    state.deathMode = cause;
    if (cause === 'explode') {
      triggerEventAnimation('explode', 58);
      endGame('The crawler erupts into wreckage.', 'explode');
    } else {
      endGame('Hull integrity collapsed. Mission failed.', cause);
    }
  }

  if (checkWin && !state.gameOver && state.turn >= state.turnsToWin) {
    addLog('Extraction signal locked. You survived the crossing.', 'good');
    triggerEventAnimation('confetti', 140);
    endGame('Mission success. You won.', 'win');
  }
}

function endGame(message, cause = '') {
  state.gameOver = true;
  state.running = false;
  if (cause) {
    state.deathMode = cause;
  }
  updateRecords(cause === 'win');
  nextTurnBtn.disabled = true;
  setItemButtonsDisabled(true);
  addLog(message, message.includes('success') ? 'good' : 'bad');
}

function syncHud() {
  const hp = Math.max(0, state.hp);
  turnValue.textContent = String(state.turn);
  foodValue.textContent = String(state.food);
  pointsValue.textContent = String(state.points);
  targetValue.textContent = String(state.turnsToWin);
  hpValue.textContent = `${hp}/${state.maxHp}`;
  hpBarFill.style.width = `${(hp / state.maxHp) * 100}%`;

  if (hp > 60) {
    hpBarFill.style.background = 'linear-gradient(180deg, #a2f07a 0%, #4fb35d 55%, #2e7538 100%)';
  } else if (hp > 30) {
    hpBarFill.style.background = 'linear-gradient(180deg, #ffd173 0%, #d98f3f 55%, #92512a 100%)';
  } else {
    hpBarFill.style.background = 'linear-gradient(180deg, #ff9d66 0%, #d44f4f 55%, #8e2434 100%)';
  }
}

function loadStoredPoints() {
  try {
    const raw = window.localStorage.getItem(POINTS_STORAGE_KEY);
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed < 0) {
      return 0;
    }
    return Math.floor(parsed);
  } catch {
    return 0;
  }
}

function storePoints() {
  try {
    window.localStorage.setItem(POINTS_STORAGE_KEY, String(state.points));
  } catch {
    // Ignore storage failures and keep points in memory for the session.
  }
}

function loadStoredMaxHp() {
  try {
    const raw = window.localStorage.getItem(MAX_HP_STORAGE_KEY);
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed < 100) {
      return 100;
    }
    return Math.floor(parsed);
  } catch {
    return 100;
  }
}

function storeMaxHp() {
  try {
    window.localStorage.setItem(MAX_HP_STORAGE_KEY, String(state.maxHp));
  } catch {
    // Ignore storage failures and keep max HP in memory for the session.
  }
}

function loadStoredInvestor() {
  try {
    return window.localStorage.getItem(INVESTOR_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function storeInvestor() {
  try {
    window.localStorage.setItem(INVESTOR_STORAGE_KEY, String(state.investorOwned));
  } catch {
    // Ignore storage failures and keep investor state in memory for the session.
  }
}

function loadStoredRecords() {
  try {
    const raw = window.localStorage.getItem(RECORDS_STORAGE_KEY);
    if (!raw) {
      return {
        runs: 0,
        wins: 0,
        bestPoints: 0,
        bestTurns: 0,
      };
    }

    const parsed = JSON.parse(raw);
    return {
      runs: Number.isFinite(parsed.runs) ? Math.max(0, Math.floor(parsed.runs)) : 0,
      wins: Number.isFinite(parsed.wins) ? Math.max(0, Math.floor(parsed.wins)) : 0,
      bestPoints: Number.isFinite(parsed.bestPoints) ? Math.max(0, Math.floor(parsed.bestPoints)) : 0,
      bestTurns: Number.isFinite(parsed.bestTurns) ? Math.max(0, Math.floor(parsed.bestTurns)) : 0,
    };
  } catch {
    return {
      runs: 0,
      wins: 0,
      bestPoints: 0,
      bestTurns: 0,
    };
  }
}

function storeRecords() {
  try {
    window.localStorage.setItem(RECORDS_STORAGE_KEY, JSON.stringify(state.records));
  } catch {
    // Ignore storage failures and keep records in memory for the session.
  }
}

function updateRecords(won) {
  state.records.runs += 1;
  if (won) {
    state.records.wins += 1;
  }
  state.records.bestPoints = Math.max(state.records.bestPoints, state.points);
  state.records.bestTurns = Math.max(state.records.bestTurns, state.turn);
  storeRecords();
  syncRecordsUi();
}

function syncRecordsUi() {
  recordRuns.textContent = String(state.records.runs);
  recordWins.textContent = String(state.records.wins);
  recordBestPoints.textContent = String(state.records.bestPoints);
  recordBestTurns.textContent = String(state.records.bestTurns);
}

function syncInventoryUi() {
  repairCount.textContent = String(state.inventory.repairKits);
  sprayCount.textContent = String(state.inventory.antiNibSpray);
  sonarCount.textContent = String(state.inventory.sonarDisrupter);
  bouncerCount.textContent = String(state.inventory.bouncer);
  sprayStatus.textContent = state.sprayArmed ? 'Armed' : 'Inactive';
  sonarStatus.textContent = state.sonarArmed ? 'Armed' : 'Inactive';

  const inactive = !state.running || state.gameOver;
  repairBtn.disabled = inactive || state.inventory.repairKits <= 0 || state.hp >= state.maxHp;
  sprayBtn.disabled = inactive || state.inventory.antiNibSpray <= 0 || state.sprayArmed;
  sonarBtn.disabled = inactive || state.inventory.sonarDisrupter <= 0 || state.sonarArmed;
  bouncerBtn.disabled = inactive || state.inventory.bouncer <= 0;
  buyRepairBtn.disabled = state.points < 15;
  buySprayBtn.disabled = state.points < 5;
  buyBouncerBtn.disabled = state.points < 30;
  buyHpBtn.disabled = state.points < 50;
  buySonarBtn.disabled = state.points < 100;
  buyInvestorBtn.disabled = state.points < 75 || state.investorOwned;
}

function setItemButtonsDisabled(disabled) {
  repairBtn.disabled = disabled;
  sprayBtn.disabled = disabled;
  sonarBtn.disabled = disabled;
  bouncerBtn.disabled = disabled;
  buyRepairBtn.disabled = disabled;
  buySprayBtn.disabled = disabled;
  buyBouncerBtn.disabled = disabled;
  buyHpBtn.disabled = disabled;
  buySonarBtn.disabled = disabled;
  buyInvestorBtn.disabled = disabled;
}

function addLog(text, tone = '') {
  const p = document.createElement('p');
  p.className = `logEntry ${tone}`.trim();
  p.textContent = text;
  log.prepend(p);
}

function pickEvent() {
  const adjustedTable = buildEventTable();
  const total = adjustedTable.reduce((sum, item) => sum + item.weight, 0);
  let r = Math.random() * total;

  for (const item of adjustedTable) {
    r -= item.weight;
    if (r <= 0) {
      return item;
    }
  }

  return adjustedTable[0];
}

function draw() {
  drawBackground();
  drawTrack();
  drawDecor();
  drawCrawler();
  drawEventAnimation();
  drawStatusStrip();

  if (state.eventAnim) {
    state.eventAnim.tick += 0.5;
    state.eventAnim.frames -= 1;
    if (state.eventAnim.frames <= 0) {
      state.eventAnim = null;
    }
    requestAnimationFrame(draw);
  }
}

function drawBackground() {
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, '#152033');
  sky.addColorStop(0.42, '#261c24');
  sky.addColorStop(0.78, '#0b0b0f');
  sky.addColorStop(1, '#040405');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#5c4157';
  ctx.fillRect(90, 56, 60, 20);
  ctx.fillStyle = '#f0a55c';
  ctx.fillRect(100, 46, 40, 26);
  ctx.fillStyle = '#ffe6a0';
  ctx.fillRect(108, 54, 24, 10);

  for (let i = 0; i < 220; i += 1) {
    const x = (i * 71) % canvas.width;
    const y = (i * 37) % 220;
    const size = i % 5 === 0 ? 3 : 2;
    ctx.fillStyle = i % 9 === 0 ? '#c8d6ff' : '#7f8fb1';
    ctx.fillRect(x, y, size, size);
  }

  ctx.fillStyle = '#171217';
  ctx.beginPath();
  ctx.moveTo(0, 268);
  ctx.lineTo(160, 228);
  ctx.lineTo(320, 250);
  ctx.lineTo(490, 206);
  ctx.lineTo(700, 242);
  ctx.lineTo(860, 214);
  ctx.lineTo(canvas.width, 258);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();

  for (let y = 300; y < canvas.height; y += 26) {
    ctx.fillStyle = y % 52 === 0 ? '#0d0d0f' : '#131316';
    ctx.fillRect(0, y, canvas.width, 20);
  }

  for (let i = 0; i < 22; i += 1) {
    const duneX = 40 + i * 44;
    const duneY = 356 + (i % 3) * 14;
    ctx.fillStyle = i % 2 === 0 ? '#1d1b1f' : '#111114';
    ctx.fillRect(duneX, duneY, 40, 10);
    ctx.fillStyle = '#2a262d';
    ctx.fillRect(duneX + 6, duneY - 4, 16, 4);
  }
}

function drawTrack() {
  const startX = 70;
  const y = 300;
  const step = Math.floor((canvas.width - 140) / Math.max(1, state.trackLength - 1));

  for (let i = 0; i < state.trackLength; i += 1) {
    const x = startX + i * step;
    ctx.fillStyle = i <= state.position ? '#a77c35' : '#564228';
    ctx.fillRect(x - 16, y - 16, 32, 32);
    ctx.fillStyle = i <= state.position ? '#ceb46d' : '#7d6134';
    ctx.fillRect(x - 16, y - 16, 32, 5);
    ctx.fillStyle = '#2a1f12';
    ctx.fillRect(x - 11, y - 11, 22, 22);
    ctx.fillStyle = '#43331e';
    ctx.fillRect(x - 8, y - 8, 16, 16);

    if (i === state.turnsToWin) {
      ctx.fillStyle = '#7bc96f';
      ctx.fillRect(x - 6, y - 30, 12, 12);
      ctx.fillStyle = '#d8ff8e';
      ctx.fillRect(x - 2, y - 26, 4, 4);
    }
  }
}

function drawDecor() {
  for (let i = 0; i < 9; i += 1) {
    const x = 80 + i * 100;
    const h = 22 + ((i * 7) % 34);
    ctx.fillStyle = '#24222a';
    ctx.fillRect(x, 355 - h, 12, h);
    ctx.fillStyle = '#353340';
    ctx.fillRect(x + 3, 355 - h + 4, 3, h - 8);
  }

  ctx.fillStyle = '#31572b';
  ctx.fillRect(756, 382, 18, 10);
  ctx.fillRect(779, 375, 14, 10);
  ctx.fillStyle = '#4ec15c';
  ctx.fillRect(764, 370, 13, 8);
  ctx.fillRect(784, 366, 8, 6);

  ctx.fillStyle = '#5a4a31';
  ctx.fillRect(208, 402, 36, 6);
  ctx.fillStyle = '#877045';
  ctx.fillRect(216, 398, 14, 4);
}

function drawCrawler() {
  const { x, y } = getCrawlerPosition();
  const inert = state.gameOver && state.deathMode === 'starve';
  const vanished = state.gameOver && state.deathMode === 'worm';

  if (vanished) {
    return;
  }

  ctx.fillStyle = inert ? '#383a42' : '#424654';
  ctx.fillRect(x - 28, y + 8, 56, 14);
  ctx.fillStyle = inert ? '#1e2128' : '#252834';
  ctx.fillRect(x - 25, y + 10, 50, 10);
  ctx.fillStyle = inert ? '#4c505a' : '#697080';
  for (let i = 0; i < 10; i += 1) {
    ctx.fillRect(x - 24 + i * 5, y + 12, 3, 6);
  }

  ctx.fillStyle = inert ? '#686d7b' : '#8c93aa';
  ctx.fillRect(x - 16, y - 30, 32, 38);
  ctx.fillStyle = inert ? '#4e5462' : '#68718b';
  ctx.fillRect(x - 13, y - 26, 26, 30);
  ctx.fillStyle = inert ? '#3d4250' : '#4b536e';
  ctx.fillRect(x - 9, y - 46, 18, 16);
  ctx.fillRect(x - 5, y - 56, 10, 10);

  ctx.fillStyle = inert ? '#8a969e' : '#d7f2ff';
  ctx.fillRect(x - 9, y - 43, 18, 3);
  ctx.fillStyle = inert ? '#667b88' : '#84d2f0';
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      ctx.fillRect(x - 10 + col * 7, y - 22 + row * 5, 4, 3);
    }
  }

  ctx.fillStyle = inert ? '#8b866f' : '#d8c68f';
  ctx.fillRect(x - 1, y - 63, 2, 11);
  ctx.fillStyle = inert ? '#70778b' : '#8e99b3';
  ctx.fillRect(x - 17, y - 3, 34, 6);
  ctx.fillStyle = inert ? '#4f2c2c' : '#f05050';
  ctx.fillRect(x - 2, y - 66, 4, 3);
}

function drawEventAnimation() {
  if (!state.eventAnim) {
    return;
  }

  const type = state.eventAnim.type;

  if (type === 'weather') {
    for (let i = 0; i < 26; i += 1) {
      const sx = (i * 37 + state.eventAnim.tick * 9) % (canvas.width + 40) - 20;
      const sy = (i * 19) % (canvas.height - 80) + 30;
      ctx.fillStyle = '#b7c8e8';
      ctx.fillRect(sx, sy, 14, 2);
      ctx.fillStyle = '#6f88b8';
      ctx.fillRect(sx + 3, sy + 2, 6, 2);
    }
    return;
  }

  if (type === 'sink') {
    const { x, y } = getCrawlerPosition();
    ctx.fillStyle = 'rgba(20, 12, 8, 0.45)';
    ctx.fillRect(x - 34, y + 4, 68, 28);
    ctx.fillStyle = '#1a120d';
    ctx.fillRect(x - 22, y + 12, 44, 14);
    return;
  }

  if (type === 'coral') {
    const { x, y } = getCrawlerPosition();
    for (let i = 0; i < 6; i += 1) {
      const sx = x - 30 + i * 10;
      const h = 12 + ((i + state.eventAnim.tick) % 3) * 4;
      ctx.fillStyle = '#1d7d42';
      ctx.fillRect(sx, y + 22 - h, 4, h);
      ctx.fillStyle = '#7dff8d';
      ctx.fillRect(sx + 1, y + 20 - h, 2, 3);
      ctx.fillStyle = '#b1ffbb';
      ctx.fillRect(sx, y + 18 - h, 4, 1);
    }
    return;
  }

  if (type === 'worm') {
    drawWorm();
    return;
  }

  if (type === 'nibblorax') {
    drawNibblorax();
    return;
  }

  if (type === 'wreckage') {
    drawWreckage();
    return;
  }

  if (type === 'orchard') {
    drawOrchard();
    return;
  }

  if (type === 'spray') {
    drawSpray();
    return;
  }

  if (type === 'repair') {
    drawRepair();
    return;
  }

  if (type === 'explode') {
    drawExplosion();
    return;
  }

  if (type === 'bouncer') {
    drawBouncer();
    return;
  }

  if (type === 'sonar') {
    drawSonar();
    return;
  }

  if (type === 'plutonium') {
    drawPlutonium();
    return;
  }

  if (type === 'none') {
    ctx.fillStyle = 'rgba(200, 180, 120, 0.08)';
    ctx.fillRect(0, 260, canvas.width, 120);
    return;
  }

  if (type === 'confetti') {
    drawConfetti();
  }
}

function drawWorm() {
  const { x, y } = getCrawlerPosition();
  const tick = state.eventAnim ? state.eventAnim.tick : 0;
  const rise = Math.min(30, tick * 1.8);
  const swallow = tick > 18 ? Math.min(20, (tick - 18) * 1.2) : 0;
  const bodyLift = Math.min(20, tick);

  ctx.fillStyle = 'rgba(255, 60, 60, 0.18)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(x - 34, y + 12, 68, 14);
  ctx.fillStyle = '#1b1416';
  ctx.fillRect(x - 24, y + 10, 48, 8);

  // Broad segmented body, inspired by the Dune/OpenRA top-down sandworm silhouette.
  ctx.fillStyle = '#0f0f10';
  ctx.fillRect(x - 54, y + 34 - rise, 108, 30 + bodyLift);
  ctx.fillStyle = '#252528';
  for (let i = 0; i < 5; i += 1) {
    ctx.fillRect(x - 46 + i * 19, y + 38 - rise, 12, 18);
  }

  ctx.fillStyle = '#151517';
  ctx.fillRect(x - 26, y + 18 - rise, 52, 28 + swallow);
  ctx.fillStyle = '#2b1717';
  ctx.fillRect(x - 18, y + 14 - rise, 36, 30 + swallow);
  ctx.fillStyle = '#120707';
  ctx.fillRect(x - 10, y + 20 - rise, 20, 18 + swallow);

  ctx.fillStyle = '#d1b186';
  ctx.fillRect(x - 16, y + 11 - rise, 32, 6);
  ctx.fillRect(x - 16, y + 42 - rise + swallow, 32, 6);
  ctx.fillStyle = '#f0d8ab';
  ctx.fillRect(x - 9, y + 13 - rise, 18, 2);
  ctx.fillRect(x - 9, y + 44 - rise + swallow, 18, 2);

  for (let i = 0; i < 7; i += 1) {
    const sx = x - 44 + i * 14;
    const spikeH = 8 + ((i + Math.floor(tick)) % 2) * 3;
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(sx, y + 14 - rise - spikeH, 8, spikeH);
    ctx.fillStyle = '#ff4545';
    ctx.fillRect(sx + 2, y + 11 - rise - spikeH, 4, 3);
  }

  if (tick > 12) {
    ctx.fillStyle = 'rgba(12, 12, 12, 0.65)';
    ctx.fillRect(x - 24, y - 52 + swallow, 48, 76 - swallow);
  }
}

function drawNibblorax() {
  const { x, y } = getCrawlerPosition();
  const bob = state.eventAnim.tick % 6 < 3 ? 0 : 1;

  // Trilobite-like black shell with red eyes.
  ctx.fillStyle = '#0f0f11';
  ctx.fillRect(x + 12, y - 4 - bob, 40, 16);
  ctx.fillRect(x + 18, y - 10 - bob, 28, 6);

  ctx.fillStyle = '#1f2024';
  for (let i = 0; i < 5; i += 1) {
    ctx.fillRect(x + 16 + i * 7, y - 2 - bob, 5, 12);
  }

  ctx.fillStyle = '#17181b';
  ctx.fillRect(x + 24, y - 14 - bob, 16, 4);

  ctx.fillStyle = '#ff3a3a';
  ctx.fillRect(x + 25, y - 8 - bob, 3, 3);
  ctx.fillRect(x + 36, y - 8 - bob, 3, 3);

  ctx.fillStyle = '#0b0b0c';
  for (let i = 0; i < 4; i += 1) {
    ctx.fillRect(x + 16 + i * 9, y + 10, 2, 5);
    ctx.fillRect(x + 19 + i * 9, y + 10, 2, 5);
  }

  ctx.fillStyle = '#2a0e12';
  ctx.fillRect(x + 18, y + 2 - bob, 4, 3);
  ctx.fillRect(x + 42, y + 2 - bob, 4, 3);

  if (state.eventAnim.data && typeof state.eventAnim.data.eaten === 'number') {
    ctx.fillStyle = '#ffb0a0';
    ctx.font = '14px Courier New';
    ctx.fillText(`-${state.eventAnim.data.eaten} FOOD`, x - 16, y - 42);
  }
}

function drawWreckage() {
  const { x, y } = getCrawlerPosition();
  ctx.fillStyle = '#6a717e';
  ctx.fillRect(x + 18, y - 10, 28, 18);
  ctx.fillStyle = '#9aa4b3';
  ctx.fillRect(x + 24, y - 6, 7, 7);
  ctx.fillRect(x + 34, y - 4, 8, 10);
  ctx.fillStyle = '#acd9ff';
  ctx.fillRect(x - 7, y - 42, 5, 18);
  ctx.fillRect(x - 14, y - 35, 19, 5);
  ctx.fillStyle = '#e1f4ff';
  ctx.fillRect(x - 5, y - 40, 1, 14);
}

function drawOrchard() {
  const { x, y } = getCrawlerPosition();
  for (let i = 0; i < 4; i += 1) {
    const ox = x + 18 + i * 10;
    ctx.fillStyle = '#45652d';
    ctx.fillRect(ox, y - 4, 3, 12);
    ctx.fillStyle = '#4dc356';
    ctx.fillRect(ox - 4, y - 14, 11, 10);
    ctx.fillStyle = '#a1ff87';
    ctx.fillRect(ox, y - 11 + ((state.eventAnim.tick + i) % 2), 3, 3);
    ctx.fillStyle = '#d8ffba';
    ctx.fillRect(ox - 1, y - 15, 5, 2);
  }
  ctx.fillStyle = '#b7ffaf';
  ctx.font = '14px Courier New';
  ctx.fillText('+50 FOOD', x - 8, y - 42);
}

function drawSpray() {
  const { x, y } = getCrawlerPosition();
  for (let i = 0; i < 14; i += 1) {
    const dx = -20 + ((i * 13 + state.eventAnim.tick * 4) % 56);
    const dy = -26 + ((i * 17 + state.eventAnim.tick * 3) % 36);
    ctx.fillStyle = i % 2 === 0 ? '#a8ff95' : '#55d46c';
    ctx.fillRect(x + dx, y + dy, 4, 4);
  }
}

function drawRepair() {
  const { x, y } = getCrawlerPosition();
  ctx.fillStyle = '#7ec7ff';
  ctx.fillRect(x - 4, y - 48, 8, 22);
  ctx.fillRect(x - 12, y - 40, 24, 8);
  ctx.fillStyle = '#d7f2ff';
  ctx.fillRect(x - 2, y - 45, 4, 16);
  ctx.fillRect(x - 9, y - 37, 18, 3);
}

function drawExplosion() {
  const { x, y } = getCrawlerPosition();
  const phase = Math.floor(state.eventAnim.tick) % 4;
  const radius = 14 + Math.floor(state.eventAnim.tick) * 2;

  ctx.fillStyle = 'rgba(255, 120, 70, 0.18)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ffdd8a';
  ctx.fillRect(x - 6 - phase, y - 10 - phase, 12 + phase * 2, 12 + phase * 2);
  ctx.fillStyle = '#ff9b47';
  ctx.fillRect(x - 14, y - 4 - phase, 28, 10 + phase * 2);
  ctx.fillStyle = '#d94b2e';
  ctx.fillRect(x - radius, y - 2, radius * 2, 6);
  ctx.fillRect(x - 6, y - radius, 12, radius * 2);
  ctx.fillStyle = '#4a1d16';
  ctx.fillRect(x - 18, y + 10, 8, 4);
  ctx.fillRect(x + 10, y + 8, 10, 5);
  ctx.fillRect(x - 4, y - 18, 6, 6);
}

function drawConfetti() {
  const tick = state.eventAnim ? state.eventAnim.tick : 0;
  const colors = ['#ff6b6b', '#ffd93d', '#6bffb8', '#72d6ff', '#c792ff', '#ffffff'];

  for (let i = 0; i < 54; i += 1) {
    const lane = i % 6;
    const x = ((i * 53) + tick * (2 + lane)) % (canvas.width + 40) - 20;
    const y = ((Math.floor(i / 6) * 24) + tick * (3 + (lane % 3))) % (canvas.height + 30) - 10;
    const size = 4 + (i % 3);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(x, y, size, size);
    ctx.fillRect(x + 2, y + size, 2, 3);
  }
}

function drawBouncer() {
  const { x, y } = getCrawlerPosition();
  const phase = state.eventAnim.tick % 4;

  ctx.fillStyle = '#79cbff';
  ctx.fillRect(x - 34 - phase * 2, y - 12, 12, 3);
  ctx.fillRect(x - 48 - phase * 3, y - 7, 14, 3);
  ctx.fillRect(x + 22 + phase * 2, y - 12, 12, 3);
  ctx.fillRect(x + 36 + phase * 3, y - 7, 14, 3);

  ctx.fillStyle = 'rgba(108, 183, 255, 0.16)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSonar() {
  const { x, y } = getCrawlerPosition();
  const radius = 18 + (state.eventAnim.tick % 10) * 4;
  ctx.strokeStyle = '#86f6ff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y - 8, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y - 8, Math.max(10, radius - 12), 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = 'rgba(134, 246, 255, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPlutonium() {
  const { x, y } = getCrawlerPosition();
  const pulse = Math.floor(state.eventAnim.tick) % 3;

  ctx.fillStyle = '#72f6a5';
  ctx.fillRect(x - 6, y - 52, 12, 12);
  ctx.fillStyle = '#b6ffd2';
  ctx.fillRect(x - 2, y - 48, 4, 4);

  ctx.fillStyle = '#6ee4ff';
  ctx.fillRect(x - 38 - pulse * 2, y - 8, 14, 3);
  ctx.fillRect(x - 54 - pulse * 3, y - 2, 18, 3);
  ctx.fillRect(x + 24 + pulse * 2, y - 8, 14, 3);
  ctx.fillRect(x + 38 + pulse * 3, y - 2, 18, 3);

  ctx.fillStyle = 'rgba(110, 228, 255, 0.18)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawStatusStrip() {
  ctx.fillStyle = '#101826';
  ctx.fillRect(0, 0, canvas.width, 28);
  ctx.fillStyle = '#576785';
  ctx.fillRect(0, 25, canvas.width, 3);

  ctx.fillStyle = '#e4e6dc';
  ctx.font = 'bold 14px Verdana';
  const status = state.gameOver ? 'MISSION ENDED' : 'ACTIVE MISSION';
  ctx.fillText(status, 12, 18);
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function triggerEventAnimation(type, frames, data = null) {
  if (state.eventAnim && state.eventAnim.type === type) {
    state.eventAnim.frames += frames;
    if (data) {
      state.eventAnim.data = data;
    }
    return;
  }

  state.eventAnim = {
    type,
    frames,
    tick: 0,
    data,
  };
}

function buildEventTable() {
  const extraNibbloraxWeight = Math.floor(state.food / 40);
  return eventTable.map((item) => {
    if (item.key === 'nibblorax') {
      return {
        ...item,
        weight: item.weight + extraNibbloraxWeight,
      };
    }

    if (item.key === 'none') {
      return {
        ...item,
        weight: Math.max(8, item.weight - Math.floor(extraNibbloraxWeight / 2)),
      };
    }

    return item;
  });
}

function getCrawlerPosition() {
  const startX = 70;
  const y = 300;
  const step = Math.floor((canvas.width - 140) / Math.max(1, state.trackLength - 1));
  const x = startX + state.position * step;
  return { x, y };
}

state.points = loadStoredPoints();
state.maxHp = loadStoredMaxHp();
state.investorOwned = loadStoredInvestor();
state.records = loadStoredRecords();
state.hp = state.maxHp;
state.turnsToWin = 20;
state.trackLength = 22;
syncInventoryUi();
syncHud();
syncRecordsUi();
draw();
