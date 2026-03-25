const titlePanel = document.getElementById('titlePanel');
const setupPanel = document.getElementById('setupPanel');
const gamePanel = document.getElementById('gamePanel');
const enterBtn = document.getElementById('enterBtn');
const foodInput = document.getElementById('foodInput');
const startBtn = document.getElementById('startBtn');
const mathModeToggle = document.getElementById('mathModeToggle');
const mathOpSelect = document.getElementById('mathOpSelect');
const setupPointsValue = document.getElementById('setupPointsValue');
const setupLoadoutRepair = document.getElementById('setupLoadoutRepair');
const setupLoadoutSpray = document.getElementById('setupLoadoutSpray');
const setupLoadoutBouncer = document.getElementById('setupLoadoutBouncer');
const setupLoadoutSonar = document.getElementById('setupLoadoutSonar');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const showTrackToggle = document.getElementById('showTrackToggle');
const uiClickSoundToggle = document.getElementById('uiClickSoundToggle');
const animationSpeedSlider = document.getElementById('animationSpeedSlider');
const animationSpeedValue = document.getElementById('animationSpeedValue');
const nextTurnBtn = document.getElementById('nextTurnBtn');
const restartBtn = document.getElementById('restartBtn');

const repairBtn = document.getElementById('repairBtn');
const sprayBtn = document.getElementById('sprayBtn');
const sonarBtn = document.getElementById('sonarBtn');
const bouncerBtn = document.getElementById('bouncerBtn');
const pickaxeBtn = document.getElementById('pickaxeBtn');
const windmillBtn = document.getElementById('windmillBtn');
const buyRepairBtn = document.getElementById('buyRepairBtn');
const buySprayBtn = document.getElementById('buySprayBtn');
const buyBouncerBtn = document.getElementById('buyBouncerBtn');
const buyHpBtn = document.getElementById('buyHpBtn');
const buySonarBtn = document.getElementById('buySonarBtn');
const buyInvestorBtn = document.getElementById('buyInvestorBtn');
const nativeTraderPanel = document.getElementById('nativeTraderPanel');
const traderOffers = document.getElementById('traderOffers');
const traderSellOffers = document.getElementById('traderSellOffers');
const declineTraderBtn = document.getElementById('declineTraderBtn');
const tabletPanel = document.getElementById('tabletPanel');
const tabletTitle = document.getElementById('tabletTitle');
const tabletBody = document.getElementById('tabletBody');
const tabletNav = document.getElementById('tabletNav');
const tabletPrevBtn = document.getElementById('tabletPrevBtn');
const tabletNextBtn = document.getElementById('tabletNextBtn');
const tabletCounter = document.getElementById('tabletCounter');
const templeVision = document.getElementById('templeVision');
const templeVisionText = document.getElementById('templeVisionText');
const closeTabletBtn = document.getElementById('closeTabletBtn');
const colonizePrompt = document.getElementById('colonizePrompt');
const colonizeText = document.getElementById('colonizeText');
const colonizeYesBtn = document.getElementById('colonizeYesBtn');
const colonizeNoBtn = document.getElementById('colonizeNoBtn');
const manageColonyBtn = document.getElementById('manageColonyBtn');
const colonyMapPanel = document.getElementById('colonyMapPanel');
const regionGrid = document.getElementById('regionGrid');
const cancelColonizeBtn = document.getElementById('cancelColonizeBtn');
const colonyPanel = document.getElementById('colonyPanel');
const colonyRegionValue = document.getElementById('colonyRegionValue');
const colonyCycleValue = document.getElementById('colonyCycleValue');
const colonyFoodValue = document.getElementById('colonyFoodValue');
const colonySuppliesValue = document.getElementById('colonySuppliesValue');
const colonyPlutoniumValue = document.getElementById('colonyPlutoniumValue');
const colonyPowerValue = document.getElementById('colonyPowerValue');
const colonyPowerDemandValue = document.getElementById('colonyPowerDemandValue');
const colonyStabilityValue = document.getElementById('colonyStabilityValue');
const colonyDefenseValue = document.getElementById('colonyDefenseValue');
const colonyRegionFlavor = document.getElementById('colonyRegionFlavor');
const colonyBuildViz = document.getElementById('colonyBuildViz');
const advanceColonyBtn = document.getElementById('advanceColonyBtn');
const restartColonyBtn = document.getElementById('restartColonyBtn');
const openColonyMapBtn = document.getElementById('openColonyMapBtn');
const openCapitalMarketBtn = document.getElementById('openCapitalMarketBtn');
const openIslandTakeoverBtn = document.getElementById('openIslandTakeoverBtn');
const backToSetupBtn = document.getElementById('backToSetupBtn');
const colonyLog = document.getElementById('colonyLog');
const colonyTerritoryPanel = document.getElementById('colonyTerritoryPanel');
const territoryMap = document.getElementById('territoryMap');
const closeColonyMapBtn = document.getElementById('closeColonyMapBtn');
const capitalMarketPanel = document.getElementById('capitalMarketPanel');
const marketCanvas = document.getElementById('marketCanvas');
const marketNotice = document.getElementById('marketNotice');
const marketPointsValue = document.getElementById('marketPointsValue');
const closeCapitalMarketBtn = document.getElementById('closeCapitalMarketBtn');
const islandTakeoverPanel = document.getElementById('islandTakeoverPanel');
const mainlandCycleValue = document.getElementById('mainlandCycleValue');
const mainlandActionsValue = document.getElementById('mainlandActionsValue');
const mainlandMap = document.getElementById('mainlandMap');
const mainlandLog = document.getElementById('mainlandLog');
const advanceMainlandCycleBtn = document.getElementById('advanceMainlandCycleBtn');
const skipMainlandCycleBtn = document.getElementById('skipMainlandCycleBtn');
const closeIslandTakeoverBtn = document.getElementById('closeIslandTakeoverBtn');
const farmCount = document.getElementById('farmCount');
const powerPlantCount = document.getElementById('powerPlantCount');
const mineCount = document.getElementById('mineCount');
const factoryCount = document.getElementById('factoryCount');
const businessHouseCount = document.getElementById('businessHouseCount');
const storageHouseCount = document.getElementById('storageHouseCount');
const barracksCount = document.getElementById('barracksCount');
const troopCount = document.getElementById('troopCount');
const groundAnchorCount = document.getElementById('groundAnchorCount');
const explorerStatus = document.getElementById('explorerStatus');
const explorerOutposts = document.getElementById('explorerOutposts');
const explorerTargets = document.getElementById('explorerTargets');
const supportColonyStatus = document.getElementById('supportColonyStatus');
const supportColonyList = document.getElementById('supportColonyList');
const templeSearchHeading = document.getElementById('templeSearchHeading');
const templeSearchPanel = document.getElementById('templeSearchPanel');
const templeSearchStatus = document.getElementById('templeSearchStatus');
const startTempleSearchBtn = document.getElementById('startTempleSearchBtn');
const readWallRiddleBtn = document.getElementById('readWallRiddleBtn');
const buildFarmBtn = document.getElementById('buildFarmBtn');
const buildPowerPlantBtn = document.getElementById('buildPowerPlantBtn');
const buildMineBtn = document.getElementById('buildMineBtn');
const buildFactoryBtn = document.getElementById('buildFactoryBtn');
const buildBusinessHouseBtn = document.getElementById('buildBusinessHouseBtn');
const buildStorageBtn = document.getElementById('buildStorageBtn');
const buildBarracksBtn = document.getElementById('buildBarracksBtn');
const buildTroopBtn = document.getElementById('buildTroopBtn');
const buildGroundAnchorBtn = document.getElementById('buildGroundAnchorBtn');

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
const pickaxeCount = document.getElementById('pickaxeCount');
const windmillCount = document.getElementById('windmillCount');
const tabletCount = document.getElementById('tabletCount');
const sprayStatus = document.getElementById('sprayStatus');
const sonarStatus = document.getElementById('sonarStatus');
const pickaxeStatus = document.getElementById('pickaxeStatus');
const windmillStatus = document.getElementById('windmillStatus');
const tabletStatus = document.getElementById('tabletStatus');
const readTabletBtn = document.getElementById('readTabletBtn');
const log = document.getElementById('log');
const logNoteInput = document.getElementById('logNoteInput');
const logNoteBtn = document.getElementById('logNoteBtn');
const mathQuestionPanel = document.getElementById('mathQuestionPanel');
const mathQuestionLabel = document.getElementById('mathQuestionLabel');
const mathQuestionText = document.getElementById('mathQuestionText');
const mathAnswerInput = document.getElementById('mathAnswerInput');
const mathSubmitBtn = document.getElementById('mathSubmitBtn');
const mathConsole = mathQuestionPanel ? mathQuestionPanel.querySelector('.mathConsole') : null;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const marketCtx = marketCanvas.getContext('2d');
marketCtx.imageSmoothingEnabled = false;

const POINTS_STORAGE_KEY = 'black-sand-colony-run-points';
const MAX_HP_STORAGE_KEY = 'black-sand-colony-run-max-hp';
const INVESTOR_STORAGE_KEY = 'black-sand-colony-run-investor';
const RECORD_RUNS_STORAGE_KEY = 'black-sand-colony-run-record-runs';
const RECORD_WINS_STORAGE_KEY = 'black-sand-colony-run-record-wins';
const RECORD_BEST_POINTS_STORAGE_KEY = 'black-sand-colony-run-record-best-points';
const RECORD_BEST_TURNS_STORAGE_KEY = 'black-sand-colony-run-record-best-turns';
const WIN_REWARD_POINTS = 50;
const FLY_JACKPOT_POINTS = 50000;
const WORM_COMPLIMENT_POINTS = 1000;
const LAWYER_INTERVENTION_POINTS = 50;
const NATIVE_SCAM_RATE_MULT = 1;
const TABLET_STORAGE_KEY = 'black-sand-colony-run-tablets';
const COLONY_STORAGE_KEY = 'black-sand-colony-run-colony';
const COLONIZE_DELAY_STORAGE_KEY = 'black-sand-colony-run-colonize-delay';
const SONAR_WORM_BLOCKED_STORAGE_KEY = 'black-sand-colony-sonar-blocked-worm';
const WORM_COMPLIMENT_COUNT_STORAGE_KEY = 'black-sand-colony-worm-compliment-count';
const MATH_MODE_ENABLED_STORAGE_KEY = 'open-for-settlement-math-mode-enabled';
const MATH_MODE_OPERATOR_STORAGE_KEY = 'open-for-settlement-math-mode-operator';
const LOADOUT_STORAGE_KEY = 'open-for-settlement-loadout';
const VOLUME_STORAGE_KEY = 'open-for-settlement-volume';
const SHOW_TRACK_STORAGE_KEY = 'open-for-settlement-show-track';
const UI_CLICK_SOUND_STORAGE_KEY = 'open-for-settlement-ui-click-sound';
const ANIMATION_SPEED_STORAGE_KEY = 'open-for-settlement-animation-speed';

const REGION_DATA = {
  forest: {
    id: 'forest',
    name: 'Glowcore Forest',
    summary: 'Food is abundant, but the coral never stops growing around the colony lanes.',
    mapText: 'Glowcore Forest: abundant food, constant coral pressure.',
    foodMult: 1.65,
    mineMult: 0.9,
    factoryMult: 1,
    supplyUpkeep: 2,
    cyclePoints: 6,
  },
  flats: {
    id: 'flats',
    name: 'Plutonium Flats',
    summary: 'Mines are amazing here, but every deep tremor feels like wormsign.',
    mapText: 'Plutonium Flats: rich fuel seams, permanent worm risk.',
    foodMult: 0.8,
    mineMult: 1.9,
    factoryMult: 1.05,
    supplyUpkeep: 1,
    cyclePoints: 8,
  },
  mergi: {
    id: 'mergi',
    name: 'Mergi Wastes',
    summary: 'The Mergi Wastes are the sinking fields: cursed ground, Nibbloraxes, and constant collapse.',
    mapText: 'Mergi Wastes: the sinking fields from the Terrarex tablet.',
    foodMult: 0.55,
    mineMult: 0.75,
    factoryMult: 0.9,
    supplyUpkeep: 8,
    cyclePoints: 4,
  },
  capital: {
    id: 'capital',
    name: 'Native Capital',
    summary: 'Best place to trade. The natives will barter for nearly anything.',
    mapText: 'Native Capital: easiest trading network on Kharox.',
    foodMult: 1,
    mineMult: 0.85,
    factoryMult: 1.1,
    supplyUpkeep: 1,
    cyclePoints: 12,
  },
};

const BUILDING_DATA = {
  farms: { label: 'Farm', suppliesCost: 35 },
  powerPlants: { label: 'Power Plant', suppliesCost: 45 },
  mines: { label: 'Mine', suppliesCost: 0 },
  factories: { label: 'Factory', suppliesCost: 40 },
  businessHouses: { label: 'Business House', suppliesCost: 45 },
  storageHouses: { label: 'Storage House', suppliesCost: 30 },
  barracks: { label: 'Barracks', suppliesCost: 50 },
  troops: { label: 'Troop', suppliesCost: 20 },
  groundAnchors: { label: 'Ground Anchor', suppliesCost: 55 },
};

const MAP_SIZE = 13;
const MAINLAND_SIZE = 30;
const MINE_CAP = 500;
const MAINLAND_MASK = buildMainlandMask();
const AUDIO_ENABLED = true;
const audioState = {
  ctx: null,
  master: null,
};

function ensureAudioContext() {
  if (!AUDIO_ENABLED) {
    return null;
  }
  if (audioState.ctx) {
    return audioState.ctx;
  }
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    return null;
  }
  const ctx = new AudioCtx();
  const master = ctx.createGain();
  const volume = typeof state !== 'undefined' && Number.isFinite(state.masterVolume)
    ? Math.max(0, Math.min(100, state.masterVolume))
    : 100;
  master.gain.value = 0.34 * (volume / 100);
  master.connect(ctx.destination);
  audioState.ctx = ctx;
  audioState.master = master;
  return ctx;
}

function unlockAudioContext() {
  const ctx = ensureAudioContext();
  if (!ctx) {
    return;
  }
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
}

function updateAudioMasterGain() {
  if (!audioState.master) {
    return;
  }
  const volume = Math.max(0, Math.min(100, state.masterVolume));
  audioState.master.gain.value = 0.34 * (volume / 100);
}

function playCrawlerMoveSound(isJumpTurn) {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const duration = isJumpTurn ? 0.2 : 0.28;
  const baseFreq = isJumpTurn ? 74 : 58;
  const endFreq = isJumpTurn ? 52 : 44;

  const engine = ctx.createOscillator();
  engine.type = 'sawtooth';
  engine.frequency.setValueAtTime(baseFreq, now);
  engine.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

  const engineGain = ctx.createGain();
  engineGain.gain.setValueAtTime(0.0001, now);
  engineGain.gain.linearRampToValueAtTime(isJumpTurn ? 0.08 : 0.11, now + 0.02);
  engineGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  const grit = ctx.createOscillator();
  grit.type = 'square';
  grit.frequency.setValueAtTime(isJumpTurn ? 30 : 24, now);
  const gritGain = ctx.createGain();
  gritGain.gain.setValueAtTime(0.0001, now);
  gritGain.gain.linearRampToValueAtTime(0.035, now + 0.02);
  gritGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  engine.connect(engineGain);
  grit.connect(gritGain);
  engineGain.connect(audioState.master);
  gritGain.connect(audioState.master);

  engine.start(now);
  grit.start(now);
  engine.stop(now + duration + 0.01);
  grit.stop(now + duration + 0.01);
}

function playNibbloraxMunchSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;

  // Three quick crunchy bites.
  for (let i = 0; i < 3; i += 1) {
    const t = now + (i * 0.08);
    const bite = ctx.createOscillator();
    bite.type = 'square';
    bite.frequency.setValueAtTime(310 - (i * 28), t);
    bite.frequency.exponentialRampToValueAtTime(190 - (i * 18), t + 0.06);

    const biteGain = ctx.createGain();
    biteGain.gain.setValueAtTime(0.0001, t);
    biteGain.gain.linearRampToValueAtTime(0.17, t + 0.01);
    biteGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);

    bite.connect(biteGain);
    biteGain.connect(audioState.master);
    bite.start(t);
    bite.stop(t + 0.08);
  }
}

function playOrchardGrassSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;

  // Soft rustle using filtered noise.
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.5), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.55;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1600, now);
  filter.Q.value = 0.8;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.065, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.48);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.5);

  // Light positive tone layered over the rustle.
  const tone = ctx.createOscillator();
  tone.type = 'triangle';
  tone.frequency.setValueAtTime(720, now);
  tone.frequency.exponentialRampToValueAtTime(980, now + 0.2);
  const toneGain = ctx.createGain();
  toneGain.gain.setValueAtTime(0.0001, now);
  toneGain.gain.linearRampToValueAtTime(0.035, now + 0.03);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
  tone.connect(toneGain);
  toneGain.connect(audioState.master);
  tone.start(now);
  tone.stop(now + 0.32);
}

function playJumpWhooshSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.35), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.65;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(420, now);
  filter.frequency.exponentialRampToValueAtTime(1800, now + 0.24);
  filter.Q.value = 0.8;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.11, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.3);
}

function playWormRoarSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const roar = ctx.createOscillator();
  roar.type = 'sawtooth';
  roar.frequency.setValueAtTime(82, now);
  roar.frequency.exponentialRampToValueAtTime(58, now + 0.28);
  roar.frequency.exponentialRampToValueAtTime(74, now + 0.52);
  const sub = ctx.createOscillator();
  sub.type = 'triangle';
  sub.frequency.setValueAtTime(39, now);
  sub.frequency.exponentialRampToValueAtTime(28, now + 0.52);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.14, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
  roar.connect(gain);
  sub.connect(gain);
  gain.connect(audioState.master);
  roar.start(now);
  sub.start(now);
  roar.stop(now + 0.64);
  sub.stop(now + 0.64);
}

function playWeatherWhistleSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const wind = ctx.createOscillator();
  wind.type = 'triangle';
  wind.frequency.setValueAtTime(940, now);
  wind.frequency.exponentialRampToValueAtTime(540, now + 0.2);
  wind.frequency.exponentialRampToValueAtTime(1040, now + 0.45);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.065, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
  wind.connect(gain);
  gain.connect(audioState.master);
  wind.start(now);
  wind.stop(now + 0.52);
}

function playNativeRaspSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;

  // Grainy throat layer.
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.28), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.85;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const throatFilter = ctx.createBiquadFilter();
  throatFilter.type = 'bandpass';
  throatFilter.frequency.setValueAtTime(420, now);
  throatFilter.frequency.exponentialRampToValueAtTime(300, now + 0.18);
  throatFilter.Q.value = 1.4;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.linearRampToValueAtTime(0.075, now + 0.02);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
  noise.connect(throatFilter);
  throatFilter.connect(noiseGain);
  noiseGain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.26);

  // Two rough vocal pulses.
  for (let i = 0; i < 2; i += 1) {
    const t = now + (i * 0.11);
    const voice = ctx.createOscillator();
    voice.type = 'sawtooth';
    voice.frequency.setValueAtTime(165 - (i * 14), t);
    voice.frequency.exponentialRampToValueAtTime(118 - (i * 10), t + 0.08);
    const voiceGain = ctx.createGain();
    voiceGain.gain.setValueAtTime(0.0001, t);
    voiceGain.gain.linearRampToValueAtTime(0.058, t + 0.015);
    voiceGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    voice.connect(voiceGain);
    voiceGain.connect(audioState.master);
    voice.start(t);
    voice.stop(t + 0.11);
  }
}

function playTradeChingSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const a = ctx.createOscillator();
  a.type = 'triangle';
  a.frequency.setValueAtTime(980, now);
  a.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
  const b = ctx.createOscillator();
  b.type = 'triangle';
  b.frequency.setValueAtTime(1320, now + 0.06);
  b.frequency.exponentialRampToValueAtTime(1700, now + 0.16);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.095, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
  a.connect(gain);
  b.connect(gain);
  gain.connect(audioState.master);
  a.start(now);
  b.start(now + 0.06);
  a.stop(now + 0.2);
  b.stop(now + 0.24);
}

function playMetalClangSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const hit = ctx.createOscillator();
  hit.type = 'triangle';
  hit.frequency.setValueAtTime(520, now);
  hit.frequency.exponentialRampToValueAtTime(240, now + 0.16);
  const ring = ctx.createOscillator();
  ring.type = 'sine';
  ring.frequency.setValueAtTime(920, now + 0.01);
  ring.frequency.exponentialRampToValueAtTime(610, now + 0.22);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.18, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
  hit.connect(gain);
  ring.connect(gain);
  gain.connect(audioState.master);
  hit.start(now);
  ring.start(now + 0.01);
  hit.stop(now + 0.2);
  ring.stop(now + 0.34);
}

function playDiggingSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.62), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.8;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(280, now);
  filter.frequency.exponentialRampToValueAtTime(1320, now + 0.48);
  filter.Q.value = 0.95;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.22, now + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.62);
}

function playCoralScrapeSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;

  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.38), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.8;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  const scrapeFilter = ctx.createBiquadFilter();
  scrapeFilter.type = 'bandpass';
  scrapeFilter.frequency.setValueAtTime(1800, now);
  scrapeFilter.frequency.exponentialRampToValueAtTime(850, now + 0.3);
  scrapeFilter.Q.value = 1.2;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.085, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

  noise.connect(scrapeFilter);
  scrapeFilter.connect(gain);
  gain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.38);
}

function playSinkSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const gurgle = ctx.createOscillator();
  gurgle.type = 'sine';
  gurgle.frequency.setValueAtTime(130, now);
  gurgle.frequency.exponentialRampToValueAtTime(70, now + 0.22);
  const grit = ctx.createOscillator();
  grit.type = 'triangle';
  grit.frequency.setValueAtTime(240, now);
  grit.frequency.exponentialRampToValueAtTime(110, now + 0.24);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  gurgle.connect(gain);
  grit.connect(gain);
  gain.connect(audioState.master);
  gurgle.start(now);
  grit.start(now);
  gurgle.stop(now + 0.3);
  grit.stop(now + 0.3);
}

function playSpraySound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.28), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.7;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(1700, now);
  filter.frequency.exponentialRampToValueAtTime(1100, now + 0.2);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.085, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.26);
}

function playUiClickSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const click = ctx.createOscillator();
  click.type = 'square';
  click.frequency.setValueAtTime(820, now);
  click.frequency.exponentialRampToValueAtTime(460, now + 0.045);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.03, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
  click.connect(gain);
  gain.connect(audioState.master);
  click.start(now);
  click.stop(now + 0.055);
}

function playMathTypeBeepSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const tone = ctx.createOscillator();
  tone.type = 'square';
  tone.frequency.setValueAtTime(980, now);
  tone.frequency.exponentialRampToValueAtTime(700, now + 0.075);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.075, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
  tone.connect(gain);
  gain.connect(audioState.master);
  tone.start(now);
  tone.stop(now + 0.095);
}

function playMathBackspaceBeepSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const tone = ctx.createOscillator();
  tone.type = 'square';
  tone.frequency.setValueAtTime(480, now);
  tone.frequency.exponentialRampToValueAtTime(320, now + 0.08);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.045, now + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
  tone.connect(gain);
  gain.connect(audioState.master);
  tone.start(now);
  tone.stop(now + 0.1);
}

function playMathCorrectDingSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const a = ctx.createOscillator();
  const b = ctx.createOscillator();
  a.type = 'triangle';
  b.type = 'triangle';
  a.frequency.setValueAtTime(880, now);
  b.frequency.setValueAtTime(1180, now + 0.045);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.09, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
  a.connect(gain);
  b.connect(gain);
  gain.connect(audioState.master);
  a.start(now);
  b.start(now + 0.045);
  a.stop(now + 0.18);
  b.stop(now + 0.2);
}

function playMathWrongDongSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const tone = ctx.createOscillator();
  tone.type = 'sine';
  tone.frequency.setValueAtTime(220, now);
  tone.frequency.exponentialRampToValueAtTime(132, now + 0.22);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);
  tone.connect(gain);
  gain.connect(audioState.master);
  tone.start(now);
  tone.stop(now + 0.28);
}

function playMudSplorgSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.42), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.75;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(760, now);
  filter.frequency.exponentialRampToValueAtTime(180, now + 0.34);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.2, now + 0.014);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.42);
}

function playSonarBeepSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  for (let i = 0; i < 2; i += 1) {
    const t = now + (i * 0.18);
    const beep = ctx.createOscillator();
    beep.type = 'sine';
    beep.frequency.setValueAtTime(980, t);
    beep.frequency.exponentialRampToValueAtTime(1120, t + 0.08);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.12, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    beep.connect(gain);
    gain.connect(audioState.master);
    beep.start(t);
    beep.stop(t + 0.1);
  }
}

function playPickaxeClinkSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const clink = ctx.createOscillator();
  clink.type = 'triangle';
  clink.frequency.setValueAtTime(1200, now);
  clink.frequency.exponentialRampToValueAtTime(640, now + 0.16);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.065, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  clink.connect(gain);
  gain.connect(audioState.master);
  clink.start(now);
  clink.stop(now + 0.2);
}

function playTabletShiftSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.46), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.7;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(960, now);
  filter.frequency.exponentialRampToValueAtTime(320, now + 0.4);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.18, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.46);
}

function playExplosionBlastSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;

  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.7), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.95;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const blastFilter = ctx.createBiquadFilter();
  blastFilter.type = 'lowpass';
  blastFilter.frequency.setValueAtTime(1400, now);
  blastFilter.frequency.exponentialRampToValueAtTime(180, now + 0.62);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.linearRampToValueAtTime(0.27, now + 0.02);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.66);

  noise.connect(blastFilter);
  blastFilter.connect(noiseGain);
  noiseGain.connect(audioState.master);
  noise.start(now);
  noise.stop(now + 0.7);

  const thump = ctx.createOscillator();
  thump.type = 'triangle';
  thump.frequency.setValueAtTime(95, now);
  thump.frequency.exponentialRampToValueAtTime(42, now + 0.42);
  const thumpGain = ctx.createGain();
  thumpGain.gain.setValueAtTime(0.0001, now);
  thumpGain.gain.linearRampToValueAtTime(0.22, now + 0.015);
  thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.48);
  thump.connect(thumpGain);
  thumpGain.connect(audioState.master);
  thump.start(now);
  thump.stop(now + 0.5);
}

function playWinFanfareSound() {
  const ctx = ensureAudioContext();
  if (!ctx || !audioState.master) {
    return;
  }
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, index) => {
    const t = now + (index * 0.11);
    const tone = ctx.createOscillator();
    tone.type = 'square';
    tone.frequency.setValueAtTime(freq, t);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.12, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    tone.connect(gain);
    gain.connect(audioState.master);
    tone.start(t);
    tone.stop(t + 0.2);
  });
}

function buildMainlandMask() {
  const land = new Set();
  const center = (MAINLAND_SIZE - 1) / 2;
  const rx = MAINLAND_SIZE * 0.46;
  const ry = MAINLAND_SIZE * 0.41;

  for (let y = 0; y < MAINLAND_SIZE; y += 1) {
    for (let x = 0; x < MAINLAND_SIZE; x += 1) {
      const nx = (x - center) / rx;
      const ny = (y - center) / ry;
      const ellipse = (nx * nx) + (ny * ny) <= 1;
      if (!ellipse) {
        continue;
      }

      // Carve bays/notches so the island has a clear unique silhouette.
      const northBay = x >= Math.floor(MAINLAND_SIZE * 0.4) && x <= Math.floor(MAINLAND_SIZE * 0.54) && y <= Math.floor(MAINLAND_SIZE * 0.16);
      const westNotch = x <= Math.floor(MAINLAND_SIZE * 0.12) && y >= Math.floor(MAINLAND_SIZE * 0.34) && y <= Math.floor(MAINLAND_SIZE * 0.54);
      const southBite = x >= Math.floor(MAINLAND_SIZE * 0.56) && x <= Math.floor(MAINLAND_SIZE * 0.72) && y >= Math.floor(MAINLAND_SIZE * 0.82);
      if (northBay || westNotch || southBite) {
        continue;
      }

      land.add(`${x},${y}`);
    }
  }

  // Add two peninsulas.
  for (let y = Math.floor(MAINLAND_SIZE * 0.36); y <= Math.floor(MAINLAND_SIZE * 0.56); y += 1) {
    for (let x = Math.floor(MAINLAND_SIZE * 0.8); x <= MAINLAND_SIZE - 2; x += 1) {
      land.add(`${x},${y}`);
    }
  }
  for (let y = Math.floor(MAINLAND_SIZE * 0.6); y <= Math.floor(MAINLAND_SIZE * 0.76); y += 1) {
    for (let x = Math.floor(MAINLAND_SIZE * 0.18); x <= Math.floor(MAINLAND_SIZE * 0.26); x += 1) {
      land.add(`${x},${y}`);
    }
  }

  return land;
}

const REGION_MASKS = {
  forest: new Set([
    '1,1', '2,1', '3,1', '4,1', '5,1',
    '1,2', '2,2', '3,2', '4,2', '5,2',
    '1,3', '2,3', '3,3', '4,3', '5,3',
    '2,4', '3,4', '4,4',
    '3,5',
  ]),
  flats: new Set([
    '7,1', '8,1', '9,1', '10,1', '11,1',
    '7,2', '8,2', '9,2', '10,2', '11,2',
    '7,3', '8,3', '9,3', '10,3', '11,3',
    '8,4', '9,4', '10,4',
    '9,5',
  ]),
  capital: new Set([
    '7,4', '8,4', '9,4', '10,4', '11,4',
    '7,5', '8,5', '9,5', '10,5', '11,5',
    '7,6', '8,6', '9,6', '10,6', '11,6',
    '8,7', '9,7', '10,7',
    '9,8',
  ]),
  mergi: new Set([
    '1,7', '2,7', '3,7', '4,7', '5,7', '6,7', '7,7',
    '1,8', '2,8', '3,8', '4,8', '5,8', '6,8', '7,8',
    '2,9', '3,9', '4,9', '5,9', '6,9', '7,9',
    '3,10', '4,10', '5,10', '6,10', '7,10',
    '4,11', '5,11', '6,11',
  ]),
};

const REGION_TRAVEL_POINTS = {
  forest: { x: 3, y: 3 },
  flats: { x: 9, y: 3 },
  capital: { x: 9, y: 6 },
  mergi: { x: 5, y: 9 },
};

const TABLETS = {
  terrarex: {
    title: 'Ancient Tablet: Terrarex',
    body: `The great city of Terrarex, thought to be unstoppable, was wiped out by the Elder Vermis. The horrific monster annihilated Terrarex by turning the land against them. The land swallowed Terrarex, and no person could escape their prison. The people of Terrarex made a secret tunnel that led to the surface in which the exact coordinates are unknown, and inside, there are greater treasures and wisdom than one could ever imagine. But, it is cursed, those that search for it in the Mergi Wastes never return.\n\nScrawled at the bottom of the text lay the coordinates of the temple.`,
  },
  mystic: {
    title: 'Ancient Tablet: Untranslated Slab',
    body: `Sszh-kaaru vellin tar.\nMori thaal-vek ruun.\nGhara nith ossu-vel.\nBibiddi bobbidi boo.\n\n(Only one line is recognizable. The rest is in a mysterious language.)`,
  },
};

const CAPITAL_MARKET_STALLS = [
  { id: 'rations', name: 'Ration Stall', x: 170, y: 245, cost: 12, desc: '+60 Food' },
  { id: 'supplies', name: 'Supply Yard', x: 450, y: 235, cost: 15, desc: '+50 Supplies' },
  { id: 'fuel', name: 'Fuel Broker', x: 740, y: 245, cost: 14, desc: '+30 Plutonium' },
  { id: 'troops', name: 'Contract Post', x: 300, y: 365, cost: 20, desc: '+5 Troops' },
  { id: 'stability', name: 'Medic Guild', x: 650, y: 365, cost: 18, desc: '+10 Stability' },
];

const state = {
  running: false,
  gameOver: false,
  turn: 0,
  food: 0,
  points: 0,
  runStartPoints: 0,
  skipStandardWinReward: false,
  sonarBlockedWormEver: false,
  wormComplimentCount: 0,
  mathModeEnabled: false,
  mathModeOperator: '+',
  masterVolume: 100,
  showTrack: true,
  uiClickSoundEnabled: true,
  animationSpeed: 100,
  mathPromptResolve: null,
  hp: 100,
  maxHp: 100,
  turnsToWin: 0,
  trackLength: 0,
  position: 0,
  eventAnim: null,
  deathMode: '',
  lastDamageSource: '',
  runRecorded: false,
  inventory: {
    repairKits: 3,
    antiNibSpray: 2,
    sonarDisrupter: 0,
    bouncer: 1,
    specialPickaxes: 0,
    windmills: 0,
  },
  fakeInventory: {
    repairKits: 0,
    antiNibSpray: 0,
    sonarDisrupter: 0,
    bouncer: 0,
    specialPickaxes: 0,
    windmills: 0,
  },
  sprayArmed: false,
  sonarArmed: false,
  pickaxeArmed: false,
  windmillArmed: false,
  loadoutBonus: {
    repairKits: 0,
    antiNibSpray: 0,
    bouncer: 0,
    sonarDisrupter: 0,
  },
  investorCount: 0,
  traderOffers: [],
  traderSellOffers: [],
  traderOpen: false,
  tabletOpen: false,
  tabletReaderMode: '',
  currentTabletId: '',
  marketOpen: false,
  islandOpen: false,
  marketTouchStallId: '',
  pendingPlacement: null,
  cooldowns: {
    bouncer: 0,
    sonar: 0,
  },
  marketMessage: 'Walk up to a stall and press E to trade points.',
  marketPos: { x: 480, y: 460 },
  colonyMapOpen: false,
  colonizeDelayTarget: 0,
  colony: null,
  lore: {
    terrarex: false,
    mystic: false,
    lawyerSummoned: false,
  },
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
  { key: 'tablet', weight: 2, text: 'A black stone tablet juts half-buried from the sand.' },
  { key: 'tabletMystic', weight: 0.8, text: 'You uncover an unfamiliar ancient tablet etched in unknown script.' },
  { key: 'natives', weight: 8, text: 'Native traders flag you down from the dunes.' },
  { key: 'fly', weight: 0.2, text: 'SoMeThInG hAPpEnEd' },
  { key: 'worm', weight: 1, kill: true, text: 'The worm erupts from beneath you. Instant kill.' },
];

startBtn.addEventListener('click', startGame);
enterBtn.addEventListener('click', showSetup);
nextTurnBtn.addEventListener('click', advanceTurn);
restartBtn.addEventListener('click', () => {
  if (state.turn > 0 && !state.runRecorded) {
    finalizeRun(false);
  }
  titlePanel.classList.remove('hidden');
  setupPanel.classList.add('hidden');
  gamePanel.classList.add('hidden');
  colonyMapPanel.classList.add('hidden');
  colonyPanel.classList.add('hidden');
  nativeTraderPanel.classList.add('hidden');
  tabletPanel.classList.add('hidden');
  colonyTerritoryPanel.classList.add('hidden');
  capitalMarketPanel.classList.add('hidden');
  islandTakeoverPanel.classList.add('hidden');
  state.traderOpen = false;
  state.tabletOpen = false;
  state.colonyMapOpen = false;
  state.marketOpen = false;
  dismissMathQuestion(null);
  state.islandOpen = false;
  state.pendingPlacement = null;
  state.colonizeDelayTarget = loadColonizeDelay();
  state.colony = loadStoredColony();
  syncRecordsUi();
  syncLoreUi();
  syncColonizeUi();
});
repairBtn.addEventListener('click', useRepairKit);
sprayBtn.addEventListener('click', useSpray);
sonarBtn.addEventListener('click', useSonar);
bouncerBtn.addEventListener('click', useBouncer);
pickaxeBtn.addEventListener('click', usePickaxe);
windmillBtn.addEventListener('click', useWindmill);
buyRepairBtn.addEventListener('click', () => buyItem('repair'));
buySprayBtn.addEventListener('click', () => buyItem('spray'));
buyBouncerBtn.addEventListener('click', () => buyItem('bouncer'));
buyHpBtn.addEventListener('click', () => buyItem('maxHp'));
buySonarBtn.addEventListener('click', () => buyItem('sonar'));
buyInvestorBtn.addEventListener('click', () => buyItem('investor'));
declineTraderBtn.addEventListener('click', closeNativeTrader);
readTabletBtn.addEventListener('click', openDiscoveredTabletReader);
closeTabletBtn.addEventListener('click', closeTabletReader);
tabletPrevBtn.addEventListener('click', () => cycleTabletReader(-1));
tabletNextBtn.addEventListener('click', () => cycleTabletReader(1));
colonizeYesBtn.addEventListener('click', openColonyMap);
colonizeNoBtn.addEventListener('click', delayColonizationPrompt);
manageColonyBtn.addEventListener('click', showColonyPanel);
cancelColonizeBtn.addEventListener('click', showSetup);
advanceColonyBtn.addEventListener('click', advanceColonyCycle);
restartColonyBtn.addEventListener('click', restartCurrentColony);
openColonyMapBtn.addEventListener('click', openColonyTerritoryMap);
openCapitalMarketBtn.addEventListener('click', openCapitalMarket);
openIslandTakeoverBtn.addEventListener('click', openIslandTakeoverPanel);
backToSetupBtn.addEventListener('click', showSetup);
closeColonyMapBtn.addEventListener('click', closeColonyTerritoryMap);
closeCapitalMarketBtn.addEventListener('click', closeCapitalMarket);
advanceMainlandCycleBtn.addEventListener('click', advanceMainlandCycle);
skipMainlandCycleBtn.addEventListener('click', skipMainlandCycle);
closeIslandTakeoverBtn.addEventListener('click', closeIslandTakeoverPanel);
startTempleSearchBtn.addEventListener('click', startTempleSearch);
readWallRiddleBtn.addEventListener('click', openTempleRiddleReader);
logNoteBtn.addEventListener('click', addPlayerLogNote);
logNoteInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addPlayerLogNote();
  }
});
mathModeToggle.addEventListener('change', () => {
  state.mathModeEnabled = mathModeToggle.checked;
  storeMathModeSettings();
  syncMathModeUi();
});
mathOpSelect.addEventListener('change', () => {
  const op = mathOpSelect.value === '*' ? '*' : '+';
  state.mathModeOperator = op;
  storeMathModeSettings();
  syncMathModeUi();
});
volumeSlider.addEventListener('input', () => {
  const parsed = Number(volumeSlider.value);
  state.masterVolume = Number.isFinite(parsed) ? Math.max(0, Math.min(100, Math.floor(parsed))) : 100;
  updateAudioMasterGain();
  storeSetupSettings();
  syncSetupSettingsUi();
});
showTrackToggle.addEventListener('change', () => {
  state.showTrack = showTrackToggle.checked;
  storeSetupSettings();
  draw();
});
uiClickSoundToggle.addEventListener('change', () => {
  state.uiClickSoundEnabled = uiClickSoundToggle.checked;
  storeSetupSettings();
});
animationSpeedSlider.addEventListener('input', () => {
  const parsed = Number(animationSpeedSlider.value);
  state.animationSpeed = Number.isFinite(parsed) ? Math.max(50, Math.min(200, Math.floor(parsed))) : 100;
  storeSetupSettings();
  syncSetupSettingsUi();
});
mathSubmitBtn.addEventListener('click', submitMathAnswer);
mathAnswerInput.addEventListener('keydown', (event) => {
  if (!event.metaKey && !event.ctrlKey && !event.altKey) {
    if (event.key.length === 1) {
      playMathTypeBeepSound();
    } else if (event.key === 'Backspace') {
      playMathBackspaceBeepSound();
    }
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    submitMathAnswer();
    return;
  }
  if (event.key === 'Escape' && state.mathPromptResolve) {
    event.preventDefault();
    mathAnswerInput.value = '';
    submitMathAnswer();
  }
});
mathQuestionPanel.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.mathPromptResolve) {
    event.preventDefault();
    mathAnswerInput.value = '';
    submitMathAnswer();
  }
});
window.addEventListener('keydown', handleCapitalMarketKeydown);
document.addEventListener('click', (event) => {
  const button = event.target instanceof Element ? event.target.closest('button') : null;
  if (!button || button.disabled) {
    return;
  }
  if (state.uiClickSoundEnabled) {
    playUiClickSound();
  }
});

function startGame() {
  unlockAudioContext();

  const chosenFood = Number(foodInput.value);
  const safeFood = Number.isFinite(chosenFood) ? Math.max(20, Math.min(300, chosenFood)) : 120;

  state.running = true;
  state.gameOver = false;
  state.turn = 0;
  state.food = safeFood;
  state.points = loadStoredPoints();
  state.runStartPoints = state.points;
  state.maxHp = loadStoredMaxHp();
  state.investorCount = loadStoredInvestorCount();
  state.sonarBlockedWormEver = loadSonarBlockedWormEver();
  state.wormComplimentCount = loadWormComplimentCount();
  state.mathModeEnabled = mathModeToggle.checked;
  state.mathModeOperator = mathOpSelect.value === '*' ? '*' : '+';
  storeMathModeSettings();
  state.records = loadStoredRecords();
  state.lore = loadStoredTablets();
  state.skipStandardWinReward = false;
  state.currentTabletId = '';
  state.tabletReaderMode = '';
  state.colonizeDelayTarget = loadColonizeDelay();
  state.colony = loadStoredColony();
  state.hp = state.maxHp;
  state.turnsToWin = randInt(15, 50);
  state.trackLength = state.turnsToWin + 2;
  state.position = 0;
  state.eventAnim = null;
  state.deathMode = '';
  state.lastDamageSource = '';
  state.runRecorded = false;
  state.inventory.repairKits = 3 + state.loadoutBonus.repairKits;
  state.inventory.antiNibSpray = 2 + state.loadoutBonus.antiNibSpray;
  state.inventory.sonarDisrupter = 0 + state.loadoutBonus.sonarDisrupter;
  state.inventory.bouncer = 1 + state.loadoutBonus.bouncer;
  state.inventory.specialPickaxes = 0;
  state.inventory.windmills = 0;
  clearLoadout();
  state.fakeInventory.repairKits = 0;
  state.fakeInventory.antiNibSpray = 0;
  state.fakeInventory.sonarDisrupter = 0;
  state.fakeInventory.bouncer = 0;
  state.fakeInventory.specialPickaxes = 0;
  state.fakeInventory.windmills = 0;
  state.sprayArmed = false;
  state.sonarArmed = false;
  state.pickaxeArmed = false;
  state.windmillArmed = false;
  state.cooldowns.bouncer = 0;
  state.cooldowns.sonar = 0;
  state.traderOffers = [];
  state.traderSellOffers = [];
  state.traderOpen = false;
  state.tabletOpen = false;
  state.colonyMapOpen = false;
  state.marketOpen = false;

  titlePanel.classList.add('hidden');
  setupPanel.classList.add('hidden');
  gamePanel.classList.remove('hidden');
  colonyMapPanel.classList.add('hidden');
  colonyPanel.classList.add('hidden');
  nativeTraderPanel.classList.add('hidden');
  tabletPanel.classList.add('hidden');
  colonyTerritoryPanel.classList.add('hidden');
  capitalMarketPanel.classList.add('hidden');
  islandTakeoverPanel.classList.add('hidden');
  nextTurnBtn.disabled = false;

  log.innerHTML = '';
  logNoteInput.value = '';
  addLog(`Mission start. Reach turn ${state.turnsToWin} to win.`, 'good');
  addLog(`Starting food: ${state.food}. Food drain is 10 per turn.`);

  syncHud();
  syncInventoryUi();
  syncRecordsUi();
  syncLoreUi();
  syncSetupShopUi();
  syncColonizeUi();
  draw();
}

function showSetup() {
  titlePanel.classList.add('hidden');
  colonyMapPanel.classList.add('hidden');
  colonyPanel.classList.add('hidden');
  gamePanel.classList.add('hidden');
  nativeTraderPanel.classList.add('hidden');
  tabletPanel.classList.add('hidden');
  colonyTerritoryPanel.classList.add('hidden');
  capitalMarketPanel.classList.add('hidden');
  islandTakeoverPanel.classList.add('hidden');
  state.marketOpen = false;
  state.islandOpen = false;
  state.pendingPlacement = null;
  dismissMathQuestion(null);
  setupPanel.classList.remove('hidden');
  state.points = loadStoredPoints();
  state.mathModeEnabled = loadStoredMathModeEnabled();
  state.mathModeOperator = loadStoredMathModeOperator();
  const setupSettings = loadStoredSetupSettings();
  state.masterVolume = setupSettings.volume;
  state.showTrack = setupSettings.showTrack;
  state.uiClickSoundEnabled = setupSettings.uiClickSoundEnabled;
  state.animationSpeed = setupSettings.animationSpeed;
  updateAudioMasterGain();
  state.loadoutBonus = loadStoredLoadout();
  state.colonizeDelayTarget = loadColonizeDelay();
  state.colony = loadStoredColony();
  syncMathModeUi();
  syncSetupSettingsUi();
  syncSetupShopUi();
  syncRecordsUi();
  syncLoreUi();
  syncColonizeUi();
}

async function advanceTurn() {
  if (!state.running || state.gameOver || state.traderOpen || state.tabletOpen || state.mathPromptResolve) {
    return;
  }

  await processTurn({ skipHazards: false, skipLabel: '' });
}

async function processTurn({ skipHazards, skipLabel = '' }) {
  if (!state.running || state.gameOver || state.traderOpen || state.tabletOpen || state.mathPromptResolve) {
    return;
  }
  const upcomingTurn = state.turn + 1;
  if (!skipHazards && state.mathModeEnabled && upcomingTurn % 2 === 0) {
    const passed = await runMathCheck(`Run Turn ${upcomingTurn}`, 1);
    if (!passed) {
      addLog('Math check failed. Turn did not advance.', 'bad');
      return;
    }
  }
  unlockAudioContext();

  state.turn += 1;
  state.position = Math.min(state.position + 1, state.trackLength - 1);
  playCrawlerMoveSound(skipHazards);
  if (state.cooldowns.bouncer > 0) {
    state.cooldowns.bouncer -= 1;
  }
  if (state.cooldowns.sonar > 0) {
    state.cooldowns.sonar -= 1;
  }
  if (skipHazards) {
    addLog(`Turn ${state.turn}: jump turn, no food consumed.`, 'good');
  } else {
    state.food = Math.max(0, state.food - 10);
    addLog(`Turn ${state.turn}: consumed 10 food.`);
  }

  let sprayWasConsumed = false;
  let autoSkipTurns = 0;
  let autoSkipLabel = 'Plutonium jump: hazards skipped this turn.';

  if (skipHazards) {
    addLog(skipLabel || 'Safe jump: hazards skipped this turn.', 'good');
    triggerEventAnimation(skipLabel.includes('Plutonium') ? 'plutonium' : 'bouncer', 64);
  } else {
    const event = pickEvent();
    const result = applyEvent(event);
    sprayWasConsumed = Boolean(result && result.sprayConsumed);
    autoSkipTurns = result && result.autoSkipTurns ? result.autoSkipTurns : 0;
    autoSkipLabel = result && result.autoSkipLabel ? result.autoSkipLabel : autoSkipLabel;
  }

  resolveRoundState(false);

  if (!state.gameOver && !state.traderOpen) {
    state.points += 1 + state.investorCount;
    storePoints();
  }

  resolveRoundState(true, { deferWin: state.traderOpen });
  syncHud();
  syncInventoryUi();
  draw();

  if (!state.gameOver && !state.traderOpen && autoSkipTurns > 0) {
    for (let i = 0; i < autoSkipTurns; i += 1) {
      if (state.gameOver) {
        break;
      }
      await processTurn({ skipHazards: true, skipLabel: autoSkipLabel });
    }
  }
}

function applyEvent(event) {
  if (!event || event.key === 'none') {
    addLog('No hazard this turn. Black dunes stay still.', 'good');
    triggerEventAnimation('none', 32);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  const isGoodEvent = event.key === 'wreckage'
    || event.key === 'orchard'
    || event.key === 'fly'
    || event.key === 'tablet'
    || event.key === 'tabletMystic';
  addLog(event.text, isGoodEvent ? 'good' : 'bad');

  if (event.kill) {
    if (state.sonarArmed) {
      state.sonarArmed = false;
      state.sonarBlockedWormEver = true;
      storeSonarBlockedWormEver(true);
      addLog('Sonar disrupter scattered the worm before it surfaced.', 'good');
      triggerEventAnimation('sonar', 64);
      return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
    }

    playWormRoarSound();
    state.hp = 0;
    state.deathMode = 'worm';
    triggerEventAnimation('worm', 72);
    endGame('The worm devoured your crawler.', 'worm');
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'nibblorax') {
    if (state.sprayArmed) {
      state.sprayArmed = false;
      playSpraySound();
      addLog('Spray blast repelled the Nibblorax.', 'good');
      triggerEventAnimation('spray', 60);
      return { sprayConsumed: true, autoSkipTurns: 0, autoSkipLabel: '' };
    }

    const eaten = randInt(15, 150);
    state.food = Math.max(0, state.food - eaten);
    playNibbloraxMunchSound();
    addLog(`Nibblorax eats ${eaten} food.`, 'bad');
    triggerEventAnimation('nibblorax', 68, { eaten });
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'natives') {
    playNativeRaspSound();
    openNativeTrader();
    triggerEventAnimation('natives', 88);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'fly') {
    const { x, y } = getCrawlerPosition();
    state.hp = Math.max(1, state.hp - 5);
    state.points += FLY_JACKPOT_POINTS;
    storePoints();
    state.skipStandardWinReward = true;
    triggerEventAnimation('fly', 360, {
      originX: x + 70,
      originY: y - 56,
    });
    endGame('Mission success. You won.', 'win', { skipFinalLog: true });
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'tablet') {
    playDiggingSound();
    collectTablet('terrarex');
    triggerEventAnimation('tablet', 84);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'tabletMystic') {
    playDiggingSound();
    collectTablet('mystic');
    triggerEventAnimation('tablet', 84);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'wreckage') {
    state.hp = Math.min(state.maxHp, state.hp + 25);
    playMetalClangSound();
    applyWreckageLoot();
    triggerEventAnimation('wreckage', 56);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'orchard') {
    state.food += 50;
    playOrchardGrassSound();
    triggerEventAnimation('orchard', 56);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'plutonium') {
    playJumpWhooshSound();
    addLog('Plutonium burst launches you 3 turns forward with no hazards.', 'good');
    triggerEventAnimation('plutonium', 60);
    return { sprayConsumed: false, autoSkipTurns: 3, autoSkipLabel: 'Plutonium jump: hazards skipped this turn.' };
  }

  if (event.key === 'sink' && Math.random() < 0.08) {
    playMudSplorgSound();
    addLog('Native riders skim over the sinking sand and carry you clear.', 'good');
    triggerEventAnimation('nativeRide', 72);
    return { sprayConsumed: false, autoSkipTurns: 1, autoSkipLabel: 'Native riders carry you over the sink. No food spent.' };
  }

  if (event.key === 'weather' && state.windmillArmed) {
    state.windmillArmed = false;
    playWeatherWhistleSound();
    addLog('Windmill catches the storm and spins you past it. Free skip turn.', 'good');
    triggerEventAnimation('windmill', 72);
    return { sprayConsumed: false, autoSkipTurns: 1, autoSkipLabel: 'Windmill glide: the storm gives you a free turn.' };
  }

  if (event.key === 'coral' && state.pickaxeArmed) {
    state.pickaxeArmed = false;
    state.hp = Math.min(state.maxHp, state.hp + 20);
    playPickaxeClinkSound();
    playCoralScrapeSound();
    addLog('Special pickaxe turns the glowcore coral into +20 HP.', 'good');
    triggerEventAnimation('pickaxe', 72);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  state.lastDamageSource = event.key;
  if (event.key === 'weather') {
    playWeatherWhistleSound();
  } else if (event.key === 'sink') {
    playSinkSound();
  } else if (event.key === 'coral') {
    playCoralScrapeSound();
  }
  state.hp = Math.max(0, state.hp - event.dmg);
  triggerEventAnimation(event.key, 56);
  return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
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
  if (!state.running || state.gameOver || state.traderOpen) {
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

  if (consumePossiblyFakeItem('repairKits', 'The repair kit is empty. Scam packaging.')) {
    syncInventoryUi();
    draw();
    return;
  }

  state.hp = Math.min(state.maxHp, state.hp + 30);
  playMetalClangSound();
  addLog('Repair kit used. +30 HP.', 'good');
  triggerEventAnimation('repair', 52);
  syncHud();
  syncInventoryUi();
  draw();
}

function useSpray() {
  if (!state.running || state.gameOver || state.traderOpen) {
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

  if (consumePossiblyFakeItem('antiNibSpray', 'The spray can hisses air and does nothing. Scam goods.')) {
    syncInventoryUi();
    draw();
    return;
  }

  state.sprayArmed = true;
  playSpraySound();
  addLog('Anti-Nib spray armed for this turn.', 'good');
  triggerEventAnimation('spray', 52);
  syncInventoryUi();
  draw();
}

function useSonar() {
  if (!state.running || state.gameOver || state.traderOpen) {
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
  if (state.cooldowns.sonar > 0) {
    addLog(`Sonar disrupter cooldown: ${state.cooldowns.sonar} turn(s) remaining.`, 'bad');
    return;
  }

  if (consumePossiblyFakeItem('sonarDisrupter', 'The sonar disrupter is hollow. Scam device.')) {
    syncInventoryUi();
    draw();
    return;
  }

  state.sonarArmed = true;
  state.cooldowns.sonar = 8;
  playSonarBeepSound();
  addLog('Sonar disrupter armed until a worm appears.', 'good');
  triggerEventAnimation('sonar', 52);
  syncInventoryUi();
  draw();
}

async function useBouncer() {
  if (!state.running || state.gameOver || state.traderOpen || state.mathPromptResolve) {
    return;
  }

  if (state.inventory.bouncer <= 0) {
    addLog('No bouncer charges left.', 'bad');
    return;
  }
  if (state.cooldowns.bouncer > 0) {
    addLog(`Bouncer cooldown: ${state.cooldowns.bouncer} turn(s) remaining.`, 'bad');
    return;
  }

  if (consumePossiblyFakeItem('bouncer', 'The bouncer charge fizzles out. Scam field.')) {
    syncInventoryUi();
    draw();
    return;
  }
  state.cooldowns.bouncer = 6;
  playJumpWhooshSound();
  addLog('Bouncer engaged: jumping 5 turns with hazard immunity.', 'good');

  for (let i = 0; i < 5; i += 1) {
    if (state.gameOver) {
      break;
    }
    await processTurn({ skipHazards: true, skipLabel: 'Bouncer field active: hazards skipped this turn.' });
  }

  syncInventoryUi();
}

function usePickaxe() {
  if (!state.running || state.gameOver || state.traderOpen) {
    return;
  }

  if (state.inventory.specialPickaxes <= 0) {
    addLog('No special pickaxes left.', 'bad');
    return;
  }

  if (state.pickaxeArmed) {
    addLog('Special pickaxe is already armed.', 'bad');
    return;
  }

  if (consumePossiblyFakeItem('specialPickaxes', 'The special pickaxe splinters. Scam metal.')) {
    syncInventoryUi();
    draw();
    return;
  }

  state.pickaxeArmed = true;
  playPickaxeClinkSound();
  addLog('Special pickaxe armed until the coral finds you.', 'good');
  triggerEventAnimation('pickaxe', 48);
  syncInventoryUi();
  draw();
}

function useWindmill() {
  if (!state.running || state.gameOver || state.traderOpen) {
    return;
  }

  if (state.inventory.windmills <= 0) {
    addLog('No windmills left.', 'bad');
    return;
  }

  if (state.windmillArmed) {
    addLog('Windmill is already armed.', 'bad');
    return;
  }

  if (consumePossiblyFakeItem('windmills', 'The windmill unfolds into painted scrap. Scam trade.')) {
    syncInventoryUi();
    draw();
    return;
  }

  state.windmillArmed = true;
  addLog('Windmill armed until bad weather shows up.', 'good');
  triggerEventAnimation('windmill', 48);
  syncInventoryUi();
  draw();
}

function consumePossiblyFakeItem(key, scamMessage) {
  if (state.inventory[key] <= 0) {
    return true;
  }

  state.inventory[key] -= 1;
  if (state.fakeInventory[key] > 0) {
    if (state.lore.lawyerSummoned === true) {
      state.fakeInventory[key] -= 1;
      state.points += LAWYER_INTERVENTION_POINTS;
      storePoints();
      addLog('SoMeThInG hApPeNeD', 'good');
      triggerEventAnimation('lawyer', 72);
      syncHud();
      return false;
    }
    state.fakeInventory[key] -= 1;
    addLog(scamMessage, 'bad');
    return true;
  }

  return false;
}

function openNativeTrader() {
  state.traderOffers = buildNativeOffers();
  state.traderSellOffers = buildNativeSellOffers();
  state.traderOpen = true;
  nativeTraderPanel.classList.remove('hidden');
  renderNativeOffers();
  nextTurnBtn.disabled = true;
  syncInventoryUi();
  addLog('Native traders hiss out prices in broken colony slang.', 'good');
}

function closeNativeTrader() {
  if (!state.traderOpen) {
    return;
  }

  state.traderOffers = [];
  state.traderSellOffers = [];
  state.traderOpen = false;
  nativeTraderPanel.classList.add('hidden');

  if (!state.gameOver) {
    state.points += 1 + state.investorCount;
    storePoints();
    resolveRoundState(true);
    nextTurnBtn.disabled = false;
    syncHud();
    syncInventoryUi();
    draw();
  }
}

function triggerLawyerIntervention() {
  triggerEventAnimation('lawyer', 1700);
  nativeTraderPanel.classList.add('hidden');
  draw();
  window.setTimeout(() => {
    if (state.traderOpen && !state.gameOver) {
      nativeTraderPanel.classList.remove('hidden');
      renderNativeOffers();
    }
  }, 28000);
}

function collectTablet(id) {
  const tablet = TABLETS[id];
  if (!tablet) {
    return;
  }

  if (!state.lore[id]) {
    state.lore[id] = true;
    state.currentTabletId = id;
    storeTablets();
    addLog(`Recovered ${tablet.title}. It has been added to your lore archive.`, 'good');
  } else {
    addLog(`You uncover another copy of ${tablet.title}.`, 'good');
  }

  syncLoreUi();
}

function getDiscoveredTabletIds() {
  const ordered = ['terrarex', 'mystic'];
  return ordered.filter((id) => state.lore[id] === true && TABLETS[id]);
}

function renderTabletReader() {
  const discovered = getDiscoveredTabletIds();
  if (state.tabletReaderMode !== 'tablet' || discovered.length === 0) {
    tabletNav.classList.add('hidden');
    return;
  }

  let index = discovered.indexOf(state.currentTabletId);
  if (index === -1) {
    index = 0;
    state.currentTabletId = discovered[0];
  }
  const tablet = TABLETS[state.currentTabletId];
  tabletTitle.textContent = tablet.title;
  tabletBody.textContent = tablet.body;
  templeVision.classList.add('hidden');

  tabletNav.classList.remove('hidden');
  tabletCounter.textContent = `${index + 1} / ${discovered.length}`;
  tabletPrevBtn.disabled = discovered.length <= 1;
  tabletNextBtn.disabled = discovered.length <= 1;
}

function cycleTabletReader(delta) {
  if (!state.tabletOpen || state.tabletReaderMode !== 'tablet') {
    return;
  }
  const discovered = getDiscoveredTabletIds();
  if (discovered.length <= 1) {
    return;
  }
  let index = discovered.indexOf(state.currentTabletId);
  if (index === -1) {
    index = 0;
  }
  const next = (index + delta + discovered.length) % discovered.length;
  state.currentTabletId = discovered[next];
  playTabletShiftSound();
  renderTabletReader();
}

function openTabletReader(id) {
  if (!state.lore[id] || !TABLETS[id]) {
    return;
  }

  state.tabletOpen = true;
  state.tabletReaderMode = 'tablet';
  state.currentTabletId = id;
  playTabletShiftSound();
  renderTabletReader();
  templeVision.classList.add('hidden');
  tabletPanel.classList.remove('hidden');
  nextTurnBtn.disabled = true;
  syncInventoryUi();
}

function openDiscoveredTabletReader() {
  const discovered = getDiscoveredTabletIds();
  if (discovered.length === 0) {
    return;
  }
  if (state.currentTabletId && discovered.includes(state.currentTabletId)) {
    openTabletReader(state.currentTabletId);
    return;
  }
  openTabletReader(discovered[0]);
}

function openTempleRiddleReader() {
  if (!state.colony || !state.colony.templeSearch.completed) {
    return;
  }

  state.tabletOpen = true;
  state.tabletReaderMode = 'riddle';
  playTabletShiftSound();
  tabletTitle.textContent = 'Temple Wall Riddle';
  tabletBody.textContent = [
    'The one who seeks fortune',
    'will writhe with anger.',
    'They will never get their portion.',
    'They went with the clanger.',
    '',
    'Seek not the forest, green with hunger.',
    'Seek not the markets, bright with speech.',
    'Go where the black earth glows beneath you,',
    'where the worm sleeps just in reach.',
  ].join('\n');
  templeVisionText.textContent = 'While reading, you see a vision of a buried stepped temple under the black glow of Plutonium Flats.';
  templeVision.classList.remove('hidden');
  tabletNav.classList.add('hidden');
  tabletPanel.classList.remove('hidden');
  nextTurnBtn.disabled = true;
  syncInventoryUi();
}

function closeTabletReader() {
  state.tabletOpen = false;
  state.tabletReaderMode = '';
  tabletPanel.classList.add('hidden');
  templeVision.classList.add('hidden');
  tabletNav.classList.add('hidden');
  if (!state.gameOver && !state.traderOpen) {
    nextTurnBtn.disabled = false;
  }
  syncInventoryUi();
}

function syncColonizeUi() {
  const points = loadStoredPoints();
  state.points = points;
  const colony = state.colony;
  const hasColony = Boolean(colony && colony.active);
  const deferred = state.colonizeDelayTarget === 2000 && points < 2000;

  colonizePrompt.classList.remove('hidden');
  colonizeYesBtn.classList.add('hidden');
  colonizeNoBtn.classList.add('hidden');
  manageColonyBtn.classList.add('hidden');

  if (hasColony) {
    colonizeText.textContent = `Colony established in ${REGION_DATA[colony.region].name}. You can manage it from here.`;
    manageColonyBtn.classList.remove('hidden');
    manageColonyBtn.disabled = false;
    return;
  }

  if (points < 1000) {
    colonizeText.textContent = `Reach 1000 points to unlock colonization. Current points: ${points}.`;
    colonizeYesBtn.disabled = true;
    colonizeNoBtn.disabled = true;
    return;
  }

  if (deferred) {
    colonizeText.textContent = `Colonization is on hold until you reach 2000 points. Current points: ${points}.`;
    colonizeYesBtn.disabled = points < 2000;
    colonizeNoBtn.disabled = false;
    return;
  }

  if (points >= 1000 && points < 2000) {
    colonizeText.textContent = 'You have gained the opportunity to colonize. Would you like to colonize or wait until 2000 points?';
  } else {
    colonizeText.textContent = 'You have 2000 or more points. Colonization command is cleared for launch.';
  }

  colonizeYesBtn.classList.remove('hidden');
  colonizeNoBtn.classList.remove('hidden');
  colonizeYesBtn.disabled = false;
  colonizeNoBtn.disabled = false;
}

function delayColonizationPrompt() {
  state.colonizeDelayTarget = 2000;
  storeColonizeDelay();
  syncColonizeUi();
}

function openColonyMap() {
  titlePanel.classList.add('hidden');
  setupPanel.classList.add('hidden');
  gamePanel.classList.add('hidden');
  colonyPanel.classList.add('hidden');
  nativeTraderPanel.classList.add('hidden');
  tabletPanel.classList.add('hidden');
  capitalMarketPanel.classList.add('hidden');
  islandTakeoverPanel.classList.add('hidden');
  state.marketOpen = false;
  state.islandOpen = false;
  colonyMapPanel.classList.remove('hidden');
  renderRegionGrid();
  colonyMapPanel.scrollIntoView({ block: 'start' });
}

function renderRegionGrid() {
  regionGrid.innerHTML = '';
  const mapBackdrop = document.createElement('div');
  mapBackdrop.className = 'regionWater';
  regionGrid.appendChild(mapBackdrop);

  const landmass = document.createElement('div');
  landmass.className = 'regionLandmass';
  regionGrid.appendChild(landmass);

  const positions = {
    forest: { card: 'top-left', biome: 'forest', line: { x1: 210, y1: 120, x2: 330, y2: 165 } },
    flats: { card: 'top-right', biome: 'flats', line: { x1: 640, y1: 120, x2: 555, y2: 165 } },
    capital: { card: 'mid-right', biome: 'capital', line: { x1: 638, y1: 255, x2: 530, y2: 255 } },
    mergi: { card: 'bottom-left', biome: 'mergi', line: { x1: 214, y1: 440, x2: 360, y2: 340 } },
  };

  for (const key of Object.keys(positions)) {
    const biome = document.createElement('div');
    biome.className = `regionBiome ${positions[key].biome}`;
    regionGrid.appendChild(biome);

    const line = document.createElement('div');
    line.className = 'regionLine';
    const { x1, y1, x2, y2 } = positions[key].line;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt((dx * dx) + (dy * dy));
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    regionGrid.appendChild(line);
  }

  for (const region of Object.values(REGION_DATA)) {
    const card = document.createElement('article');
    card.className = `regionCard ${positions[region.id].card}`;

    const heading = document.createElement('h2');
    heading.textContent = region.name;
    card.appendChild(heading);

    const summary = document.createElement('p');
    summary.textContent = region.summary;
    card.appendChild(summary);

    const detail = document.createElement('div');
    detail.className = 'subState';
    detail.textContent = region.mapText;
    card.appendChild(detail);

    const button = document.createElement('button');
    button.textContent = `Colonize ${region.name}`;
    button.addEventListener('click', () => startColony(region.id));
    card.appendChild(button);

    regionGrid.appendChild(card);
  }
}

function startColony(regionId) {
  const region = REGION_DATA[regionId];
  if (!region) {
    return;
  }

  state.colony = createColonyState(regionId, {
    supportColonies: [],
    log: [
      { text: `Colony ship touched down in ${region.name}.`, tone: 'good' },
      { text: region.summary, tone: '' },
    ],
  });
  state.colonizeDelayTarget = 0;
  storeColonizeDelay();
  storeColony();
  syncColonizeUi();
  showColonyPanel();
}

function restartCurrentColony() {
  if (!state.colony || !state.colony.active || state.colony.stability > 0) {
    return;
  }

  const old = state.colony;
  const region = old.region;
  const carriedSupport = Array.isArray(old.supportColonies) ? old.supportColonies : [];
  const carriedMainland = old.mainland ? cloneColonyData(old.mainland) : createMainlandState();
  const carriedTechBoost = Boolean(old.techBoost);

  state.colony = createColonyState(region, {
    supportColonies: carriedSupport,
    mainland: carriedMainland,
    techBoost: carriedTechBoost,
    log: [
      { text: `Emergency rebuild protocol engaged in ${REGION_DATA[region].name}. Colony restarted.`, tone: 'good' },
      { text: REGION_DATA[region].summary, tone: '' },
    ],
  });
  state.colony.supportColonies = dedupeSupportColonies(state.colony.supportColonies, region);
  ensureIslandTakeoverUnlocked();
  storeColony();
  syncColonizeUi();
  syncColonyUi();
  if (state.colonyMapOpen) {
    syncTerritoryMap();
  }
}

function getRegionCoreTile(regionId) {
  const tile = REGION_TRAVEL_POINTS[regionId];
  if (tile) {
    return { x: tile.x, y: tile.y };
  }
  return { x: 6, y: 6 };
}

function createColonyState(regionId, overrides = {}) {
  const core = getRegionCoreTile(regionId);
  return {
    active: true,
    region: regionId,
    cycle: 0,
    food: 140,
    supplies: 150,
    plutonium: 18,
    power: 0,
    powerDemand: 0,
    stability: 100,
    buildings: {
      farms: 1,
      powerPlants: 1,
      mines: 1,
      factories: 0,
      businessHouses: 0,
      storageHouses: 1,
      barracks: 0,
      troops: 0,
      groundAnchors: 0,
    },
    core,
    territory: [core],
    specialTiles: buildSpecialTilesForRegion(regionId, core),
    frontierUnlocked: false,
    frontierWar: false,
    supportColonies: [],
    explorer: {
      unlocked: false,
      traveling: false,
      targetRegion: '',
      totalTurns: 0,
      turnsLeft: 0,
    },
    templeSearch: {
      active: false,
      completed: false,
      turnsLeft: 0,
      totalTurns: 0,
    },
    techBoost: false,
    mainland: createMainlandState(),
    lastInstabilityCauses: [],
    log: [],
    ...overrides,
  };
}

function createMainlandState() {
  const core = { x: Math.floor(MAINLAND_SIZE / 2), y: Math.floor(MAINLAND_SIZE / 2) };
  return {
    unlocked: false,
    active: false,
    cycle: 0,
    actionsLeft: 0,
    core,
    territory: [core],
    buildingTiles: [],
    specialTiles: buildMainlandSpecialTiles(core),
    log: [],
  };
}

function buildMainlandSpecialTiles(core) {
  const tiles = [];
  const used = new Set([`${core.x},${core.y}`]);
  const mainlandTiles = [...MAINLAND_MASK].map((key) => {
    const [x, y] = key.split(',').map(Number);
    return { x, y };
  }).filter((tile) => !(tile.x === core.x && tile.y === core.y));
  const pushRandom = (type, count) => {
    for (let i = 0; i < count; i += 1) {
      let tries = 0;
      while (tries < 80) {
        const pick = mainlandTiles[randInt(0, mainlandTiles.length - 1)];
        const x = pick.x;
        const y = pick.y;
        const key = `${x},${y}`;
        if (!used.has(key)) {
          used.add(key);
          tiles.push({ x, y, type, discovered: false, cleared: false, bugsRemaining: 0 });
          break;
        }
        tries += 1;
      }
    }
  };
  const total = mainlandTiles.length;
  // Dense mainland specials so the island feels busy and dangerous.
  pushRandom('copper', Math.max(24, Math.round(total * 0.1)));
  pushRandom('hive', Math.max(28, Math.round(total * 0.12)));
  pushRandom('camp', Math.max(20, Math.round(total * 0.08)));
  pushRandom('river', Math.max(26, Math.round(total * 0.11)));
  pushRandom('burrow', Math.max(18, Math.round(total * 0.07)));
  pushRandom('corruptor', Math.max(18, Math.round(total * 0.07)));
  return tiles;
}

function getMainlandSpecialTargets() {
  const total = MAINLAND_MASK.size;
  return {
    copper: Math.max(24, Math.round(total * 0.1)),
    hive: Math.max(28, Math.round(total * 0.12)),
    camp: Math.max(20, Math.round(total * 0.08)),
    river: Math.max(26, Math.round(total * 0.11)),
    burrow: Math.max(18, Math.round(total * 0.07)),
    corruptor: Math.max(18, Math.round(total * 0.07)),
  };
}

function enrichMainlandSpecialTiles(mainland) {
  if (!mainland || !Array.isArray(mainland.specialTiles)) {
    return false;
  }
  const targets = getMainlandSpecialTargets();
  const counts = {
    copper: 0,
    hive: 0,
    camp: 0,
    river: 0,
    burrow: 0,
    corruptor: 0,
  };
  for (const tile of mainland.specialTiles) {
    if (counts[tile.type] !== undefined) {
      counts[tile.type] += 1;
    }
  }
  const used = new Set(mainland.specialTiles.map((tile) => `${tile.x},${tile.y}`));
  const coreKey = mainland.core ? `${mainland.core.x},${mainland.core.y}` : '';
  const landTiles = [...MAINLAND_MASK].filter((key) => key !== coreKey);
  const placeTile = (type) => {
    const pool = landTiles.filter((key) => !used.has(key));
    if (pool.length === 0) {
      return false;
    }
    const chosen = pool[randInt(0, pool.length - 1)];
    const [x, y] = chosen.split(',').map(Number);
    mainland.specialTiles.push({
      x,
      y,
      type,
      discovered: false,
      cleared: false,
      bugsRemaining: 0,
    });
    used.add(chosen);
    return true;
  };

  let changed = false;
  for (const [type, target] of Object.entries(targets)) {
    while ((counts[type] || 0) < target) {
      if (!placeTile(type)) {
        break;
      }
      counts[type] += 1;
      changed = true;
    }
  }
  return changed;
}

function normalizeBuildings(buildings = {}) {
  return {
    farms: Number.isFinite(buildings.farms) ? buildings.farms : 1,
    powerPlants: Number.isFinite(buildings.powerPlants) ? buildings.powerPlants : 1,
    mines: Math.min(MINE_CAP, Number.isFinite(buildings.mines) ? buildings.mines : 1),
    factories: Number.isFinite(buildings.factories) ? buildings.factories : 0,
    businessHouses: Number.isFinite(buildings.businessHouses) ? buildings.businessHouses : 0,
    storageHouses: Number.isFinite(buildings.storageHouses) ? buildings.storageHouses : 1,
    barracks: Number.isFinite(buildings.barracks) ? buildings.barracks : 0,
    troops: Number.isFinite(buildings.troops) ? buildings.troops : 0,
    groundAnchors: Number.isFinite(buildings.groundAnchors) ? buildings.groundAnchors : 0,
  };
}

function getMineThreatBonusChance(colony = state.colony) {
  if (!colony) {
    return 0;
  }
  return Math.min(0.24, colony.buildings.mines / 2200);
}

function getBuildingCost(kind, colony = state.colony) {
  const base = BUILDING_DATA[kind] ? BUILDING_DATA[kind].suppliesCost : 0;
  const owned = colony && colony.buildings ? (colony.buildings[kind] || 0) : 0;
  const territory = colony && Array.isArray(colony.territory) ? colony.territory.length : 1;
  const expansionStrain = Math.floor(territory / 25);
  const scalingByKind = {
    farms: 2,
    powerPlants: 3,
    mines: 1,
    factories: 3,
    businessHouses: 2,
    storageHouses: 2,
    barracks: 3,
    troops: 1,
    groundAnchors: 2,
  };
  const plutoniumByKind = {
    farms: 0,
    powerPlants: 2,
    mines: 0,
    factories: 1,
    businessHouses: 1,
    storageHouses: 1,
    barracks: 1,
    troops: 1,
    groundAnchors: 2,
  };
  const scale = scalingByKind[kind] || 1;
  const plutoniumScale = plutoniumByKind[kind] || 0;
  const supplies = Math.max(0, base + (owned * scale) + expansionStrain);
  const plutonium = Math.max(0, plutoniumScale > 0 ? Math.floor((owned / 8)) + plutoniumScale : Math.floor(owned / 30));
  return { supplies, plutonium };
}

function getColonyThreatLevel(colony = state.colony) {
  if (!colony) {
    return 0;
  }
  let threat = 0;
  if (colony.frontierWar) {
    threat += 1;
  }
  if (colony.region === 'mergi' || colony.region === 'flats') {
    threat += 1;
  }
  const activeHives = Array.isArray(colony.specialTiles)
    ? colony.specialTiles.filter((tile) => tile.type === 'hive' && tile.discovered && !tile.cleared && tile.bugsRemaining > 0).length
    : 0;
  if (activeHives > 0) {
    threat += 1;
  }
  const corruptors = colony.mainland && Array.isArray(colony.mainland.specialTiles)
    ? colony.mainland.specialTiles.filter((tile) => tile.type === 'corruptor').length
    : 0;
  if (corruptors > 0) {
    threat += 1;
  }
  if (colony.mainland && colony.mainland.active) {
    threat += 1;
  }
  return Math.min(4, threat);
}

function getStorePrice(kind) {
  const base = {
    repair: 15,
    spray: 15,
    bouncer: 30,
    maxHp: 50,
    sonar: 100,
    investor: 75 + (state.investorCount * 25),
  };
  const threatLevel = getColonyThreatLevel(state.colony);
  const multiplier = 1 + (threatLevel * 0.2);
  return Math.max(1, Math.round(base[kind] * multiplier));
}

function normalizeMainlandState(mainland) {
  const fallback = createMainlandState();
  const parsed = mainland && typeof mainland === 'object' ? mainland : fallback;
  parsed.unlocked = Boolean(parsed.unlocked);
  parsed.active = Boolean(parsed.active);
  parsed.cycle = Number.isFinite(parsed.cycle) ? parsed.cycle : 0;
  parsed.actionsLeft = Number.isFinite(parsed.actionsLeft) ? parsed.actionsLeft : 0;
  parsed.core = parsed.core && Number.isFinite(parsed.core.x) && Number.isFinite(parsed.core.y)
    ? { x: parsed.core.x, y: parsed.core.y }
    : fallback.core;
  parsed.territory = Array.isArray(parsed.territory) && parsed.territory.length > 0
    ? parsed.territory
      .filter((tile) => Number.isFinite(tile.x) && Number.isFinite(tile.y))
      .map((tile) => ({ x: tile.x, y: tile.y }))
    : [parsed.core];
  parsed.territory = parsed.territory.filter((tile, index, arr) => (
    MAINLAND_MASK.has(`${tile.x},${tile.y}`)
    && arr.findIndex((entry) => entry.x === tile.x && entry.y === tile.y) === index
  ));
  if (!parsed.territory.some((tile) => tile.x === parsed.core.x && tile.y === parsed.core.y)) {
    parsed.territory.unshift(parsed.core);
  }
  const claimedSet = new Set(parsed.territory.map((tile) => `${tile.x},${tile.y}`));
  parsed.buildingTiles = Array.isArray(parsed.buildingTiles)
    ? parsed.buildingTiles
      .filter((tile) => Number.isFinite(tile.x) && Number.isFinite(tile.y) && claimedSet.has(`${tile.x},${tile.y}`))
      .map((tile) => ({ x: tile.x, y: tile.y, kind: tile.kind || 'unknown' }))
    : [];
  parsed.buildingTiles = parsed.buildingTiles.filter((tile, index, arr) => (
    arr.findIndex((entry) => entry.x === tile.x && entry.y === tile.y) === index
  ));
  parsed.specialTiles = Array.isArray(parsed.specialTiles)
    ? parsed.specialTiles
      .filter((tile) => Number.isFinite(tile.x) && Number.isFinite(tile.y) && MAINLAND_MASK.has(`${tile.x},${tile.y}`))
      .map((tile) => ({
        x: tile.x,
        y: tile.y,
        type: tile.type,
        discovered: Boolean(tile.discovered),
        cleared: Boolean(tile.cleared),
        bugsRemaining: Number.isFinite(tile.bugsRemaining) ? tile.bugsRemaining : 0,
      }))
    : fallback.specialTiles;
  // Migration: enrich old mainland saves so they are not barren after balance updates.
  enrichMainlandSpecialTiles(parsed);
  parsed.log = Array.isArray(parsed.log)
    ? parsed.log.map((entry) => (typeof entry === 'string' ? { text: entry, tone: '' } : entry))
    : [];
  return parsed;
}

function dedupeSupportColonies(supportColonies = [], activeRegion = '') {
  const byRegion = new Map();
  for (const colony of supportColonies) {
    if (!colony || !REGION_DATA[colony.region] || colony.region === activeRegion) {
      continue;
    }
    const existing = byRegion.get(colony.region);
    const colonyCycle = Number.isFinite(colony.cycle) ? colony.cycle : 0;
    const existingCycle = existing && Number.isFinite(existing.cycle) ? existing.cycle : -1;
    if (!existing || colonyCycle >= existingCycle) {
      byRegion.set(colony.region, colony);
    }
  }
  return [...byRegion.values()];
}

function showColonyPanel() {
  state.colony = loadStoredColony();
  if (!state.colony || !state.colony.active) {
    showSetup();
    return;
  }

  titlePanel.classList.add('hidden');
  setupPanel.classList.add('hidden');
  gamePanel.classList.add('hidden');
  colonyMapPanel.classList.add('hidden');
  nativeTraderPanel.classList.add('hidden');
  tabletPanel.classList.add('hidden');
  capitalMarketPanel.classList.add('hidden');
  islandTakeoverPanel.classList.add('hidden');
  state.marketOpen = false;
  state.islandOpen = false;
  colonyPanel.classList.remove('hidden');
  syncColonyUi();
  colonyPanel.scrollIntoView({ block: 'start' });
}

function loadStoredColony() {
  try {
    const raw = window.localStorage.getItem(COLONY_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.active !== true || !REGION_DATA[parsed.region]) {
      return null;
    }
    const regionSet = REGION_MASKS[parsed.region] || new Set();
    const defaultCore = getRegionCoreTile(parsed.region);
    parsed.powerDemand = Number.isFinite(parsed.powerDemand) ? parsed.powerDemand : 0;
    parsed.buildings = normalizeBuildings(parsed.buildings || {});
    parsed.core = parsed.core && regionSet.has(`${parsed.core.x},${parsed.core.y}`)
      ? parsed.core
      : defaultCore;
    const rawTerritory = Array.isArray(parsed.territory) && parsed.territory.length > 0
      ? parsed.territory.filter((tile) => regionSet.has(`${tile.x},${tile.y}`))
      : [];
    parsed.territory = rawTerritory.length > 0 ? rawTerritory : [parsed.core];
    if (!parsed.territory.some((tile) => tile.x === parsed.core.x && tile.y === parsed.core.y)) {
      parsed.territory.unshift(parsed.core);
    }
    parsed.territory = parsed.territory.filter((tile, index, arr) => (
      arr.findIndex((entry) => entry.x === tile.x && entry.y === tile.y) === index
    ));
    parsed.specialTiles = Array.isArray(parsed.specialTiles)
      ? parsed.specialTiles
      : buildSpecialTilesForRegion(parsed.region, parsed.core);
    parsed.frontierUnlocked = Boolean(parsed.frontierUnlocked);
    parsed.frontierWar = Boolean(parsed.frontierWar);
    parsed.supportColonies = Array.isArray(parsed.supportColonies)
      ? parsed.supportColonies
        .filter((colony) => colony && REGION_DATA[colony.region])
        .map((colony) => {
          if (Array.isArray(colony.territory) && colony.territory.length > 0) {
            colony.buildings = normalizeBuildings(colony.buildings || {});
            colony.mainland = normalizeMainlandState(parsed.mainland);
            return colony;
          }
          const migrated = createColonyState(colony.region, {
            cycle: Number.isFinite(colony.cycle) ? colony.cycle : 0,
            buildings: normalizeBuildings(colony.buildings || {}),
            food: 140,
            supplies: 150,
            plutonium: 18,
            techBoost: Boolean(colony.techBoost),
            frontierUnlocked: Boolean(colony.frontierUnlocked),
            frontierWar: Boolean(colony.frontierWar),
            mainland: normalizeMainlandState(parsed.mainland),
            log: [{ text: `${REGION_DATA[colony.region].name} support colony preserved from older campaign data.`, tone: '' }],
          });
          return migrated;
        })
      : [];
    if (!parsed.supportColonies.length && Array.isArray(parsed.outposts)) {
      parsed.supportColonies = parsed.outposts
        .filter((regionId) => REGION_DATA[regionId])
        .map((regionId) => createColonyState(regionId, {
          log: [{ text: `${REGION_DATA[regionId].name} support colony preserved from legacy outpost data.`, tone: '' }],
        }));
    }
    parsed.supportColonies = dedupeSupportColonies(parsed.supportColonies, parsed.region);
    parsed.explorer = parsed.explorer && typeof parsed.explorer === 'object' ? parsed.explorer : {};
    parsed.explorer.unlocked = Boolean(parsed.explorer.unlocked);
    parsed.explorer.traveling = Boolean(parsed.explorer.traveling);
    parsed.explorer.targetRegion = REGION_DATA[parsed.explorer.targetRegion] ? parsed.explorer.targetRegion : '';
    parsed.explorer.totalTurns = Number.isFinite(parsed.explorer.totalTurns) ? parsed.explorer.totalTurns : 0;
    parsed.explorer.turnsLeft = Number.isFinite(parsed.explorer.turnsLeft) ? parsed.explorer.turnsLeft : 0;
    if (!parsed.explorer.targetRegion) {
      parsed.explorer.traveling = false;
      parsed.explorer.totalTurns = 0;
      parsed.explorer.turnsLeft = 0;
    }
    parsed.templeSearch = parsed.templeSearch && typeof parsed.templeSearch === 'object' ? parsed.templeSearch : {};
    parsed.templeSearch.active = Boolean(parsed.templeSearch.active);
    parsed.templeSearch.completed = Boolean(parsed.templeSearch.completed);
    parsed.templeSearch.turnsLeft = Number.isFinite(parsed.templeSearch.turnsLeft) ? parsed.templeSearch.turnsLeft : 0;
    parsed.templeSearch.totalTurns = Number.isFinite(parsed.templeSearch.totalTurns) ? parsed.templeSearch.totalTurns : 0;
    parsed.techBoost = Boolean(parsed.techBoost);
    parsed.mainland = normalizeMainlandState(parsed.mainland);
    parsed.lastInstabilityCauses = Array.isArray(parsed.lastInstabilityCauses) ? parsed.lastInstabilityCauses : [];
    parsed.log = Array.isArray(parsed.log)
      ? parsed.log.map((entry) => (typeof entry === 'string' ? { text: entry, tone: '' } : entry))
      : [];
    if (isRegionFullyClaimed(parsed)) {
      parsed.explorer.unlocked = true;
    }
    return parsed;
  } catch {
    return null;
  }
}

function storeColony() {
  try {
    if (!state.colony) {
      window.localStorage.removeItem(COLONY_STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(COLONY_STORAGE_KEY, JSON.stringify(state.colony));
  } catch {
    // Ignore storage failures.
  }
}

function loadColonizeDelay() {
  try {
    const raw = Number(window.localStorage.getItem(COLONIZE_DELAY_STORAGE_KEY));
    return raw === 2000 ? 2000 : 0;
  } catch {
    return 0;
  }
}

function storeColonizeDelay() {
  try {
    window.localStorage.setItem(COLONIZE_DELAY_STORAGE_KEY, String(state.colonizeDelayTarget || 0));
  } catch {
    // Ignore storage failures.
  }
}

function isRegionFullyClaimed(colony = state.colony) {
  if (!colony || !REGION_MASKS[colony.region]) {
    return false;
  }
  const claimed = new Set((colony.territory || []).map((tile) => `${tile.x},${tile.y}`));
  for (const key of REGION_MASKS[colony.region]) {
    if (!claimed.has(key)) {
      return false;
    }
  }
  return true;
}

function getEmpireColonies(colony = state.colony) {
  if (!colony) {
    return [];
  }
  return [colony, ...(Array.isArray(colony.supportColonies) ? colony.supportColonies : [])];
}

function shiftEmpireStability(amount, source = 'mainland pressure') {
  if (!state.colony || !Number.isFinite(amount) || amount === 0) {
    return 0;
  }
  const colonies = getEmpireColonies(state.colony);
  let totalShift = 0;
  for (const colony of colonies) {
    if (!colony || !Number.isFinite(colony.stability)) {
      continue;
    }
    const before = colony.stability;
    colony.stability = Math.max(0, Math.min(100, colony.stability + amount));
    totalShift += colony.stability - before;
  }
  if (totalShift !== 0) {
    const direction = totalShift < 0 ? 'down' : 'up';
    const magnitude = Math.abs(totalShift);
    addMainlandLog(`Empire stability ${direction} (${magnitude}) from ${source}.`, totalShift < 0 ? 'bad' : 'good');
  }
  return totalShift;
}

function hasFullControlAcrossRegions(colony = state.colony) {
  const empire = getEmpireColonies(colony);
  if (empire.length === 0) {
    return false;
  }
  const byRegion = new Map();
  for (const entry of empire) {
    if (entry && REGION_DATA[entry.region] && !byRegion.has(entry.region)) {
      byRegion.set(entry.region, entry);
    }
  }
  if (byRegion.size < Object.keys(REGION_DATA).length) {
    return false;
  }
  for (const entry of byRegion.values()) {
    if (!isRegionFullyClaimed(entry)) {
      return false;
    }
  }
  return true;
}

function ensureIslandTakeoverUnlocked() {
  if (!state.colony || !state.colony.active) {
    return;
  }
  if (!state.colony.mainland) {
    state.colony.mainland = createMainlandState();
  }
  if (state.colony.mainland.unlocked) {
    return;
  }
  if (hasFullControlAcrossRegions(state.colony)) {
    state.colony.mainland.unlocked = true;
    state.colony.mainland.log.unshift({ text: 'All colony region maps are secured. Island Takeover command is now unlocked.', tone: 'good' });
    state.colony.mainland.log = state.colony.mainland.log.slice(0, 24);
    addColonyLog('All region squares for every colony are secured. Island Takeover is now available.', 'good');
  }
}

function getExplorerTravelTurns(fromRegion, toRegion) {
  const from = REGION_TRAVEL_POINTS[fromRegion];
  const to = REGION_TRAVEL_POINTS[toRegion];
  if (!from || !to) {
    return 0;
  }
  const distance = Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
  return Math.max(2, Math.ceil(distance / 2));
}

function unlockExplorerIfReady() {
  if (!state.colony || !state.colony.active || state.colony.explorer.unlocked) {
    return;
  }
  if (isRegionFullyClaimed(state.colony)) {
    state.colony.explorer.unlocked = true;
    addColonyLog('All region squares claimed. The Explorer is unlocked and ready to range across Kharox.', 'good');
  }
}

function sendExplorer(targetRegion) {
  if (!state.colony || !state.colony.active || !REGION_DATA[targetRegion]) {
    return;
  }

  const colony = state.colony;
  if (!colony.explorer.unlocked || colony.explorer.traveling) {
    return;
  }
  if (targetRegion === colony.region || colony.supportColonies.some((entry) => entry.region === targetRegion)) {
    return;
  }

  const turns = getExplorerTravelTurns(colony.region, targetRegion);
  colony.explorer.traveling = true;
  colony.explorer.targetRegion = targetRegion;
  colony.explorer.totalTurns = turns;
  colony.explorer.turnsLeft = turns;
  addColonyLog(`The Explorer set out for ${REGION_DATA[targetRegion].name}. Travel time: ${turns} cycles.`, 'good');
  storeColony();
  syncColonyUi();
}

function advanceExplorerProgress() {
  if (!state.colony || !state.colony.active || !state.colony.explorer.traveling) {
    return false;
  }

  const explorer = state.colony.explorer;
  explorer.turnsLeft = Math.max(0, explorer.turnsLeft - 1);
  if (explorer.turnsLeft > 0) {
    addColonyLog(`The Explorer is still crossing Kharox toward ${REGION_DATA[explorer.targetRegion].name}. ${explorer.turnsLeft} cycles remain.`, '');
    return false;
  }

  const targetRegion = explorer.targetRegion;
  const oldColony = state.colony;
  const newRemoteColony = createColonyState(targetRegion, {
    techBoost: Boolean(oldColony.techBoost),
    log: [
      { text: `Explorer command established a new colony in ${REGION_DATA[targetRegion].name}.`, tone: 'good' },
      { text: REGION_DATA[targetRegion].summary, tone: '' },
    ],
  });
  oldColony.supportColonies = dedupeSupportColonies(
    [...(oldColony.supportColonies || []), newRemoteColony],
    oldColony.region,
  );
  oldColony.explorer.traveling = false;
  oldColony.explorer.targetRegion = '';
  oldColony.explorer.totalTurns = 0;
  oldColony.explorer.turnsLeft = 0;
  addColonyLog(`The Explorer reached ${REGION_DATA[targetRegion].name} and founded a new remote colony.`, 'good');
  return false;
}

function applySupportColonyEffects() {
  if (!state.colony || !state.colony.active || !Array.isArray(state.colony.supportColonies) || state.colony.supportColonies.length === 0) {
    return;
  }
  const activeIsMergi = state.colony.region === 'mergi';

  for (const support of state.colony.supportColonies) {
    support.cycle = (support.cycle || 0) + 1;
    const buildings = support.buildings || {};
    const territoryCount = Array.isArray(support.territory) ? support.territory.length : 1;
    const region = REGION_DATA[support.region];
    const boost = support.techBoost ? 2 : 1;
    const food = Math.max(0, Math.round(buildings.farms * 4 * region.foodMult * boost + territoryCount * 0.5));
    let supplies = Math.max(0, Math.round((buildings.factories * 4 * region.factoryMult + buildings.mines * 2 * region.mineMult) * boost));
    if (support.region === 'mergi') {
      // Sink fields in Mergi swallow heavy freight routes.
      supplies = 0;
    }
    if (activeIsMergi) {
      // Mergi also cannot safely receive external supply freight.
      supplies = 0;
    }
    const plutonium = Math.max(0, Math.round(buildings.mines * 3 * region.mineMult * boost));
    const points = support.region === 'capital' ? 4 : support.region === 'mergi' ? 2 : 1;
    state.colony.food += food;
    state.colony.supplies += supplies;
    state.colony.plutonium += plutonium;
    state.points += points;
    addColonyLog(`${region.name} support colony shipped ${food} food, ${supplies} supplies, ${plutonium} plutonium, and ${points} points.`, 'good');
  }
}

function canSearchTemple(colony = state.colony) {
  return Boolean(
    colony
    && colony.active
    && colony.region === 'mergi'
    && state.lore.terrarex === true
  );
}

function getBuildingBoost(colony = state.colony) {
  return colony && colony.techBoost ? 2 : 1;
}

function getColonyDefense(colony = state.colony) {
  const boost = getBuildingBoost(colony);
  return (colony.buildings.barracks * 2 + colony.buildings.troops) * boost;
}

function getAttackRollCapDefense(colony = state.colony) {
  const boost = getBuildingBoost(colony);
  // Troops increase your blocking defense, but enemy roll caps track fixed fortifications.
  return colony.buildings.barracks * 2 * boost;
}

function cloneColonyData(value) {
  return JSON.parse(JSON.stringify(value));
}

function snapshotSupportColony(colony) {
  return {
    active: true,
    region: colony.region,
    cycle: colony.cycle,
    food: colony.food,
    supplies: colony.supplies,
    plutonium: colony.plutonium,
    power: colony.power,
    powerDemand: colony.powerDemand,
    stability: colony.stability,
    buildings: cloneColonyData(colony.buildings),
    core: cloneColonyData(colony.core),
    territory: cloneColonyData(colony.territory),
    specialTiles: cloneColonyData(colony.specialTiles),
    frontierUnlocked: Boolean(colony.frontierUnlocked),
    frontierWar: Boolean(colony.frontierWar),
    explorer: cloneColonyData(colony.explorer),
    templeSearch: cloneColonyData(colony.templeSearch),
    techBoost: Boolean(colony.techBoost),
    mainland: cloneColonyData(colony.mainland),
    lastInstabilityCauses: cloneColonyData(colony.lastInstabilityCauses || []),
    log: cloneColonyData(colony.log || []),
  };
}

function switchToSupportColony(index) {
  if (!state.colony || !Array.isArray(state.colony.supportColonies) || !state.colony.supportColonies[index]) {
    return;
  }

  const currentSnapshot = snapshotSupportColony(state.colony);
  const nextActive = cloneColonyData(state.colony.supportColonies[index]);
  const remaining = state.colony.supportColonies
    .filter((_, itemIndex) => itemIndex !== index)
    .map((colony) => cloneColonyData(colony));

  // Mainland takeover is global campaign state; carry it with command transfers.
  nextActive.mainland = cloneColonyData(state.colony.mainland || createMainlandState());
  nextActive.supportColonies = dedupeSupportColonies([...remaining, currentSnapshot], nextActive.region);
  nextActive.active = true;
  if (!nextActive.log) {
    nextActive.log = [];
  }
  nextActive.log.unshift({ text: `Command transferred to ${REGION_DATA[nextActive.region].name}.`, tone: 'good' });
  nextActive.log = nextActive.log.slice(0, 18);
  state.colony = nextActive;
  storeColony();
  syncColonyUi();
  if (state.colonyMapOpen) {
    syncTerritoryMap();
  }
}

function startTempleSearch() {
  if (!canSearchTemple()) {
    return;
  }

  const colony = state.colony;
  if (colony.templeSearch.completed || colony.templeSearch.active) {
    return;
  }
  if (colony.supplies < 30) {
    addColonyLog('Not enough supplies to start a coordinates search. Need 30 supplies.', 'bad');
    syncColonyUi();
    return;
  }

  colony.supplies -= 30;
  colony.templeSearch.active = true;
  colony.templeSearch.totalTurns = 4;
  colony.templeSearch.turnsLeft = 4;
  addColonyLog('Search teams descended into the Mergi Wastes using the Terrarex coordinates.', 'good');
  storeColony();
  syncColonyUi();
}

function advanceTempleSearch() {
  if (!canSearchTemple() || !state.colony.templeSearch.active) {
    return;
  }

  const search = state.colony.templeSearch;
  search.turnsLeft = Math.max(0, search.turnsLeft - 1);

  if (search.turnsLeft > 0) {
    addColonyLog(`Temple search progress: ${search.turnsLeft} cycles remain before the teams reach the buried tunnel.`, '');
    return;
  }

  search.active = false;
  search.completed = true;
  state.colony.techBoost = true;
  addColonyLog('The Terrarex tunnel has been found. Searchers walked the buried halls and learned the ways of the natives\' ancestors.', 'good');
  addColonyLog('There they uncovered the secret of Terrarex\'s success. All building properties are now doubled.', 'good');
  addColonyLog('Wall writing reads:', '');
  addColonyLog('The one who seeks fortune', '');
  addColonyLog('will writhe with anger.', '');
  addColonyLog('They will never get their portion.', '');
  addColonyLog('They went with the clanger.', '');
  addColonyLog('Seek not the forest, green with hunger.', '');
  addColonyLog('Seek not the markets, bright with speech.', '');
  addColonyLog('Go where the black earth glows beneath you,', '');
  addColonyLog('where the worm sleeps just in reach.', '');
}

function getColonyCaps(colony = state.colony) {
  const boost = getBuildingBoost(colony);
  const storage = colony.buildings.storageHouses;
  return {
    food: 180 + storage * 120 * boost,
    supplies: 180 + storage * 100 * boost,
    plutonium: 60 + storage * 70 * boost,
  };
}

function addColonyLog(text, tone = '') {
  if (!state.colony) {
    return;
  }
  state.colony.log.unshift({ text, tone });
  state.colony.log = state.colony.log.slice(0, 18);
}

function syncColonyUi() {
  if (!state.colony || !state.colony.active) {
    return;
  }
  ensureIslandTakeoverUnlocked();

  const region = REGION_DATA[state.colony.region];
  const caps = getColonyCaps();
  const defense = getColonyDefense(state.colony);
  const colonyBroken = state.colony.stability <= 0;
  const regionSquareCount = REGION_MASKS[state.colony.region] ? REGION_MASKS[state.colony.region].size : 0;
  const regionFilled = isRegionFullyClaimed(state.colony);

  colonyRegionValue.textContent = region.name;
  colonyCycleValue.textContent = String(state.colony.cycle);
  colonyFoodValue.textContent = `${state.colony.food}/${caps.food}`;
  colonySuppliesValue.textContent = `${state.colony.supplies}/${caps.supplies}`;
  colonyPlutoniumValue.textContent = `${state.colony.plutonium}/${caps.plutonium}`;
  colonyPowerValue.textContent = String(state.colony.power);
  colonyPowerDemandValue.textContent = String(state.colony.powerDemand || 0);
  colonyStabilityValue.textContent = `${state.colony.stability}%`;
  colonyDefenseValue.textContent = String(defense);
  colonyRegionFlavor.textContent = region.mapText;
  colonyRegionFlavor.style.color = region.id === 'capital' ? '#afffa7' : '#f0e1b5';
  syncColonyBuildViz();

  farmCount.textContent = String(state.colony.buildings.farms);
  powerPlantCount.textContent = String(state.colony.buildings.powerPlants);
  mineCount.textContent = String(state.colony.buildings.mines);
  factoryCount.textContent = String(state.colony.buildings.factories);
  businessHouseCount.textContent = String(state.colony.buildings.businessHouses);
  storageHouseCount.textContent = String(state.colony.buildings.storageHouses);
  barracksCount.textContent = String(state.colony.buildings.barracks);
  troopCount.textContent = String(state.colony.buildings.troops);
  groundAnchorCount.textContent = String(state.colony.buildings.groundAnchors);

  if (!state.colony.explorer.unlocked) {
    explorerStatus.textContent = `Locked. Claim all ${regionSquareCount} region squares to unlock The Explorer.`;
  } else if (state.colony.explorer.traveling) {
    explorerStatus.textContent = `Traveling to ${REGION_DATA[state.colony.explorer.targetRegion].name}. ${state.colony.explorer.turnsLeft}/${state.colony.explorer.totalTurns} cycles left.`;
  } else if (regionFilled) {
    explorerStatus.textContent = 'Ready. Pick a new region and The Explorer will start the trip.';
  } else {
    explorerStatus.textContent = 'Unlocked, but the current region is no longer fully controlled.';
  }

  explorerOutposts.textContent = state.colony.supportColonies.length > 0
    ? `Support Colonies: ${state.colony.supportColonies.map((entry) => REGION_DATA[entry.region].name).join(', ')}`
    : 'Support Colonies: none';

  supportColonyList.innerHTML = '';
  if (state.colony.supportColonies.length === 0) {
    supportColonyStatus.textContent = 'No support colonies available.';
  } else {
    supportColonyStatus.textContent = 'Visit an older colony and take command there.';
    state.colony.supportColonies.forEach((entry, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = `Visit ${REGION_DATA[entry.region].name}`;
      button.addEventListener('click', () => switchToSupportColony(index));
      supportColonyList.appendChild(button);
    });
  }

  explorerTargets.innerHTML = '';
  if (state.colony.explorer.unlocked && !state.colony.explorer.traveling) {
    const targets = Object.keys(REGION_DATA).filter((regionId) => (
      regionId !== state.colony.region
      && !state.colony.supportColonies.some((entry) => entry.region === regionId)
    ));
    if (targets.length === 0) {
      const done = document.createElement('div');
      done.className = 'subState';
      done.textContent = 'All other regions already have support colonies.';
      explorerTargets.appendChild(done);
    } else {
      for (const regionId of targets) {
        const button = document.createElement('button');
        const turns = getExplorerTravelTurns(state.colony.region, regionId);
        button.type = 'button';
        button.textContent = `Send to ${REGION_DATA[regionId].name} (${turns} cycles)`;
        button.addEventListener('click', () => sendExplorer(regionId));
        explorerTargets.appendChild(button);
      }
    }
  }

  const showTempleSearch = canSearchTemple(state.colony);
  templeSearchHeading.classList.toggle('hidden', !showTempleSearch);
  templeSearchPanel.classList.toggle('hidden', !showTempleSearch);
  if (showTempleSearch) {
    if (state.colony.templeSearch.completed) {
      templeSearchStatus.textContent = 'The Terrarex tunnel has been deciphered. Terrarex knowledge now doubles all building properties.';
      startTempleSearchBtn.disabled = true;
      startTempleSearchBtn.textContent = 'Temple Deciphered';
      readWallRiddleBtn.classList.remove('hidden');
    } else if (state.colony.templeSearch.active) {
      templeSearchStatus.textContent = `Search active. ${state.colony.templeSearch.turnsLeft}/${state.colony.templeSearch.totalTurns} cycles remain.`;
      startTempleSearchBtn.disabled = true;
      startTempleSearchBtn.textContent = 'Search Underway';
      readWallRiddleBtn.classList.add('hidden');
    } else {
      templeSearchStatus.textContent = 'The Terrarex tablet points to a buried tunnel beneath the Mergi Wastes.';
      startTempleSearchBtn.disabled = state.colony.supplies < 30;
      startTempleSearchBtn.textContent = 'Search Via Coords';
      readWallRiddleBtn.classList.add('hidden');
    }
  } else {
    readWallRiddleBtn.classList.add('hidden');
  }

  colonyLog.innerHTML = '';
  for (const entry of state.colony.log) {
    const p = document.createElement('p');
    p.className = `logEntry ${entry.tone || ''}`.trim();
    p.textContent = entry.text;
    colonyLog.appendChild(p);
  }

  const farmCost = getBuildingCost('farms', state.colony);
  const powerPlantCost = getBuildingCost('powerPlants', state.colony);
  const mineCost = getBuildingCost('mines', state.colony);
  const factoryCost = getBuildingCost('factories', state.colony);
  const businessCost = getBuildingCost('businessHouses', state.colony);
  const storageCost = getBuildingCost('storageHouses', state.colony);
  const barracksCost = getBuildingCost('barracks', state.colony);
  const troopCost = getBuildingCost('troops', state.colony);
  const anchorCost = getBuildingCost('groundAnchors', state.colony);

  advanceColonyBtn.disabled = false;
  buildFarmBtn.disabled = state.colony.supplies < farmCost.supplies || state.colony.plutonium < farmCost.plutonium;
  buildPowerPlantBtn.disabled = state.colony.supplies < powerPlantCost.supplies || state.colony.plutonium < powerPlantCost.plutonium;
  buildMineBtn.disabled = state.colony.buildings.mines >= MINE_CAP || state.colony.supplies < mineCost.supplies || state.colony.plutonium < mineCost.plutonium;
  buildFactoryBtn.disabled = state.colony.supplies < factoryCost.supplies || state.colony.plutonium < factoryCost.plutonium;
  buildBusinessHouseBtn.disabled = state.colony.supplies < businessCost.supplies || state.colony.plutonium < businessCost.plutonium;
  buildStorageBtn.disabled = state.colony.supplies < storageCost.supplies || state.colony.plutonium < storageCost.plutonium;
  buildBarracksBtn.disabled = state.colony.supplies < barracksCost.supplies || state.colony.plutonium < barracksCost.plutonium;
  buildTroopBtn.disabled = state.colony.supplies < troopCost.supplies || state.colony.plutonium < troopCost.plutonium;
  buildGroundAnchorBtn.disabled = state.colony.supplies < anchorCost.supplies || state.colony.plutonium < anchorCost.plutonium;
  openCapitalMarketBtn.disabled = state.colony.region !== 'capital';
  openIslandTakeoverBtn.disabled = !state.colony.mainland || !state.colony.mainland.unlocked;
  if (colonyBroken) {
    advanceColonyBtn.disabled = true;
    buildFarmBtn.disabled = true;
    buildPowerPlantBtn.disabled = true;
    buildMineBtn.disabled = true;
    buildFactoryBtn.disabled = true;
    buildBusinessHouseBtn.disabled = true;
    buildStorageBtn.disabled = true;
    buildBarracksBtn.disabled = true;
    buildTroopBtn.disabled = true;
    buildGroundAnchorBtn.disabled = true;
    openCapitalMarketBtn.disabled = true;
    openIslandTakeoverBtn.disabled = true;
  }
  restartColonyBtn.classList.toggle('hidden', !colonyBroken);
}

function syncColonyBuildViz() {
  if (!state.colony) {
    colonyBuildViz.innerHTML = '';
    return;
  }

  const order = [
    ['farms', 'Farms'],
    ['powerPlants', 'Power'],
    ['mines', 'Mines'],
    ['factories', 'Factory'],
    ['businessHouses', 'Business'],
    ['storageHouses', 'Storage'],
    ['barracks', 'Barracks'],
    ['troops', 'Troops'],
    ['groundAnchors', 'Anchors'],
  ];

  colonyBuildViz.innerHTML = '';

  for (const [key, label] of order) {
    const column = document.createElement('div');
    column.className = 'buildColumn';

    const stack = document.createElement('div');
    stack.className = 'buildStack';
    const count = state.colony.buildings[key];
    const visibleCount = Math.min(count, 8);

    for (let i = 0; i < visibleCount; i += 1) {
      const sprite = document.createElement('div');
      sprite.className = `buildSprite ${key}`;
      stack.appendChild(sprite);
    }

    if (count > visibleCount) {
      const extra = document.createElement('div');
      extra.className = 'buildLabel';
      extra.textContent = `+${count - visibleCount}`;
      stack.appendChild(extra);
    }

    const caption = document.createElement('div');
    caption.className = 'buildLabel';
    caption.textContent = `${label} ${count}`;

    column.appendChild(stack);
    column.appendChild(caption);
    colonyBuildViz.appendChild(column);
  }
}

function buildColonyBuilding(kind) {
  if (!state.colony || !state.colony.active) {
    return;
  }

  const rules = BUILDING_DATA[kind];
  if (!rules) {
    return;
  }

  if (kind === 'mines' && state.colony.buildings.mines >= MINE_CAP) {
    addColonyLog(`Mine cap reached (${MINE_CAP}). No more mines can be built.`, 'bad');
    syncColonyUi();
    return;
  }

  const cost = getBuildingCost(kind, state.colony);
  if (state.colony.supplies < cost.supplies || state.colony.plutonium < cost.plutonium) {
    addColonyLog(`Not enough resources for ${rules.label}. Need ${cost.supplies} supplies and ${cost.plutonium} plutonium.`, 'bad');
    syncColonyUi();
    return;
  }

  if (state.colony.mainland && state.colony.mainland.active && state.colony.mainland.actionsLeft <= 0) {
    addColonyLog('No build actions left this mainland cycle. Advance cycle or skip turn.', 'bad');
    syncColonyUi();
    return;
  }

  if (state.colony.mainland && state.colony.mainland.active && kind === 'groundAnchors') {
    if (state.pendingPlacement) {
      addColonyLog('Finish the current placement first.', 'bad');
      syncColonyUi();
      return;
    }
    state.pendingPlacement = { kind, suppliesCost: cost.supplies, plutoniumCost: cost.plutonium };
    addColonyLog('Ground Anchor placement armed. Open Island Takeover and click a valid expansion square.', 'good');
    addMainlandLog('Placement mode: click an adjacent empty land square to place Ground Anchor.', 'good');
    if (state.islandOpen) {
      syncIslandTakeoverUi();
    }
    return;
  }

  if (state.colony.mainland && state.colony.mainland.active) {
    const placed = placeMainlandBuildingTile(kind);
    if (!placed) {
      addColonyLog('No free mainland square available for this building. Expand more territory first.', 'bad');
      syncColonyUi();
      if (state.islandOpen) {
        syncIslandTakeoverUi();
      }
      return;
    }
  }

  state.colony.supplies -= cost.supplies;
  state.colony.plutonium = Math.max(0, state.colony.plutonium - cost.plutonium);
  state.colony.buildings[kind] += 1;
  if (state.colony.mainland && state.colony.mainland.active) {
    state.colony.mainland.actionsLeft = Math.max(0, state.colony.mainland.actionsLeft - 1);
  }
  if (kind === 'farms') {
    playOrchardGrassSound();
  } else {
    playMetalClangSound();
  }
  addColonyLog(`${rules.label} completed. Cost: ${cost.supplies} supplies, ${cost.plutonium} plutonium.`, 'good');
  storeColony();
  syncColonyUi();
  if (state.islandOpen) {
    syncIslandTakeoverUi();
  }
}

function openColonyTerritoryMap() {
  if (!state.colony || !state.colony.active) {
    return;
  }
  state.colonyMapOpen = true;
  colonyTerritoryPanel.classList.remove('hidden');
  syncTerritoryMap();
}

function closeColonyTerritoryMap() {
  state.colonyMapOpen = false;
  colonyTerritoryPanel.classList.add('hidden');
}

function openCapitalMarket() {
  if (!state.colony || !state.colony.active) {
    return;
  }
  if (state.colony.region !== 'capital') {
    addColonyLog('Native Capital market access is only available while commanding a colony in Native Capital.', 'bad');
    syncColonyUi();
    return;
  }

  state.marketOpen = true;
  state.marketPos = { x: 480, y: 460 };
  state.marketTouchStallId = '';
  state.marketMessage = 'Walk to a stall and press E to trade points.';
  colonyPanel.classList.add('hidden');
  colonyTerritoryPanel.classList.add('hidden');
  capitalMarketPanel.classList.remove('hidden');
  syncMarketUi();
}

function closeCapitalMarket() {
  state.marketOpen = false;
  state.marketTouchStallId = '';
  capitalMarketPanel.classList.add('hidden');
  showColonyPanel();
}

function openIslandTakeoverPanel() {
  if (!state.colony || !state.colony.active) {
    return;
  }
  ensureIslandTakeoverUnlocked();
  if (!state.colony.mainland || !state.colony.mainland.unlocked) {
    addColonyLog('Island Takeover is locked. Claim all region squares for every colony first.', 'bad');
    syncColonyUi();
    return;
  }
  if (!state.colony.mainland.active) {
    state.colony.mainland.active = true;
    state.colony.mainland.actionsLeft = getMainlandColonyCount() * 4;
    addMainlandLog('Island Takeover command online. You can place 4 builds per colony this cycle.', 'good');
  }
  enrichMainlandSpecialTiles(state.colony.mainland);

  state.islandOpen = true;
  state.marketOpen = false;
  capitalMarketPanel.classList.add('hidden');
  colonyTerritoryPanel.classList.add('hidden');
  colonyPanel.classList.add('hidden');
  islandTakeoverPanel.classList.remove('hidden');
  syncIslandTakeoverUi();
}

function closeIslandTakeoverPanel() {
  state.islandOpen = false;
  islandTakeoverPanel.classList.add('hidden');
  showColonyPanel();
}

function addMainlandLog(text, tone = '') {
  if (!state.colony || !state.colony.mainland) {
    return;
  }
  state.colony.mainland.log.unshift({ text, tone });
  state.colony.mainland.log = state.colony.mainland.log.slice(0, 24);
}

function canPlaceMainlandExpansionAt(x, y) {
  if (!state.colony || !state.colony.mainland) {
    return false;
  }
  const key = `${x},${y}`;
  if (!MAINLAND_MASK.has(key)) {
    return false;
  }
  const mainland = state.colony.mainland;
  const claimed = new Set(mainland.territory.map((tile) => `${tile.x},${tile.y}`));
  if (claimed.has(key)) {
    return false;
  }
  const neighbors = getLandNeighbors(x, y);
  return neighbors.some((tile) => claimed.has(`${tile.x},${tile.y}`));
}

function handleMainlandCellClick(x, y) {
  if (!state.pendingPlacement || !state.colony || !state.colony.mainland || !state.colony.mainland.active) {
    return;
  }
  const pending = state.pendingPlacement;
  if (!canPlaceMainlandExpansionAt(x, y)) {
    addMainlandLog('Invalid placement: choose an adjacent empty land square.', 'bad');
    syncIslandTakeoverUi();
    return;
  }
  if (state.colony.supplies < pending.suppliesCost) {
    addMainlandLog('Placement canceled: not enough supplies anymore.', 'bad');
    state.pendingPlacement = null;
    syncColonyUi();
    syncIslandTakeoverUi();
    return;
  }
  if (state.colony.plutonium < (pending.plutoniumCost || 0)) {
    addMainlandLog('Placement canceled: not enough plutonium anymore.', 'bad');
    state.pendingPlacement = null;
    syncColonyUi();
    syncIslandTakeoverUi();
    return;
  }
  if (state.colony.mainland.actionsLeft <= 0) {
    addMainlandLog('Placement canceled: no build actions left this cycle.', 'bad');
    state.pendingPlacement = null;
    syncColonyUi();
    syncIslandTakeoverUi();
    return;
  }

  state.colony.supplies -= pending.suppliesCost;
  state.colony.plutonium = Math.max(0, state.colony.plutonium - (pending.plutoniumCost || 0));
  state.colony.buildings[pending.kind] += 1;
  state.colony.mainland.actionsLeft = Math.max(0, state.colony.mainland.actionsLeft - 1);
  state.colony.mainland.territory.push({ x, y });
  state.colony.mainland.buildingTiles.push({ x, y, kind: pending.kind });
  enrichMainlandSpecialTiles(state.colony.mainland);
  resolveMainlandClaim({ x, y });
  if (pending.kind === 'farms') {
    playOrchardGrassSound();
  } else {
    playMetalClangSound();
  }
  addColonyLog(`${BUILDING_DATA[pending.kind].label} completed at ${x},${y}. Cost: ${pending.suppliesCost} supplies, ${pending.plutoniumCost || 0} plutonium.`, 'good');
  addMainlandLog(`Ground Anchor placed at ${x},${y}. Buildings within 2 squares are protected.`, 'good');
  state.pendingPlacement = null;
  storeColony();
  syncColonyUi();
  syncIslandTakeoverUi();
}

function placeMainlandBuildingTile(kind) {
  if (!state.colony || !state.colony.mainland) {
    return false;
  }
  const mainland = state.colony.mainland;
  const claimed = new Set(mainland.territory.map((tile) => `${tile.x},${tile.y}`));
  const deltas = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];
  const candidates = [];
  for (const tile of mainland.territory) {
    for (const delta of deltas) {
        const nx = tile.x + delta.x;
        const ny = tile.y + delta.y;
        const key = `${nx},${ny}`;
        if (nx < 0 || nx >= MAINLAND_SIZE || ny < 0 || ny >= MAINLAND_SIZE || claimed.has(key) || !MAINLAND_MASK.has(key)) {
          continue;
        }
      if (!candidates.some((item) => item.x === nx && item.y === ny)) {
        candidates.push({ x: nx, y: ny });
      }
    }
  }
  if (candidates.length === 0) {
    return false;
  }
  const chosen = candidates[randInt(0, candidates.length - 1)];
  mainland.territory.push({ x: chosen.x, y: chosen.y });
  mainland.buildingTiles.push({ x: chosen.x, y: chosen.y, kind });
  enrichMainlandSpecialTiles(mainland);
  addMainlandLog(`Built ${BUILDING_DATA[kind].label} at ${chosen.x},${chosen.y}.`, 'good');
  resolveMainlandClaim(chosen);
  return true;
}

function removeMainlandBuildingTile(tile, reason = '') {
  if (!state.colony || !state.colony.mainland || !tile) {
    return;
  }
  const mainland = state.colony.mainland;
  mainland.buildingTiles = mainland.buildingTiles.filter((entry) => !(entry.x === tile.x && entry.y === tile.y));
  mainland.territory = mainland.territory.filter((entry) => {
    if (entry.x === mainland.core.x && entry.y === mainland.core.y) {
      return true;
    }
    return !(entry.x === tile.x && entry.y === tile.y);
  });
  if (state.colony.buildings[tile.kind] > 0) {
    state.colony.buildings[tile.kind] -= 1;
  }
  const label = BUILDING_DATA[tile.kind] ? BUILDING_DATA[tile.kind].label : 'Building';
  addMainlandLog(`${label} at ${tile.x},${tile.y} was destroyed${reason ? ` by ${reason}` : ''}.`, 'bad');
}

function isTileProtectedByGroundAnchor(tile) {
  if (!state.colony || !state.colony.mainland || !tile) {
    return false;
  }
  const anchors = (state.colony.mainland.buildingTiles || []).filter((entry) => entry.kind === 'groundAnchors');
  return anchors.some((anchor) => (
    Math.abs(anchor.x - tile.x) <= 2 && Math.abs(anchor.y - tile.y) <= 2
  ));
}

function destroyRandomMainlandBuilding(reason = 'hazards') {
  if (!state.colony || !state.colony.mainland) {
    return false;
  }
  const mainland = state.colony.mainland;
  if (!Array.isArray(mainland.buildingTiles) || mainland.buildingTiles.length === 0) {
    return false;
  }
  const vulnerable = mainland.buildingTiles.filter((tile) => !isTileProtectedByGroundAnchor(tile));
  if (vulnerable.length === 0) {
    addMainlandLog('Ground Anchor network held. No building was lost.', 'good');
    return false;
  }
  const tile = vulnerable[randInt(0, vulnerable.length - 1)];
  removeMainlandBuildingTile(tile, reason);
  return true;
}

function triggerMainlandBurrowCollapse(centerTile) {
  if (!state.colony || !state.colony.mainland) {
    return;
  }
  const defense = getColonyDefense(state.colony);
  if (defense > 75) {
    addMainlandLog(`Worm burrow at ${centerTile.x},${centerTile.y} was contained by defense > 75.`, 'good');
    return;
  }
  const mainland = state.colony.mainland;
  const doomed = mainland.buildingTiles.filter((tile) => (
    Math.abs(tile.x - centerTile.x) <= 2
    && Math.abs(tile.y - centerTile.y) <= 2
    && !isTileProtectedByGroundAnchor(tile)
  ));
  if (doomed.length === 0) {
    addMainlandLog(`Worm burrow at ${centerTile.x},${centerTile.y} opened, but hit empty ground.`, 'bad');
    return;
  }
  for (const tile of doomed) {
    removeMainlandBuildingTile(tile, 'worm collapse');
  }
}

function syncIslandTakeoverUi() {
  if (!state.islandOpen || !state.colony || !state.colony.mainland) {
    return;
  }
  const mainland = state.colony.mainland;
  mainlandCycleValue.textContent = String(mainland.cycle);
  mainlandActionsValue.textContent = String(mainland.actionsLeft);
  mainlandLog.innerHTML = '';
  for (const entry of mainland.log) {
    const p = document.createElement('p');
    p.className = `logEntry ${entry.tone || ''}`.trim();
    p.textContent = entry.text;
    mainlandLog.appendChild(p);
  }
  renderMainlandMap();
}

function renderMainlandMap() {
  if (!state.colony || !state.colony.mainland) {
    mainlandMap.innerHTML = '';
    return;
  }
  const mainland = state.colony.mainland;
  const claimed = new Set(mainland.territory.map((tile) => `${tile.x},${tile.y}`));
  const buildingTiles = new Map((mainland.buildingTiles || []).map((tile) => [`${tile.x},${tile.y}`, tile]));
  const specials = new Map((mainland.specialTiles || []).map((tile) => [`${tile.x},${tile.y}`, tile]));
  mainlandMap.innerHTML = '';
  for (let y = 0; y < MAINLAND_SIZE; y += 1) {
    for (let x = 0; x < MAINLAND_SIZE; x += 1) {
      const cell = document.createElement('div');
      cell.className = 'mainlandCell';
      const key = `${x},${y}`;
      const isLand = MAINLAND_MASK.has(key);
      if (!isLand) {
        cell.classList.add('water');
        mainlandMap.appendChild(cell);
        continue;
      }
      if (state.pendingPlacement && canPlaceMainlandExpansionAt(x, y)) {
        cell.classList.add('placeable');
      }
      const biome = getMainlandBiome(x, y);
      cell.classList.add(`biome-${biome}`);
      const detailClass = getMainlandDetailClass(x, y);
      if (detailClass) {
        cell.classList.add(detailClass);
      }
      const deltas = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      const coast = deltas.some(([dx, dy]) => !MAINLAND_MASK.has(`${x + dx},${y + dy}`));
      if (coast) {
        cell.classList.add('coast');
      }
      if (claimed.has(key)) {
        cell.classList.add('claimed');
      }
      const special = specials.get(key);
      if (special) {
        cell.classList.add(special.type);
      }
      const building = buildingTiles.get(key);
      if (building) {
        cell.classList.add('built');
        cell.classList.add(`building-${building.kind}`);
      }
      if (x === mainland.core.x && y === mainland.core.y) {
        cell.classList.add('core');
      }
      cell.addEventListener('click', () => handleMainlandCellClick(x, y));
      mainlandMap.appendChild(cell);
    }
  }
}

function getMainlandBiome(x, y) {
  // Simple island biome layout for readability on the takeover grid.
  if (y <= Math.floor(MAINLAND_SIZE * 0.34) && x <= Math.floor(MAINLAND_SIZE * 0.52)) {
    return 'forest';
  }
  if (x >= Math.floor(MAINLAND_SIZE * 0.62) && y <= Math.floor(MAINLAND_SIZE * 0.62)) {
    return 'flats';
  }
  if (x <= Math.floor(MAINLAND_SIZE * 0.46) && y >= Math.floor(MAINLAND_SIZE * 0.52)) {
    return 'mergi';
  }
  return 'capital';
}

function getMainlandDetailClass(x, y) {
  // Deterministic tile clutter so the island feels less empty.
  const hash = ((x * 37) + (y * 53) + (x * y * 7)) % 11;
  if (hash <= 2) {
    return 'detail-crack';
  }
  if (hash <= 5) {
    return 'detail-rock';
  }
  if (hash <= 8) {
    return 'detail-speck';
  }
  return '';
}

function expandMainlandTerritory(steps = 1) {
  if (!state.colony || !state.colony.mainland) {
    return 0;
  }
  const mainland = state.colony.mainland;
  const occupied = new Set(mainland.territory.map((tile) => `${tile.x},${tile.y}`));
  const deltas = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];
  let gained = 0;
  for (let step = 0; step < steps; step += 1) {
    const candidates = [];
    for (const tile of mainland.territory) {
      for (const delta of deltas) {
        const nx = tile.x + delta.x;
        const ny = tile.y + delta.y;
        const key = `${nx},${ny}`;
        if (nx < 0 || nx >= MAINLAND_SIZE || ny < 0 || ny >= MAINLAND_SIZE || occupied.has(key)) {
          continue;
        }
        if (!candidates.some((item) => item.x === nx && item.y === ny)) {
          candidates.push({ x: nx, y: ny });
        }
      }
    }
    if (candidates.length === 0) {
      break;
    }
    const chosen = candidates[randInt(0, candidates.length - 1)];
    mainland.territory.push(chosen);
    occupied.add(`${chosen.x},${chosen.y}`);
    gained += 1;
    resolveMainlandClaim(chosen);
  }
  return gained;
}

function resolveMainlandClaim(tile) {
  if (!state.colony || !state.colony.mainland) {
    return;
  }
  const mainland = state.colony.mainland;
  const specials = mainland.specialTiles.filter((entry) => entry.x === tile.x && entry.y === tile.y && !entry.discovered);
  for (const special of specials) {
    special.discovered = true;
    if (special.type === 'copper') {
      state.colony.supplies += 65;
      special.cleared = true;
      addMainlandLog(`Copper cache captured at ${tile.x},${tile.y}. Supplies +65.`, 'good');
    } else if (special.type === 'hive') {
      const bugs = randInt(20, 56);
      special.bugsRemaining = bugs;
      addMainlandLog(`Nibblorax hive exposed at ${tile.x},${tile.y}. ${bugs} bugs released.`, 'bad');
    } else if (special.type === 'camp') {
      state.colony.frontierWar = true;
      addMainlandLog(`Native encampment reached at ${tile.x},${tile.y}. Regional raids intensify.`, 'bad');
    } else if (special.type === 'river') {
      addMainlandLog(`Purple river secured at ${tile.x},${tile.y}. Food output gets a fishing boost.`, 'good');
    } else if (special.type === 'burrow') {
      triggerMainlandBurrowCollapse(tile);
      addMainlandLog(`Worm burrow struck at ${tile.x},${tile.y}. Nearby sectors are unstable.`, 'bad');
    } else if (special.type === 'corruptor') {
      addMainlandLog(`Coral Corruptor found at ${tile.x},${tile.y}. It will spread each cycle.`, 'bad');
    }
  }
}

function getLandNeighbors(x, y) {
  const candidates = [
    { x: x + 1, y },
    { x: x - 1, y },
    { x, y: y + 1 },
    { x, y: y - 1 },
  ];
  return candidates.filter((tile) => (
    tile.x >= 0
    && tile.x < MAINLAND_SIZE
    && tile.y >= 0
    && tile.y < MAINLAND_SIZE
    && MAINLAND_MASK.has(`${tile.x},${tile.y}`)
  ));
}

function advanceCoralCorruptors() {
  if (!state.colony || !state.colony.mainland) {
    return;
  }
  const mainland = state.colony.mainland;
  const specials = mainland.specialTiles || [];
  const corruptors = specials.filter((tile) => tile.type === 'corruptor');
  if (corruptors.length === 0) {
    return;
  }

  let spreadCount = 0;
  let destroyedCount = 0;
  let blockedCount = 0;
  const occupiedSpecials = new Set(specials.map((tile) => `${tile.x},${tile.y}`));
  const spreadChance = Math.min(0.82, 0.48 + (getMineThreatBonusChance(state.colony) * 1.1));

  for (const node of corruptors) {
    // Corruptors inside stabilized anchor zones go dormant.
    if (isTileProtectedByGroundAnchor(node)) {
      blockedCount += 1;
      continue;
    }

    // Corruptor directly destroys any building on its tile.
    const localBuilding = (mainland.buildingTiles || []).find((tile) => tile.x === node.x && tile.y === node.y);
    if (localBuilding) {
      if (isTileProtectedByGroundAnchor(localBuilding)) {
        blockedCount += 1;
      } else {
        removeMainlandBuildingTile(localBuilding, 'coral corruptor');
        destroyedCount += 1;
      }
    }

    if (Math.random() < spreadChance) {
      const neighbors = getLandNeighbors(node.x, node.y)
        .filter((tile) => !occupiedSpecials.has(`${tile.x},${tile.y}`) && !isTileProtectedByGroundAnchor(tile));
      if (neighbors.length > 0) {
        const chosen = neighbors[randInt(0, neighbors.length - 1)];
        mainland.specialTiles.push({
          x: chosen.x,
          y: chosen.y,
          type: 'corruptor',
          discovered: false,
          cleared: false,
          bugsRemaining: 0,
        });
        occupiedSpecials.add(`${chosen.x},${chosen.y}`);
        spreadCount += 1;

        const hitBuilding = (mainland.buildingTiles || []).find((tile) => tile.x === chosen.x && tile.y === chosen.y);
        if (hitBuilding) {
          if (isTileProtectedByGroundAnchor(hitBuilding)) {
            blockedCount += 1;
          } else {
            removeMainlandBuildingTile(hitBuilding, 'coral corruptor spread');
            destroyedCount += 1;
          }
        }
      }
    }
  }

  if (spreadCount > 0) {
    playCoralScrapeSound();
    addMainlandLog(`Coral Corruptors spread to ${spreadCount} new square${spreadCount === 1 ? '' : 's'}.`, 'bad');
  }
  if (destroyedCount > 0) {
    playCoralScrapeSound();
    addMainlandLog(`Corruptor growth destroyed ${destroyedCount} building square${destroyedCount === 1 ? '' : 's'}.`, 'bad');
  }
  if (blockedCount > 0) {
    addColonyLog(`Ground Anchors stopped coral corruption ${blockedCount} time${blockedCount === 1 ? '' : 's'} this cycle.`, 'good');
  }
}

function resolveMainlandHivePressure() {
  if (!state.colony || !state.colony.mainland) {
    return;
  }
  const mainland = state.colony.mainland;
  const defense = getColonyDefense(state.colony);
  let defenseRemaining = defense;
  const hives = mainland.specialTiles.filter((tile) => tile.type === 'hive' && tile.discovered && !tile.cleared && tile.bugsRemaining > 0);
  for (const hive of hives) {
    if (defenseRemaining > 0) {
      const cleared = Math.min(defenseRemaining, hive.bugsRemaining);
      hive.bugsRemaining -= cleared;
      defenseRemaining -= cleared;
      if (cleared > 0) {
        addMainlandLog(`Defense cleared ${cleared} Nibbloraxes near ${hive.x},${hive.y}.`, 'good');
      }
      if (hive.bugsRemaining <= 0) {
        hive.cleared = true;
        addMainlandLog(`Hive at ${hive.x},${hive.y} cleared.`, 'good');
      }
    }
    if (hive.bugsRemaining > 0) {
      state.colony.food = Math.max(0, state.colony.food - hive.bugsRemaining);
      playNibbloraxMunchSound();
      addMainlandLog(`Hive ${hive.x},${hive.y} still active. Food -${hive.bugsRemaining}.`, 'bad');
    }
  }
}

function getMainlandColonyCount() {
  const empire = getEmpireColonies(state.colony);
  const regions = new Set();
  for (const entry of empire) {
    if (entry && REGION_DATA[entry.region]) {
      regions.add(entry.region);
    }
  }
  return Math.max(1, regions.size);
}

function advanceMainlandCycle() {
  if (!state.colony || !state.colony.mainland || !state.colony.mainland.unlocked) {
    return;
  }
  const mainland = state.colony.mainland;
  mainland.active = true;
  mainland.cycle += 1;
  mainland.actionsLeft = getMainlandColonyCount() * 4;

  addMainlandLog('Mainland cycle advanced. Build to claim new squares.', '');
  advanceCoralCorruptors();

  resolveMainlandHivePressure();
  if (Math.random() < 0.42) {
    const raid = randInt(0, Math.max(0, getAttackRollCapDefense(state.colony) * 2));
    if (getColonyDefense(state.colony) < raid) {
      const loss = Math.max(6, raid - getColonyDefense(state.colony));
      shiftEmpireStability(-loss, 'mainland raids');
      addMainlandLog(`Mainland raids hit with ${raid} force.`, 'bad');
      if (Math.random() < 0.5) {
        destroyRandomMainlandBuilding('raiders');
      }
    } else {
      addMainlandLog(`Mainland raid (force ${raid}) was repelled.`, 'good');
    }
  }
  if (Math.random() < 0.34) {
    const supplyLoss = randInt(10, 28);
    state.colony.supplies = Math.max(0, state.colony.supplies - supplyLoss);
    addMainlandLog(`Mainland hazards consumed ${supplyLoss} supplies.`, 'bad');
    if (Math.random() < 0.35) {
      destroyRandomMainlandBuilding('mainland hazards');
    }
  }

  storeColony();
  syncColonyUi();
  syncIslandTakeoverUi();
}

function skipMainlandCycle() {
  if (!state.colony || !state.colony.mainland || !state.colony.mainland.unlocked) {
    return;
  }
  state.colony.mainland.active = true;
  state.colony.mainland.actionsLeft = 0;
  addMainlandLog('Turn skipped. No build actions used this cycle.', '');
  advanceMainlandCycle();
}

function getNearbyMarketStall() {
  const px = state.marketPos.x;
  const py = state.marketPos.y;
  let best = null;
  let bestDist = Infinity;
  for (const stall of CAPITAL_MARKET_STALLS) {
    const cx = stall.x;
    const cy = stall.y;
    const dist = Math.hypot(px - cx, py - cy);
    if (dist < 52 && dist < bestDist) {
      best = stall;
      bestDist = dist;
    }
  }
  return best;
}

function attemptMarketTrade(stall) {
  if (!state.colony || !state.colony.active || !stall) {
    return;
  }
  if (state.points < stall.cost) {
    state.marketMessage = `Not enough points for ${stall.name}. Need ${stall.cost}.`;
    syncMarketUi();
    return;
  }

  state.points -= stall.cost;
  if (stall.id === 'rations') {
    state.colony.food += 60;
  } else if (stall.id === 'supplies') {
    state.colony.supplies += 50;
  } else if (stall.id === 'fuel') {
    state.colony.plutonium += 30;
  } else if (stall.id === 'troops') {
    state.colony.buildings.troops += 5;
  } else if (stall.id === 'stability') {
    state.colony.stability = Math.min(100, state.colony.stability + 10);
  }
  state.marketMessage = `Traded ${stall.cost} points at ${stall.name}. ${stall.desc}.`;
  playTradeChingSound();
  addColonyLog(`Traded ${stall.cost} points at ${stall.name}. ${stall.desc}.`, 'good');
  storePoints();
  storeColony();
  syncHud();
  syncColonyUi();
  syncMarketUi();
}

function syncMarketUi() {
  if (!state.marketOpen) {
    return;
  }
  marketPointsValue.textContent = String(state.points);
  const nearby = getNearbyMarketStall();
  if (nearby && state.marketTouchStallId !== nearby.id) {
    state.marketTouchStallId = nearby.id;
    playNativeRaspSound();
  } else if (!nearby) {
    state.marketTouchStallId = '';
  }
  const lines = [
    state.marketMessage,
    nearby
      ? `Nearby: ${nearby.name} (${nearby.desc}) for ${nearby.cost} points. Press E to trade.`
      : 'No stall nearby. Move closer to a market tent.',
  ];
  marketNotice.innerHTML = '';
  for (const line of lines) {
    const p = document.createElement('p');
    p.className = 'logEntry';
    p.textContent = line;
    marketNotice.appendChild(p);
  }
  drawCapitalMarket();
}

function drawCapitalMarket() {
  if (!state.marketOpen) {
    return;
  }
  const w = marketCanvas.width;
  const h = marketCanvas.height;
  marketCtx.clearRect(0, 0, w, h);

  // Sky and horizon
  const skyGrad = marketCtx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#0f1a2d');
  skyGrad.addColorStop(0.45, '#1d2d47');
  skyGrad.addColorStop(1, '#281d2d');
  marketCtx.fillStyle = skyGrad;
  marketCtx.fillRect(0, 0, w, h);

  // Glowcore moon
  marketCtx.fillStyle = '#a9ff9f';
  marketCtx.beginPath();
  marketCtx.arc(130, 90, 34, 0, Math.PI * 2);
  marketCtx.fill();
  marketCtx.fillStyle = 'rgba(169,255,159,0.18)';
  marketCtx.beginPath();
  marketCtx.arc(130, 90, 54, 0, Math.PI * 2);
  marketCtx.fill();

  // Distant ridges
  marketCtx.fillStyle = '#2b3550';
  marketCtx.beginPath();
  marketCtx.moveTo(0, 240);
  marketCtx.lineTo(80, 185);
  marketCtx.lineTo(180, 228);
  marketCtx.lineTo(320, 170);
  marketCtx.lineTo(470, 220);
  marketCtx.lineTo(610, 180);
  marketCtx.lineTo(760, 230);
  marketCtx.lineTo(880, 190);
  marketCtx.lineTo(960, 240);
  marketCtx.lineTo(960, 320);
  marketCtx.lineTo(0, 320);
  marketCtx.closePath();
  marketCtx.fill();

  // Market ground
  const groundGrad = marketCtx.createLinearGradient(0, 250, 0, h);
  groundGrad.addColorStop(0, '#3a2d2f');
  groundGrad.addColorStop(1, '#1d161f');
  marketCtx.fillStyle = groundGrad;
  marketCtx.fillRect(0, 250, w, h - 250);

  // Main trading lane
  marketCtx.fillStyle = '#6f5b45';
  marketCtx.fillRect(40, 278, w - 80, 116);
  marketCtx.fillStyle = 'rgba(255, 240, 190, 0.12)';
  for (let x = 60; x < w - 60; x += 64) {
    marketCtx.fillRect(x, 332, 28, 6);
  }

  // Left-side ruins
  marketCtx.fillStyle = '#3c4255';
  marketCtx.fillRect(52, 210, 46, 74);
  marketCtx.fillRect(106, 228, 28, 56);
  marketCtx.fillStyle = '#6de57e';
  marketCtx.fillRect(62, 224, 8, 10);
  marketCtx.fillRect(118, 242, 6, 8);

  for (const stall of CAPITAL_MARKET_STALLS) {
    // Shadow + support poles so stalls feel planted to ground
    marketCtx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    marketCtx.fillRect(stall.x - 30, stall.y + 30, 60, 8);
    marketCtx.fillStyle = '#2b2330';
    marketCtx.fillRect(stall.x - 30, stall.y + 28, 5, 34);
    marketCtx.fillRect(stall.x + 25, stall.y + 28, 5, 34);

    // Stall body and canopy
    marketCtx.fillStyle = '#4e2c63';
    marketCtx.fillRect(stall.x - 44, stall.y - 26, 88, 54);
    marketCtx.fillStyle = '#8ef58d';
    marketCtx.fillRect(stall.x - 48, stall.y - 40, 96, 14);
    marketCtx.fillStyle = '#22142c';
    marketCtx.fillRect(stall.x - 44, stall.y - 12, 88, 6);

    // Lantern pixels
    marketCtx.fillStyle = '#ffe79b';
    marketCtx.fillRect(stall.x - 38, stall.y - 18, 4, 4);
    marketCtx.fillRect(stall.x + 34, stall.y - 18, 4, 4);

    // Stall sign text (directly on the canopy)
    const shortName = stall.name.length > 11 ? `${stall.name.slice(0, 11)}.` : stall.name;
    marketCtx.textAlign = 'center';
    marketCtx.textBaseline = 'middle';
    marketCtx.font = '10px Trebuchet MS';
    marketCtx.fillStyle = '#1a2226';
    marketCtx.fillText(shortName, stall.x, stall.y - 33);

    // Cost badge attached to the stall
    marketCtx.fillStyle = '#161b2a';
    marketCtx.fillRect(stall.x + 24, stall.y - 22, 18, 12);
    marketCtx.strokeStyle = '#95a7c7';
    marketCtx.strokeRect(stall.x + 24.5, stall.y - 21.5, 17, 11);
    marketCtx.font = '9px Trebuchet MS';
    marketCtx.fillStyle = '#e6efff';
    marketCtx.fillText(String(stall.cost), stall.x + 33, stall.y - 16);
    marketCtx.textAlign = 'start';
    marketCtx.textBaseline = 'alphabetic';
  }

  // Player crawler marker
  marketCtx.fillStyle = '#f4d88c';
  marketCtx.fillRect(state.marketPos.x - 9, state.marketPos.y - 9, 18, 18);
  marketCtx.fillStyle = '#433824';
  marketCtx.fillRect(state.marketPos.x - 9, state.marketPos.y + 7, 18, 4);
  marketCtx.strokeStyle = '#23180f';
  marketCtx.strokeRect(state.marketPos.x - 9, state.marketPos.y - 9, 18, 18);
}

function handleCapitalMarketKeydown(event) {
  if (!state.marketOpen) {
    return;
  }
  const key = event.key.toLowerCase();
  if (key === 'escape') {
    event.preventDefault();
    closeCapitalMarket();
    return;
  }

  const step = 18;
  let moved = false;
  if (key === 'arrowup' || key === 'w') {
    state.marketPos.y = Math.max(26, state.marketPos.y - step);
    moved = true;
  } else if (key === 'arrowdown' || key === 's') {
    state.marketPos.y = Math.min(marketCanvas.height - 26, state.marketPos.y + step);
    moved = true;
  } else if (key === 'arrowleft' || key === 'a') {
    state.marketPos.x = Math.max(26, state.marketPos.x - step);
    moved = true;
  } else if (key === 'arrowright' || key === 'd') {
    state.marketPos.x = Math.min(marketCanvas.width - 26, state.marketPos.x + step);
    moved = true;
  } else if (key === 'e') {
    event.preventDefault();
    const nearby = getNearbyMarketStall();
    if (nearby) {
      attemptMarketTrade(nearby);
    } else {
      state.marketMessage = 'No stall in range. Move closer before trading.';
      syncMarketUi();
    }
    return;
  }

  if (moved) {
    event.preventDefault();
    syncMarketUi();
  }
}

function syncTerritoryMap() {
  if (!state.colony) {
    territoryMap.innerHTML = '';
    return;
  }

  const regionSet = REGION_MASKS[state.colony.region] || new Set();
  const core = state.colony.core || getRegionCoreTile(state.colony.region);
  const claimed = new Set(state.colony.territory.map((tile) => `${tile.x},${tile.y}`));
  const specials = new Map((state.colony.specialTiles || []).map((tile) => [`${tile.x},${tile.y}`, tile]));
  territoryMap.innerHTML = '';

  for (let y = 0; y < MAP_SIZE; y += 1) {
    for (let x = 0; x < MAP_SIZE; x += 1) {
      const cell = document.createElement('div');
      cell.className = 'territoryCell';
      const key = `${x},${y}`;
      if (regionSet.has(key)) {
        cell.classList.add('region');
      }
      if (claimed.has(key)) {
        cell.classList.add('claimed');
      }
      const special = specials.get(key);
      if (special) {
        if (special.type === 'copper') {
          cell.classList.add('copper');
        } else if (special.type === 'hive') {
          cell.classList.add('hive');
        } else if (special.type === 'camp') {
          cell.classList.add('camp');
        } else if (special.type === 'river') {
          cell.classList.add('river');
        } else if (special.type === 'burrow') {
          cell.classList.add('burrow');
        }
        if (special.cleared) {
          cell.classList.add('cleared');
        }
      }
      if (x === core.x && y === core.y) {
        cell.classList.add('core');
      }
      territoryMap.appendChild(cell);
    }
  }
}

function expandColonyTerritory() {
  if (!state.colony) {
    return false;
  }

  const regionSet = REGION_MASKS[state.colony.region];
  if (!state.colony.frontierUnlocked && isRegionFullyClaimed(state.colony)) {
    state.colony.frontierUnlocked = true;
    const newFrontierSpecials = buildFrontierSpecialTiles(state.colony.region, state.colony.specialTiles || []);
    state.colony.specialTiles = [...(state.colony.specialTiles || []), ...newFrontierSpecials];
    addColonyLog('Regional borders are secured. Frontier expansion beyond the zone is now unlocked.', 'good');
  }
  const enforceRegionBoundary = !state.colony.frontierUnlocked;
  const occupied = new Set(state.colony.territory.map((tile) => `${tile.x},${tile.y}`));
  const candidates = [];
  const deltas = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];

  for (const tile of state.colony.territory) {
    for (const delta of deltas) {
      const nx = tile.x + delta.x;
      const ny = tile.y + delta.y;
      const key = `${nx},${ny}`;
      if (nx < 0 || nx >= MAP_SIZE || ny < 0 || ny >= MAP_SIZE || occupied.has(key)) {
        continue;
      }
      if (enforceRegionBoundary && regionSet && !regionSet.has(key)) {
        continue;
      }
      if (!candidates.some((item) => item.x === nx && item.y === ny)) {
        candidates.push({ x: nx, y: ny });
      }
    }
  }

  if (candidates.length === 0) {
    const boundarySet = enforceRegionBoundary && regionSet
      ? [...regionSet]
      : Array.from({ length: MAP_SIZE * MAP_SIZE }, (_, idx) => `${idx % MAP_SIZE},${Math.floor(idx / MAP_SIZE)}`);
    if (boundarySet.length > 0) {
      const remaining = boundarySet
        .filter((key) => !occupied.has(key))
        .map((key) => {
          const [x, y] = key.split(',').map(Number);
          return { x, y };
        });

      if (remaining.length > 0) {
        remaining.sort((a, b) => {
          const distanceA = Math.min(...state.colony.territory.map((tile) => Math.abs(tile.x - a.x) + Math.abs(tile.y - a.y)));
          const distanceB = Math.min(...state.colony.territory.map((tile) => Math.abs(tile.x - b.x) + Math.abs(tile.y - b.y)));
          return distanceA - distanceB;
        });
        const chosen = remaining[0];
        state.colony.territory.push(chosen);
        addColonyLog(`Survey teams reconnected the colony frontier at ${chosen.x},${chosen.y}.`, 'good');
        resolveTerritoryClaim(chosen);
        return true;
      }
    }
    return false;
  }

  const chosen = candidates[randInt(0, candidates.length - 1)];
  state.colony.territory.push(chosen);
  addColonyLog(`Colony borders expanded to ${chosen.x},${chosen.y}.`, 'good');
  resolveTerritoryClaim(chosen);
  return true;
}

function buildSpecialTilesForRegion(regionId, core = getRegionCoreTile(regionId)) {
  const regionSet = REGION_MASKS[regionId];
  if (!regionSet) {
    return [];
  }

  const tiles = [...regionSet].map((key) => {
    const [x, y] = key.split(',').map(Number);
    return { x, y };
  }).filter((tile) => !(tile.x === core.x && tile.y === core.y));

  const pick = (blocked = new Set()) => {
    const pool = tiles.filter((tile) => !blocked.has(`${tile.x},${tile.y}`));
    return pool.length > 0 ? pool[randInt(0, pool.length - 1)] : null;
  };

  const used = new Set();
  const specials = [];

  const copper = pick(used);
  if (copper) {
    specials.push({ x: copper.x, y: copper.y, type: 'copper', cleared: false, discovered: false });
    used.add(`${copper.x},${copper.y}`);
  }

  const hiveStart = pick(used);
  if (hiveStart) {
    specials.push({ x: hiveStart.x, y: hiveStart.y, type: 'hive', cleared: false, discovered: false, bugsRemaining: 0 });
    used.add(`${hiveStart.x},${hiveStart.y}`);

    const hiveNeighbors = [
      { x: hiveStart.x + 1, y: hiveStart.y },
      { x: hiveStart.x - 1, y: hiveStart.y },
      { x: hiveStart.x, y: hiveStart.y + 1 },
      { x: hiveStart.x, y: hiveStart.y - 1 },
    ].filter((tile) => regionSet.has(`${tile.x},${tile.y}`) && !used.has(`${tile.x},${tile.y}`));

    if (hiveNeighbors.length > 0) {
      const extra = hiveNeighbors[randInt(0, hiveNeighbors.length - 1)];
      specials.push({ x: extra.x, y: extra.y, type: 'hive', cleared: false, discovered: false, bugsRemaining: 0 });
    }
  }

  return specials;
}

function buildFrontierSpecialTiles(regionId, existingSpecialTiles = []) {
  const regionSet = REGION_MASKS[regionId] || new Set();
  const used = new Set(existingSpecialTiles.map((tile) => `${tile.x},${tile.y}`));
  const frontierTiles = [];
  for (let y = 0; y < MAP_SIZE; y += 1) {
    for (let x = 0; x < MAP_SIZE; x += 1) {
      const key = `${x},${y}`;
      if (!regionSet.has(key) && !used.has(key)) {
        frontierTiles.push({ x, y });
      }
    }
  }
  if (frontierTiles.length === 0) {
    return [];
  }

  const pickOne = (blocked = new Set()) => {
    const pool = frontierTiles.filter((tile) => !blocked.has(`${tile.x},${tile.y}`));
    return pool.length > 0 ? pool[randInt(0, pool.length - 1)] : null;
  };

  const blocked = new Set();
  const specials = [];
  const pushTile = (tile, type) => {
    if (!tile) {
      return;
    }
    blocked.add(`${tile.x},${tile.y}`);
    specials.push({ x: tile.x, y: tile.y, type, cleared: false, discovered: false, bugsRemaining: 0 });
  };

  // Frontier has more danger and more resources.
  for (let i = 0; i < 3; i += 1) {
    pushTile(pickOne(blocked), 'copper');
  }
  for (let i = 0; i < 4; i += 1) {
    pushTile(pickOne(blocked), 'hive');
  }
  for (let i = 0; i < 3; i += 1) {
    pushTile(pickOne(blocked), 'camp');
  }
  for (let i = 0; i < 5; i += 1) {
    pushTile(pickOne(blocked), 'river');
  }
  for (let i = 0; i < 2; i += 1) {
    pushTile(pickOne(blocked), 'burrow');
  }

  return specials;
}

function triggerWormBurrowCollapse(centerTile) {
  if (!state.colony) {
    return;
  }

  const defense = getColonyDefense(state.colony);
  if (defense > 75) {
    addColonyLog(`Worm burrow at ${centerTile.x},${centerTile.y} was contained. Defense held above 75.`, 'good');
    return;
  }

  const core = state.colony.core || getRegionCoreTile(state.colony.region);
  const before = state.colony.territory.length;
  state.colony.territory = state.colony.territory.filter((tile) => {
    if (tile.x === core.x && tile.y === core.y) {
      return true;
    }
    const inRange = Math.abs(tile.x - centerTile.x) <= 2 && Math.abs(tile.y - centerTile.y) <= 2;
    return !inRange;
  });
  const destroyed = Math.max(0, before - state.colony.territory.length);
  addColonyLog(`A worm erupted from burrow ${centerTile.x},${centerTile.y}. Defense below 75 caused ${destroyed} nearby squares to collapse.`, 'bad');
}

function applyCapturedCampTroops() {
  if (!state.colony || !Array.isArray(state.colony.specialTiles)) {
    return;
  }

  const capturedCamps = state.colony.specialTiles.filter((tile) => tile.type === 'camp' && tile.discovered);
  if (capturedCamps.length === 0) {
    return;
  }

  let gained = 0;
  for (let i = 0; i < capturedCamps.length; i += 1) {
    gained += randInt(1, 5);
  }
  state.colony.buildings.troops += gained;
  addColonyLog(`Captured native camps recruited ${gained} troops this cycle.`, 'good');
}

function resolveTerritoryClaim(tile) {
  if (!state.colony || !Array.isArray(state.colony.specialTiles)) {
    return;
  }

  const matches = state.colony.specialTiles.filter((entry) => entry.x === tile.x && entry.y === tile.y && !entry.discovered);
  for (const special of matches) {
    special.discovered = true;
    if (special.type === 'copper') {
      state.colony.supplies += 35;
      special.cleared = true;
      addColonyLog(`Copper Cache uncovered at ${tile.x},${tile.y}. Supplies +35.`, 'good');
    } else if (special.type === 'hive') {
      const bugs = randInt(12, 32);
      special.bugsRemaining = bugs;
      addColonyLog(`Nibblorax Hive uncovered at ${tile.x},${tile.y}. ${bugs} bugs poured into the colony lanes.`, 'bad');
    } else if (special.type === 'camp') {
      state.colony.frontierWar = true;
      addColonyLog(`Native encampment uncovered at ${tile.x},${tile.y}. Frontier war has begun and raids will intensify.`, 'bad');
    } else if (special.type === 'river') {
      addColonyLog(`A fish-rich river was claimed at ${tile.x},${tile.y}. Colony food output is now boosted.`, 'good');
    } else if (special.type === 'burrow') {
      triggerWormBurrowCollapse(tile);
    }
  }
}

function resolveHiveInfestations(cycleIssues) {
  if (!state.colony || !Array.isArray(state.colony.specialTiles)) {
    return;
  }

  const defense = getColonyDefense(state.colony);
  const activeHives = state.colony.specialTiles.filter((tile) => tile.type === 'hive' && tile.discovered && !tile.cleared && tile.bugsRemaining > 0);
  if (activeHives.length === 0) {
    return;
  }

  let defenseRemaining = defense;
  for (const hive of activeHives) {
    if (defenseRemaining <= 0) {
      break;
    }
    const cleared = Math.min(defenseRemaining, hive.bugsRemaining);
    hive.bugsRemaining -= cleared;
    defenseRemaining -= cleared;
    addColonyLog(`Defense robots cleared ${cleared} Nibbloraxes from hive ${hive.x},${hive.y}.`, 'good');
    if (hive.bugsRemaining <= 0) {
      hive.cleared = true;
      addColonyLog(`Nibblorax Hive at ${hive.x},${hive.y} has been cleared.`, 'good');
    }
  }

  for (const hive of activeHives) {
    if (hive.bugsRemaining > 0) {
      const foodLoss = hive.bugsRemaining;
      state.colony.food = Math.max(0, state.colony.food - foodLoss);
      playNibbloraxMunchSound();
      addColonyLog(`Hive ${hive.x},${hive.y} still has ${hive.bugsRemaining} Nibbloraxes. Food -${foodLoss}.`, 'bad');
      if (!cycleIssues.includes('Nibblorax hive')) {
        cycleIssues.push('Nibblorax hive');
      }
    }
  }
}

function advanceColonyCycle() {
  if (!state.colony || !state.colony.active) {
    return;
  }
  if (state.colony.stability <= 0) {
    addColonyLog('Stability is at 0%. Restart colony to continue.', 'bad');
    syncColonyUi();
    return;
  }

  let colony = state.colony;
  let region = REGION_DATA[colony.region];
  const cycleIssues = [];
  colony.cycle += 1;
  const explorerArrived = advanceExplorerProgress();
  if (explorerArrived) {
    state.points += region.cyclePoints;
    storePoints();
    syncHud();
    storeColony();
    syncColonizeUi();
    syncColonyUi();
    if (state.colonyMapOpen) {
      syncTerritoryMap();
    }
    return;
  }
  colony = state.colony;
  region = REGION_DATA[colony.region];
  const buildingBoost = getBuildingBoost(colony);
  const expansionSteps = 1 + colony.buildings.businessHouses;
  for (let i = 0; i < expansionSteps * buildingBoost; i += 1) {
    if (!expandColonyTerritory()) {
      break;
    }
  }

  const mineOutput = Math.round(colony.buildings.mines * 8 * region.mineMult * buildingBoost);
  const mineSuppliesProduced = Math.round(colony.buildings.mines * 2 * region.mineMult * buildingBoost);
  colony.plutonium += mineOutput;
  colony.supplies += mineSuppliesProduced;
  addColonyLog(`Mines brought in ${mineOutput} plutonium.`, 'good');
  if (mineSuppliesProduced > 0) {
    addColonyLog(`Mines also pulled up ${mineSuppliesProduced} building supplies.`, 'good');
  }

  const plutoniumForPower = Math.min(colony.buildings.powerPlants * 2 * buildingBoost, colony.plutonium);
  colony.plutonium -= plutoniumForPower;
  const powerProduced = plutoniumForPower * 10;
  colony.power = powerProduced;

  let cropDecayPenalty = 0;
  const decayChance = Math.min(0.42, 0.06 + (colony.plutonium / 850) + (colony.buildings.mines / 1800));
  if (Math.random() < decayChance) {
    const plutoniumLoss = Math.max(8, Math.round(colony.plutonium * randFloat(0.08, 0.22)));
    colony.plutonium = Math.max(0, colony.plutonium - plutoniumLoss);
    cropDecayPenalty = randFloat(0.25, 0.6);
    const cropLoss = Math.max(5, Math.round(colony.buildings.farms * randInt(3, 9)));
    colony.food = Math.max(0, colony.food - cropLoss);
    addColonyLog(`Plutonium Decay event: reactor rot burned ${plutoniumLoss} plutonium and ruined ${cropLoss} crop reserves.`, 'bad');
    cycleIssues.push('plutonium decay');
  }

  const passiveDemand = 2 + colony.buildings.storageHouses * 2;
  const farmDemand = colony.buildings.farms * 4;
  const factoryDemand = colony.buildings.factories * 6;
  const barracksDemand = colony.buildings.barracks * 5;
  const demand = passiveDemand + farmDemand + factoryDemand + barracksDemand;
  colony.powerDemand = demand;
  const powerRatio = demand > 0 ? Math.min(1, powerProduced / demand) : 1;

  if (powerRatio < 1) {
    const loss = Math.max(3, Math.ceil((1 - powerRatio) * 10));
    colony.stability = Math.max(0, colony.stability - loss);
    addColonyLog(`Power shortage hit the colony. Stability -${loss}.`, 'bad');
    cycleIssues.push('power shortage');
  }

  const foodProduced = Math.round(colony.buildings.farms * 18 * region.foodMult * powerRatio * buildingBoost);
  const hasRiverAccess = Array.isArray(colony.specialTiles)
    && colony.specialTiles.some((tile) => tile.type === 'river' && colony.territory.some((t) => t.x === tile.x && t.y === tile.y));
  const riverFoodProduced = hasRiverAccess ? foodProduced * 2 : foodProduced;
  const powerPlantPenalty = Math.min(0.45, colony.buildings.powerPlants * 0.004);
  const finalFoodProduced = Math.max(0, Math.round(riverFoodProduced * (1 - powerPlantPenalty) * (1 - cropDecayPenalty)));
  const suppliesProduced = Math.round(colony.buildings.factories * 10 * region.factoryMult * powerRatio * buildingBoost);
  colony.food += finalFoodProduced;
  colony.supplies += suppliesProduced;
  if (finalFoodProduced > 0) {
    if (hasRiverAccess) {
      addColonyLog(`Farms and river fishing produced ${finalFoodProduced} food.`, 'good');
    } else {
      addColonyLog(`Farms produced ${finalFoodProduced} food.`, 'good');
    }
    if (powerPlantPenalty > 0) {
      addColonyLog(`Power-plant heat haze reduced crop yield by ${Math.round(powerPlantPenalty * 100)}%.`, 'bad');
    }
    if (cropDecayPenalty > 0) {
      addColonyLog(`Plutonium Decay reduced crop yield by ${Math.round(cropDecayPenalty * 100)}% this cycle.`, 'bad');
    }
  }
  if (suppliesProduced > 0) {
    addColonyLog(`Factories produced ${suppliesProduced} building supplies.`, 'good');
  }
  applySupportColonyEffects();
  applyCapturedCampTroops();
  advanceTempleSearch();

  if (region.id === 'mergi' && colony.buildings.groundAnchors > 0) {
    const anchorBoost = colony.buildings.groundAnchors * 3 * buildingBoost;
    colony.stability = Math.min(100, colony.stability + anchorBoost);
    addColonyLog(`Ground anchors steadied the sinking fields. Stability +${anchorBoost}.`, 'good');
  }

  const territoryUse = colony.territory.length;
  const foodUse = 14 + colony.buildings.farms * 2 + colony.buildings.factories * 2 + colony.buildings.barracks * 4 + territoryUse;
  const supplyUse = region.supplyUpkeep + territoryUse + colony.buildings.barracks * 2;
  colony.food -= foodUse;
  colony.supplies -= supplyUse;
  addColonyLog(`Colony upkeep consumed ${foodUse} food and ${supplyUse} supplies. Territory: ${territoryUse} squares, +${territoryUse} food, +${territoryUse} supplies.`);

  resolveHiveInfestations(cycleIssues);
  resolveRegionCycleEvents(region, cycleIssues);

  if (colony.buildings.groundAnchors > 0) {
    const anchorMaintenance = colony.buildings.groundAnchors;
    if (colony.supplies >= anchorMaintenance) {
      colony.supplies -= anchorMaintenance;
      addColonyLog(`Ground Anchor maintenance consumed ${anchorMaintenance} supplies.`, '');
    } else {
      const missing = anchorMaintenance - colony.supplies;
      colony.supplies = 0;
      const decay = Math.min(colony.buildings.groundAnchors, Math.max(1, Math.ceil(missing / 4)));
      colony.buildings.groundAnchors -= decay;
      addColonyLog(`Ground Anchor maintenance failed. ${decay} anchor(s) decayed.`, 'bad');
      if (colony.mainland && Array.isArray(colony.mainland.buildingTiles) && colony.mainland.buildingTiles.length > 0) {
        let removed = 0;
        while (removed < decay) {
          const anchors = colony.mainland.buildingTiles.filter((tile) => tile.kind === 'groundAnchors');
          if (anchors.length === 0) {
            break;
          }
          const pick = anchors[randInt(0, anchors.length - 1)];
          removeMainlandBuildingTile(pick, 'anchor decay');
          removed += 1;
        }
      }
      cycleIssues.push('anchor maintenance failure');
    }
  }

  const caps = getColonyCaps(colony);
  colony.food = Math.min(caps.food, colony.food);
  colony.supplies = Math.min(caps.supplies, colony.supplies);
  colony.plutonium = Math.min(caps.plutonium, colony.plutonium);

  if (colony.food < 0) {
    colony.stability = Math.max(0, colony.stability - 18);
    addColonyLog('Food collapsed below zero. Colonists started ration panic.', 'bad');
    colony.food = 0;
    cycleIssues.push('food shortage');
  }

  if (colony.supplies < 0) {
    colony.stability = Math.max(0, colony.stability - 10);
    addColonyLog('Building supplies ran dry. Infrastructure is slipping.', 'bad');
    colony.supplies = 0;
    cycleIssues.push('supply shortage');
  }

  const recovered = recoverColonyStability(cycleIssues);
  if (recovered > 0) {
    addColonyLog(`Stability recovered by ${recovered}. The colony is settling down.`, 'good');
  }

  if (colony.stability <= 0) {
    colony.stability = 0;
    if (colony.mainland && colony.mainland.active) {
      addColonyLog('Mainland protocol failure: stability collapsed during Island Takeover. This colony is lost.', 'bad');
      state.colony = null;
      storeColony();
      syncColonizeUi();
      showSetup();
      return;
    }
    addColonyLog('Colony stability has broken. Rebuilding this settlement will take another campaign.', 'bad');
  }

  state.points += region.cyclePoints;
  storePoints();
  colony.lastInstabilityCauses = cycleIssues;
  unlockExplorerIfReady();
  ensureIslandTakeoverUnlocked();
  syncHud();
  storeColony();
  syncColonizeUi();
  syncColonyUi();
  if (state.colonyMapOpen) {
    syncTerritoryMap();
  }
}

function resolveRegionCycleEvents(region, cycleIssues) {
  const colony = state.colony;
  const defense = getColonyDefense(colony);
  const attackCapDefense = getAttackRollCapDefense(colony);
  const mineThreatBonus = getMineThreatBonusChance(colony);

  const raidChance = region.id !== 'capital' ? (colony.frontierWar ? 0.56 : 0.28) : 0;
  if (region.id !== 'capital' && Math.random() < raidChance) {
    const tribeTroops = randInt(0, Math.max(0, attackCapDefense * 2));
    if (tribeTroops > 0) {
      if (defense >= tribeTroops) {
        playNativeRaspSound();
        addColonyLog(`A roaming native tribe tested the perimeter with ${tribeTroops} troops. Barracks held them off.`, 'good');
      } else {
        const shortfall = tribeTroops - defense;
        const loss = Math.max(4, shortfall * 2);
        colony.stability = Math.max(0, colony.stability - loss);
        playNativeRaspSound();
        addColonyLog(`A roaming native tribe attacked with ${tribeTroops} troops. Defense was short by ${shortfall}. Stability -${loss}.`, 'bad');
        cycleIssues.push('tribal raid');
      }
    }
  }

  if (region.id === 'forest' && Math.random() < 0.38) {
    const loss = randInt(8, 16);
    colony.supplies = Math.max(0, colony.supplies - loss);
    playCoralScrapeSound();
    addColonyLog(`Glowcore coral overgrowth chewed through ${loss} supplies.`, 'bad');
    cycleIssues.push('coral overgrowth');
  }

  if ((region.id === 'forest' || region.id === 'capital') && Math.random() < 0.24) {
    const coralAttack = randInt(0, Math.max(0, Math.floor(attackCapDefense * 1.5)));
    if (coralAttack > 0) {
      if (defense >= coralAttack) {
        playCoralScrapeSound();
        addColonyLog(`A coral surge struck with ${coralAttack} force. Defensive walkers burned it back.`, 'good');
      } else {
        const shortfall = coralAttack - defense;
        const loss = Math.max(8, shortfall * 4);
        colony.food = Math.max(0, colony.food - loss);
        playCoralScrapeSound();
        addColonyLog(`Glowing coral attacked with ${coralAttack} force. Defense was short by ${shortfall}. Food -${loss}.`, 'bad');
        cycleIssues.push('coral attack');
      }
    }
  }

  if (region.id === 'flats' && Math.random() < (0.26 + mineThreatBonus)) {
    if (defense > 0 && Math.random() < 0.7) {
      colony.stability = Math.max(0, colony.stability - 4);
      playWormRoarSound();
      addColonyLog('Barracks robots drove off wormsign before the flats broke open.', 'good');
      cycleIssues.push('worm pressure');
    } else {
      colony.stability = Math.max(0, colony.stability - 20);
      destroyRandomColonyBuilding();
      playWormRoarSound();
      addColonyLog('A worm surfaced near the mines and smashed part of the colony.', 'bad');
      cycleIssues.push('worm attack');
    }
  }
  if (region.id === 'flats' && Math.random() < (0.32 + mineThreatBonus)) {
    const eaten = randInt(12, 36);
    colony.supplies = Math.max(0, colony.supplies - eaten);
    playWormRoarSound();
    addColonyLog(`A worm tunnel opened under storage in the flats. Supplies -${eaten}.`, 'bad');
    cycleIssues.push('worm scavenging');
  }

  if (region.id === 'mergi') {
    const anchorShield = colony.buildings.groundAnchors * 3 * getBuildingBoost(colony);
    const sinkLoss = Math.max(0, randInt(10, 18) - anchorShield);
    colony.supplies = Math.max(0, colony.supplies - sinkLoss);
    const groundStabilityLoss = Math.max(0, 6 - Math.floor(anchorShield / 3));
    colony.stability = Math.max(0, colony.stability - groundStabilityLoss);
    if (sinkLoss > 0 || groundStabilityLoss > 0) {
      addColonyLog(`Mergi ground reinforcement ate ${sinkLoss} supplies.`, 'bad');
      cycleIssues.push('unstable ground');
    } else {
      addColonyLog('Ground anchors held the Mergi earth in place this cycle.', 'good');
    }
    if (Math.random() < 0.4) {
      const foodLoss = randInt(20, 45);
      colony.food = Math.max(0, colony.food - foodLoss);
      playNibbloraxMunchSound();
      addColonyLog(`Nibbloraxes stripped ${foodLoss} food from the depots.`, 'bad');
      cycleIssues.push('Nibblorax infestation');
    }
    if (Math.random() < (0.35 + mineThreatBonus)) {
      const eaten = randInt(16, 44);
      colony.supplies = Math.max(0, colony.supplies - eaten);
      playWormRoarSound();
      addColonyLog(`A worm burrow devoured ${eaten} supplies in the Mergi sink fields.`, 'bad');
      cycleIssues.push('worm scavenging');
    }
    if (Math.random() < 0.33) {
      const duneForce = randInt(12, 28);
      const mitigated = Math.max(0, duneForce - Math.floor(anchorShield / 2));
      if (mitigated > 0) {
        const stabilityLoss = Math.max(5, Math.floor(mitigated / 2));
        colony.stability = Math.max(0, colony.stability - stabilityLoss);
        const supplyLoss = Math.max(6, mitigated);
        colony.supplies = Math.max(0, colony.supplies - supplyLoss);
        playSinkSound();
        addColonyLog(`Sinking Dunes rolled through the Mergi lanes. Supplies -${supplyLoss}, stability -${stabilityLoss}.`, 'bad');
        if (Math.random() < 0.4) {
          if (colony.mainland && colony.mainland.active && Array.isArray(colony.mainland.buildingTiles) && colony.mainland.buildingTiles.length > 0) {
            if (destroyRandomMainlandBuilding('Sinking Dunes')) {
              addColonyLog('A mainland building square was swallowed by the Sinking Dunes.', 'bad');
            } else {
              addColonyLog('Sinking Dunes hit, but Ground Anchor coverage kept mainland buildings safe.', 'good');
            }
          } else {
            destroyRandomColonyBuilding();
            addColonyLog('A building was swallowed by the Sinking Dunes.', 'bad');
          }
        }
        cycleIssues.push('sinking dunes');
      } else {
        addColonyLog('Sinking Dunes formed, but ground anchors held the line.', 'good');
      }
    }
    const supplyLoss = Math.max(0, randInt(8, 14) - Math.floor(anchorShield / 2));
    colony.supplies = Math.max(0, colony.supplies - supplyLoss);
    const collapseLoss = Math.max(0, 8 - Math.floor(anchorShield / 2));
    colony.stability = Math.max(0, colony.stability - collapseLoss);
    if (supplyLoss > 0 || collapseLoss > 0) {
      addColonyLog(`Sinking field supports failed. ${supplyLoss} more supplies were spent to stabilize them.`, 'bad');
      cycleIssues.push('sinking field collapse');
    } else {
      addColonyLog('Ground anchors kept the sinking fields from opening this cycle.', 'good');
    }
  }

  if (region.id === 'capital' && Math.random() < 0.55) {
    const gain = randInt(12, 26);
    colony.supplies += gain;
    state.points += 18;
    storePoints();
    playTradeChingSound();
    addColonyLog(`Native trade caravans delivered ${gain} supplies and 18 points.`, 'good');
  }
}

function recoverColonyStability(cycleIssues) {
  const colony = state.colony;
  if (!colony || colony.stability >= 100) {
    return 0;
  }

  const activeProblems = cycleIssues.length;
  const hadProblemsBefore = Array.isArray(colony.lastInstabilityCauses) && colony.lastInstabilityCauses.length > 0;
  const foodSafe = colony.food > 20;
  const supplySafe = colony.supplies > 20;
  const powerSafe = colony.power > 0;

  if (activeProblems === 0 && foodSafe && supplySafe && powerSafe) {
    const gain = hadProblemsBefore ? 6 : 3;
    colony.stability = Math.min(100, colony.stability + gain);
    return gain;
  }

  if (activeProblems <= 1 && foodSafe && supplySafe && powerSafe) {
    const gain = 2;
    colony.stability = Math.min(100, colony.stability + gain);
    return gain;
  }

  return 0;
}

function destroyRandomColonyBuilding() {
  const options = Object.entries(state.colony.buildings)
    .filter(([key, count]) => count > 0 && key !== 'storageHouses');
  if (options.length === 0) {
    return;
  }
  const [kind] = options[randInt(0, options.length - 1)];
  state.colony.buildings[kind] -= 1;
  addColonyLog(`${BUILDING_DATA[kind].label} lost.`, 'bad');
}

function renderNativeOffers() {
  traderOffers.innerHTML = '';
  traderSellOffers.innerHTML = '';

  for (const offer of state.traderOffers) {
    const card = document.createElement('article');
    card.className = 'traderOffer';

    const title = document.createElement('h3');
    title.textContent = offer.label;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = `${offer.description} Price: ${offer.price} points.`;
    card.appendChild(desc);

    const button = document.createElement('button');
    button.textContent = `Buy for ${offer.price}`;
    button.disabled = state.points < offer.price || state.gameOver;
    button.addEventListener('click', () => buyNativeOffer(offer.id));
    card.appendChild(button);

    traderOffers.appendChild(card);
  }

  if (state.traderOffers.length === 0) {
    const emptyBuy = document.createElement('article');
    emptyBuy.className = 'traderOffer';
    emptyBuy.innerHTML = '<p>No native gear left on this stop.</p>';
    traderOffers.appendChild(emptyBuy);
  }

  for (const offer of state.traderSellOffers) {
    const card = document.createElement('article');
    card.className = 'traderOffer';

    const title = document.createElement('h3');
    title.textContent = offer.label;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = `They will take 1 for ${offer.price} points. You have ${state.inventory[offer.inventoryKey]}.`;
    card.appendChild(desc);

    const button = document.createElement('button');
    button.textContent = `Sell for ${offer.price}`;
    button.disabled = state.inventory[offer.inventoryKey] <= 0 || state.gameOver;
    button.addEventListener('click', () => sellNativeOffer(offer.id));
    card.appendChild(button);

    traderSellOffers.appendChild(card);
  }

  if (state.traderSellOffers.length === 0) {
    const emptySell = document.createElement('article');
    emptySell.className = 'traderOffer';
    emptySell.innerHTML = '<p>You have nothing these traders want right now.</p>';
    traderSellOffers.appendChild(emptySell);
  }
}

function buyNativeOffer(offerId) {
  const offer = state.traderOffers.find((item) => item.id === offerId);
  if (!offer || state.points < offer.price || state.gameOver) {
    return;
  }

  state.points -= offer.price;
  storePoints();
  playTradeChingSound();

  const lawyerCatchesScam = Boolean(offer.scam) && state.lore.lawyerSummoned === true;
  const payoutMult = lawyerCatchesScam ? 2 : 1;
  if (lawyerCatchesScam) {
    triggerLawyerIntervention();
    offer.scam = false;
    state.points += LAWYER_INTERVENTION_POINTS;
    storePoints();
    addLog('SoMeThInG hApPeNeD', 'good');
  }

  if (offer.kind === 'foodCrate') {
    if (offer.scam) {
      addLog('The food crate was packed with black sand. Scam trade.', 'bad');
    } else {
      const gain = 50 * payoutMult;
      state.food += gain;
      addLog(`Bought Food Crate from the natives for ${offer.price} points. +${gain} food.`, 'good');
    }
  } else if (offer.scam) {
    state.inventory[offer.inventoryKey] += 1;
    state.fakeInventory[offer.inventoryKey] += 1;
    addLog(`The traders sell you a fake ${offer.label.toLowerCase()}.`, 'bad');
  } else {
    state.inventory[offer.inventoryKey] += payoutMult;
    addLog(`Bought ${offer.label} from the natives for ${offer.price} points. +${payoutMult}.`, 'good');
  }

  if (!lawyerCatchesScam) {
    triggerEventAnimation('natives', 56, { traded: true });
  }
  state.traderOffers = state.traderOffers.filter((item) => item.id !== offerId);
  if (state.traderOffers.length === 0) {
    closeNativeTrader();
    return;
  }

  renderNativeOffers();
  syncHud();
  syncInventoryUi();
}

function sellNativeOffer(offerId) {
  const offer = state.traderSellOffers.find((item) => item.id === offerId);
  if (!offer || state.gameOver || state.inventory[offer.inventoryKey] <= 0) {
    return;
  }

  state.inventory[offer.inventoryKey] -= 1;
  if (state.fakeInventory[offer.inventoryKey] > 0) {
    state.fakeInventory[offer.inventoryKey] -= 1;
  }
  state.points += offer.price;
  storePoints();
  playTradeChingSound();
  addLog(`Sold 1 ${offer.label} to the natives for ${offer.price} points.`, 'good');

  if (state.inventory[offer.inventoryKey] <= 0) {
    state.traderSellOffers = state.traderSellOffers.filter((item) => item.id !== offerId);
  }

  triggerEventAnimation('natives', 44, { traded: true });
  renderNativeOffers();
  syncHud();
  syncInventoryUi();
}

function buildNativeOffers() {
  const catalog = [
    { kind: 'repair', inventoryKey: 'repairKits', label: 'Repair Kit', description: 'Patch the hull for +30 HP.', min: 10, max: 26, scamChance: 0.08 },
    { kind: 'spray', inventoryKey: 'antiNibSpray', label: 'Anti-Nib Spray', description: 'Arms until a Nibblorax hits.', min: 3, max: 11, scamChance: 0.08 },
    { kind: 'bouncer', inventoryKey: 'bouncer', label: 'Bouncer', description: 'Launches a 5-turn safe jump.', min: 22, max: 42, scamChance: 0.1 },
    { kind: 'foodCrate', inventoryKey: null, label: 'Food Crate', description: 'Immediate +50 food.', min: 10, max: 24, scamChance: 0.06 },
    { kind: 'sonar', inventoryKey: 'sonarDisrupter', label: 'Sonar Disrupter', description: 'Arms until the worm comes.', min: 80, max: 125, scamChance: 0.1 },
    { kind: 'pickaxe', inventoryKey: 'specialPickaxes', label: 'Special Pickaxe', description: 'Turns coral damage into +20 HP when armed.', min: 18, max: 34, scamChance: 0.09 },
    { kind: 'windmill', inventoryKey: 'windmills', label: 'Windmill', description: 'Arms until weather, then skips a free turn.', min: 14, max: 28, scamChance: 0.09 },
  ];

  const pool = [...catalog];
  const offers = [];
  const count = randInt(3, 4);

  while (offers.length < count && pool.length > 0) {
    const index = randInt(0, pool.length - 1);
    const picked = pool.splice(index, 1)[0];
    offers.push({
      ...picked,
      id: `${picked.kind}-${Date.now()}-${offers.length}-${Math.random().toString(16).slice(2, 6)}`,
      price: randInt(picked.min, picked.max),
      scam: Math.random() < Math.min(0.9, picked.scamChance * NATIVE_SCAM_RATE_MULT),
    });
  }

  return offers;
}

function buildNativeSellOffers() {
  const catalog = [
    { inventoryKey: 'repairKits', label: 'Repair Kit', min: 6, max: 14 },
    { inventoryKey: 'antiNibSpray', label: 'Anti-Nib Spray', min: 2, max: 7 },
    { inventoryKey: 'bouncer', label: 'Bouncer', min: 16, max: 26 },
    { inventoryKey: 'sonarDisrupter', label: 'Sonar Disrupter', min: 55, max: 90 },
    { inventoryKey: 'specialPickaxes', label: 'Special Pickaxe', min: 10, max: 22 },
    { inventoryKey: 'windmills', label: 'Windmill', min: 8, max: 18 },
  ];

  return catalog
    .filter((item) => state.inventory[item.inventoryKey] > 0)
    .map((item, index) => ({
      ...item,
      id: `sell-${item.inventoryKey}-${Date.now()}-${index}`,
      price: randInt(item.min, item.max),
    }));
}

function buyItem(kind) {
  if (state.traderOpen) {
    return;
  }

  const labels = {
    repair: 'Repair Kit',
    spray: 'Anti-Nib Spray',
    bouncer: 'Bouncer',
    maxHp: 'Max HP +10',
    sonar: 'Sonar Disrupter',
    investor: 'Investor',
  };

  const price = getStorePrice(kind);
  if (state.points < price) {
    addLog(`Not enough points for ${labels[kind]}.`, 'bad');
    return;
  }

  state.points -= price;

  const buyingFromSetup = !state.running;
  if (kind === 'repair') {
    if (buyingFromSetup) {
      state.loadoutBonus.repairKits += 1;
    } else {
      state.inventory.repairKits += 1;
    }
  } else if (kind === 'spray') {
    if (buyingFromSetup) {
      state.loadoutBonus.antiNibSpray += 1;
    } else {
      state.inventory.antiNibSpray += 1;
    }
  } else if (kind === 'bouncer') {
    if (buyingFromSetup) {
      state.loadoutBonus.bouncer += 1;
    } else {
      state.inventory.bouncer += 1;
    }
  } else if (kind === 'maxHp') {
    state.maxHp += 10;
    state.hp += 10;
    storeMaxHp();
  } else if (kind === 'sonar') {
    if (buyingFromSetup) {
      state.loadoutBonus.sonarDisrupter += 1;
    } else {
      state.inventory.sonarDisrupter += 1;
    }
  } else if (kind === 'investor') {
    state.investorCount += 1;
    storeInvestorCount();
  }

  storePoints();
  if (buyingFromSetup) {
    storeLoadout();
  } else {
    addLog(`Bought ${labels[kind]} for ${price} points.`, 'good');
  }
  syncHud();
  syncInventoryUi();
  syncSetupShopUi();
}

function resolveRoundState(checkWin, options = {}) {
  const { deferWin = false } = options;

  if (!state.gameOver && state.food <= 0) {
    state.deathMode = 'starve';
    const starvingNearNatives = state.traderOpen || (state.eventAnim && state.eventAnim.type === 'natives');
    if (starvingNearNatives) {
      triggerEventAnimation('nativeExit', 120);
    }
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

  if (checkWin && !state.gameOver && !deferWin && state.turn >= state.turnsToWin) {
    addLog('Extraction signal locked. You survived the crossing.', 'good');
    triggerEventAnimation('confetti', 140);
    endGame(`Mission success. You won. +${WIN_REWARD_POINTS} points awarded.`, 'win');
  }
}

function endGame(message, cause = '', options = {}) {
  const { skipFinalLog = false } = options;
  if (cause === 'win') {
    playWinFanfareSound();
  } else if (cause === 'explode') {
    playExplosionBlastSound();
  }
  state.gameOver = true;
  state.running = false;
  state.traderOpen = false;
  state.tabletOpen = false;
  dismissMathQuestion(null);
  nativeTraderPanel.classList.add('hidden');
  tabletPanel.classList.add('hidden');
  if (cause) {
    state.deathMode = cause;
  }
  finalizeRun(cause === 'win');
  state.points = loadStoredPoints();
  state.colonizeDelayTarget = loadColonizeDelay();
  state.colony = loadStoredColony();
  nextTurnBtn.disabled = true;
  setItemButtonsDisabled(true);
  if (!skipFinalLog) {
    addLog(message, message.includes('success') ? 'good' : 'bad');
  }
  syncColonizeUi();
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
  syncSetupShopUi();
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

function loadStoredInvestorCount() {
  try {
    const raw = window.localStorage.getItem(INVESTOR_STORAGE_KEY);
    if (raw === 'true') {
      return 1;
    }
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed < 0) {
      return 0;
    }
    return Math.floor(parsed);
  } catch {
    return 0;
  }
}

function storeInvestorCount() {
  try {
    window.localStorage.setItem(INVESTOR_STORAGE_KEY, String(state.investorCount));
  } catch {
    // Ignore storage failures and keep investor state in memory for the session.
  }
}

function loadSonarBlockedWormEver() {
  try {
    return window.localStorage.getItem(SONAR_WORM_BLOCKED_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function storeSonarBlockedWormEver(value) {
  try {
    window.localStorage.setItem(SONAR_WORM_BLOCKED_STORAGE_KEY, value ? 'true' : 'false');
  } catch {
    // Ignore storage failures and keep this session-only.
  }
}

function loadWormComplimentCount() {
  try {
    const raw = Number(window.localStorage.getItem(WORM_COMPLIMENT_COUNT_STORAGE_KEY));
    if (!Number.isFinite(raw) || raw < 0) {
      return 0;
    }
    return Math.floor(raw);
  } catch {
    return 0;
  }
}

function storeWormComplimentCount() {
  try {
    window.localStorage.setItem(WORM_COMPLIMENT_COUNT_STORAGE_KEY, String(state.wormComplimentCount));
  } catch {
    // Ignore storage failures and keep this session-only.
  }
}

function loadStoredMathModeEnabled() {
  try {
    return window.localStorage.getItem(MATH_MODE_ENABLED_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function loadStoredMathModeOperator() {
  try {
    const raw = window.localStorage.getItem(MATH_MODE_OPERATOR_STORAGE_KEY);
    return raw === '*' ? '*' : '+';
  } catch {
    return '+';
  }
}

function storeMathModeSettings() {
  try {
    window.localStorage.setItem(MATH_MODE_ENABLED_STORAGE_KEY, state.mathModeEnabled ? 'true' : 'false');
    window.localStorage.setItem(MATH_MODE_OPERATOR_STORAGE_KEY, state.mathModeOperator === '*' ? '*' : '+');
  } catch {
    // Ignore storage failures and keep this session-only.
  }
}

function syncMathModeUi() {
  mathModeToggle.checked = state.mathModeEnabled;
  mathOpSelect.value = state.mathModeOperator === '*' ? '*' : '+';
  mathOpSelect.disabled = !state.mathModeEnabled;
}

function loadStoredSetupSettings() {
  try {
    const volumeRaw = Number(window.localStorage.getItem(VOLUME_STORAGE_KEY));
    const showTrackRaw = window.localStorage.getItem(SHOW_TRACK_STORAGE_KEY);
    const uiClickRaw = window.localStorage.getItem(UI_CLICK_SOUND_STORAGE_KEY);
    const animRaw = Number(window.localStorage.getItem(ANIMATION_SPEED_STORAGE_KEY));
    return {
      volume: Number.isFinite(volumeRaw) ? Math.max(0, Math.min(100, Math.floor(volumeRaw))) : 100,
      showTrack: showTrackRaw !== 'false',
      uiClickSoundEnabled: uiClickRaw !== 'false',
      animationSpeed: Number.isFinite(animRaw) ? Math.max(50, Math.min(200, Math.floor(animRaw))) : 100,
    };
  } catch {
    return {
      volume: 100,
      showTrack: true,
      uiClickSoundEnabled: true,
      animationSpeed: 100,
    };
  }
}

function storeSetupSettings() {
  try {
    window.localStorage.setItem(VOLUME_STORAGE_KEY, String(state.masterVolume));
    window.localStorage.setItem(SHOW_TRACK_STORAGE_KEY, state.showTrack ? 'true' : 'false');
    window.localStorage.setItem(UI_CLICK_SOUND_STORAGE_KEY, state.uiClickSoundEnabled ? 'true' : 'false');
    window.localStorage.setItem(ANIMATION_SPEED_STORAGE_KEY, String(state.animationSpeed));
  } catch {
    // Ignore storage failures and keep this session-only.
  }
}

function normalizeLoadout(raw) {
  const source = raw && typeof raw === 'object' ? raw : {};
  return {
    repairKits: Number.isFinite(source.repairKits) ? Math.max(0, Math.floor(source.repairKits)) : 0,
    antiNibSpray: Number.isFinite(source.antiNibSpray) ? Math.max(0, Math.floor(source.antiNibSpray)) : 0,
    bouncer: Number.isFinite(source.bouncer) ? Math.max(0, Math.floor(source.bouncer)) : 0,
    sonarDisrupter: Number.isFinite(source.sonarDisrupter) ? Math.max(0, Math.floor(source.sonarDisrupter)) : 0,
  };
}

function loadStoredLoadout() {
  try {
    const raw = window.localStorage.getItem(LOADOUT_STORAGE_KEY);
    if (!raw) {
      return normalizeLoadout({});
    }
    return normalizeLoadout(JSON.parse(raw));
  } catch {
    return normalizeLoadout({});
  }
}

function storeLoadout() {
  try {
    window.localStorage.setItem(LOADOUT_STORAGE_KEY, JSON.stringify(state.loadoutBonus));
  } catch {
    // Ignore storage failures and keep this session-only.
  }
}

function clearLoadout() {
  state.loadoutBonus = normalizeLoadout({});
  storeLoadout();
}

function syncSetupSettingsUi() {
  volumeSlider.value = String(state.masterVolume);
  volumeValue.textContent = `${state.masterVolume}%`;
  showTrackToggle.checked = state.showTrack;
  uiClickSoundToggle.checked = state.uiClickSoundEnabled;
  animationSpeedSlider.value = String(state.animationSpeed);
  animationSpeedValue.textContent = `${state.animationSpeed}%`;
}

function syncSetupShopUi() {
  setupPointsValue.textContent = String(state.points);
  setupLoadoutRepair.textContent = String(3 + state.loadoutBonus.repairKits);
  setupLoadoutSpray.textContent = String(2 + state.loadoutBonus.antiNibSpray);
  setupLoadoutBouncer.textContent = String(1 + state.loadoutBonus.bouncer);
  setupLoadoutSonar.textContent = String(state.loadoutBonus.sonarDisrupter);
  buyInvestorBtn.textContent = `Investor (${getStorePrice('investor')})`;
  buyRepairBtn.disabled = state.points < getStorePrice('repair');
  buySprayBtn.disabled = state.points < getStorePrice('spray');
  buyBouncerBtn.disabled = state.points < getStorePrice('bouncer');
  buyHpBtn.disabled = state.points < getStorePrice('maxHp');
  buySonarBtn.disabled = state.points < getStorePrice('sonar');
  buyInvestorBtn.disabled = state.points < getStorePrice('investor');
}

function buildMathQuestion(harder = false) {
  const useMultiply = state.mathModeOperator === '*';
  if (useMultiply) {
    const min = harder ? 3 : 1;
    const max = harder ? 12 : 10;
    const a = randInt(min, max);
    const b = randInt(min, max);
    return {
      text: `${a} * ${b} = ?`,
      answer: a * b,
    };
  }

  const min = harder ? 5 : 1;
  const max = harder ? 20 : 15;
  const a = randInt(min, max);
  const b = randInt(min, max);
  return {
    text: `${a} + ${b} = ?`,
    answer: a + b,
  };
}

function isMathAnswerCorrect(rawInput, expected) {
  if (rawInput === null) {
    return false;
  }
  const text = String(rawInput).trim().toLowerCase().replace(/\s+/g, '');
  let parsed = Number(text);
  if (!Number.isFinite(parsed)) {
    const normalized = text.replace(/x/g, '*');
    const match = normalized.match(/^(-?\d+)([+*])(-?\d+)$/);
    if (!match) {
      return false;
    }
    const left = Number(match[1]);
    const op = match[2];
    const right = Number(match[3]);
    if (!Number.isFinite(left) || !Number.isFinite(right)) {
      return false;
    }
    parsed = op === '+' ? (left + right) : (left * right);
  }
  return Math.round(parsed) === expected;
}

function openMathQuestion(label, text) {
  return new Promise((resolve) => {
    state.mathPromptResolve = resolve;
    mathQuestionLabel.textContent = label;
    mathQuestionText.textContent = text;
    mathAnswerInput.value = '';
    mathQuestionPanel.classList.remove('hidden');
    window.setTimeout(() => {
      mathAnswerInput.focus();
      mathAnswerInput.select();
    }, 0);
  });
}

function dismissMathQuestion(answer = null) {
  const resolve = state.mathPromptResolve;
  state.mathPromptResolve = null;
  mathQuestionPanel.classList.add('hidden');
  if (resolve) {
    resolve(answer);
  }
}

function submitMathAnswer() {
  if (!state.mathPromptResolve) {
    return;
  }
  dismissMathQuestion(mathAnswerInput.value);
}

function triggerMathWrongFeedback() {
  playMathWrongDongSound();
  if (!mathConsole) {
    return Promise.resolve();
  }
  mathConsole.classList.remove('alarmFlash');
  // Force restart so quick consecutive wrong answers still flash.
  void mathConsole.offsetWidth;
  mathConsole.classList.add('alarmFlash');
  return new Promise((resolve) => {
    window.setTimeout(() => {
      mathConsole.classList.remove('alarmFlash');
      resolve();
    }, 420);
  });
}

async function runMathCheck(promptLabel = 'Turn Check', questionCount = 1) {
  if (!state.mathModeEnabled) {
    return true;
  }
  for (let i = 0; i < questionCount; i += 1) {
    const basic = buildMathQuestion(false);
    const first = await openMathQuestion(`Math Mode | ${promptLabel} | ${i + 1}/${questionCount}`, basic.text);
    if (isMathAnswerCorrect(first, basic.answer)) {
      playMathCorrectDingSound();
      continue;
    }
    await triggerMathWrongFeedback();
    const harder = buildMathQuestion(true);
    const retry = await openMathQuestion('Retry (harder)', harder.text);
    if (isMathAnswerCorrect(retry, harder.answer)) {
      playMathCorrectDingSound();
      continue;
    }
    await triggerMathWrongFeedback();
    return false;
  }
  return true;
}

function loadStoredTablets() {
  try {
    const raw = window.localStorage.getItem(TABLET_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      terrarex: parsed.terrarex === true,
      mystic: parsed.mystic === true,
      lawyerSummoned: parsed.lawyerSummoned === true,
    };
  } catch {
    return {
      terrarex: false,
      mystic: false,
      lawyerSummoned: false,
    };
  }
}

function storeTablets() {
  try {
    window.localStorage.setItem(TABLET_STORAGE_KEY, JSON.stringify(state.lore));
  } catch {
    // Ignore storage failures and keep lore in memory for the session.
  }
}

function loadStoredRecords() {
  try {
    const perField = {
      runs: readStoredNumber(RECORD_RUNS_STORAGE_KEY),
      wins: readStoredNumber(RECORD_WINS_STORAGE_KEY),
      bestPoints: readStoredNumber(RECORD_BEST_POINTS_STORAGE_KEY),
      bestTurns: readStoredNumber(RECORD_BEST_TURNS_STORAGE_KEY),
    };

    const legacyRaw = window.localStorage.getItem('black-sand-colony-run-records');
    if (legacyRaw) {
      try {
        const parsed = JSON.parse(legacyRaw);
        return {
          runs: Math.max(Number.isFinite(parsed.runs) ? Math.max(0, Math.floor(parsed.runs)) : 0, perField.runs),
          wins: Math.max(Number.isFinite(parsed.wins) ? Math.max(0, Math.floor(parsed.wins)) : 0, perField.wins),
          bestPoints: Math.max(Number.isFinite(parsed.bestPoints) ? Math.max(0, Math.floor(parsed.bestPoints)) : 0, perField.bestPoints),
          bestTurns: Math.max(Number.isFinite(parsed.bestTurns) ? Math.max(0, Math.floor(parsed.bestTurns)) : 0, perField.bestTurns),
        };
      } catch {
        // Fall through to per-field storage.
      }
    }

    return perField;
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
    window.localStorage.setItem(RECORD_RUNS_STORAGE_KEY, String(state.records.runs));
    window.localStorage.setItem(RECORD_WINS_STORAGE_KEY, String(state.records.wins));
    window.localStorage.setItem(RECORD_BEST_POINTS_STORAGE_KEY, String(state.records.bestPoints));
    window.localStorage.setItem(RECORD_BEST_TURNS_STORAGE_KEY, String(state.records.bestTurns));
    window.localStorage.setItem('black-sand-colony-run-records', JSON.stringify({
      runs: state.records.runs,
      wins: state.records.wins,
      bestPoints: state.records.bestPoints,
      bestTurns: state.records.bestTurns,
    }));
  } catch {
    // Ignore storage failures and keep records in memory for the session.
  }
}

function readStoredNumber(key) {
  const raw = window.localStorage.getItem(key);
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return 0;
  }
  return Math.floor(parsed);
}

function finalizeRun(won) {
  if (state.runRecorded) {
    return;
  }

  state.runRecorded = true;
  state.records.runs += 1;
  if (won) {
    state.records.wins += 1;
    if (!state.skipStandardWinReward) {
      state.points += WIN_REWARD_POINTS;
    }
    storePoints();
  } else {
    state.points = state.runStartPoints;
    storePoints();
  }
  state.skipStandardWinReward = false;
  state.records.bestPoints = Math.max(state.records.bestPoints, state.points);
  state.records.bestTurns = Math.max(state.records.bestTurns, state.turn);
  storeRecords();
  syncRecordsUi();
  state.points = loadStoredPoints();
  state.colonizeDelayTarget = loadColonizeDelay();
  state.colony = loadStoredColony();
  syncColonizeUi();
}

function syncRecordsUi() {
  recordRuns.textContent = String(state.records.runs);
  recordWins.textContent = String(state.records.wins);
  recordBestPoints.textContent = String(state.records.bestPoints);
  recordBestTurns.textContent = String(state.records.bestTurns);
}

function syncLoreUi() {
  const terrarex = state.lore.terrarex === true;
  const mystic = state.lore.mystic === true;
  const count = (terrarex ? 1 : 0) + (mystic ? 1 : 0);
  tabletCount.textContent = String(count);
  if (mystic) {
    tabletStatus.textContent = 'Untranslated tablet recovered';
  } else if (terrarex) {
    tabletStatus.textContent = 'Terrarex tablet recovered';
  } else {
    tabletStatus.textContent = 'None';
  }
  readTabletBtn.disabled = count <= 0;
}

function syncInventoryUi() {
  repairCount.textContent = String(state.inventory.repairKits);
  sprayCount.textContent = String(state.inventory.antiNibSpray);
  sonarCount.textContent = String(state.inventory.sonarDisrupter);
  bouncerCount.textContent = String(state.inventory.bouncer);
  pickaxeCount.textContent = String(state.inventory.specialPickaxes);
  windmillCount.textContent = String(state.inventory.windmills);
  sprayStatus.textContent = state.sprayArmed ? 'Armed' : 'Inactive';
  sonarStatus.textContent = state.sonarArmed ? 'Armed' : 'Inactive';
  pickaxeStatus.textContent = state.pickaxeArmed ? 'Armed' : 'Inactive';
  windmillStatus.textContent = state.windmillArmed ? 'Armed' : 'Inactive';

  const inactive = !state.running || state.gameOver || state.traderOpen || state.tabletOpen;
  repairBtn.disabled = inactive || state.inventory.repairKits <= 0 || state.hp >= state.maxHp;
  sprayBtn.disabled = inactive || state.inventory.antiNibSpray <= 0 || state.sprayArmed;
  sonarBtn.disabled = inactive || state.inventory.sonarDisrupter <= 0 || state.sonarArmed || state.cooldowns.sonar > 0;
  bouncerBtn.disabled = inactive || state.inventory.bouncer <= 0 || state.cooldowns.bouncer > 0;
  pickaxeBtn.disabled = inactive || state.inventory.specialPickaxes <= 0 || state.pickaxeArmed;
  windmillBtn.disabled = inactive || state.inventory.windmills <= 0 || state.windmillArmed;
  buyRepairBtn.disabled = state.traderOpen || state.points < getStorePrice('repair');
  buySprayBtn.disabled = state.traderOpen || state.points < getStorePrice('spray');
  buyBouncerBtn.disabled = state.traderOpen || state.points < getStorePrice('bouncer');
  buyHpBtn.disabled = state.traderOpen || state.points < getStorePrice('maxHp');
  buySonarBtn.disabled = state.traderOpen || state.points < getStorePrice('sonar');
  buyInvestorBtn.disabled = state.traderOpen || state.points < getStorePrice('investor');
  logNoteInput.disabled = inactive;
  logNoteBtn.disabled = inactive;
  if (state.lore.terrarex !== true && state.lore.mystic !== true) {
    readTabletBtn.disabled = true;
  }
}

function setItemButtonsDisabled(disabled) {
  repairBtn.disabled = disabled;
  sprayBtn.disabled = disabled;
  sonarBtn.disabled = disabled;
  bouncerBtn.disabled = disabled;
  pickaxeBtn.disabled = disabled;
  windmillBtn.disabled = disabled;
  buyRepairBtn.disabled = disabled;
  buySprayBtn.disabled = disabled;
  buyBouncerBtn.disabled = disabled;
  buyHpBtn.disabled = disabled;
  buySonarBtn.disabled = disabled;
  buyInvestorBtn.disabled = disabled;
  logNoteInput.disabled = disabled;
  logNoteBtn.disabled = disabled;
  readTabletBtn.disabled = disabled || (state.lore.terrarex !== true && state.lore.mystic !== true);
}

function addLog(text, tone = '') {
  const p = document.createElement('p');
  p.className = `logEntry ${tone}`.trim();
  p.textContent = text;
  log.prepend(p);
}

function addPlayerLogNote() {
  const note = logNoteInput.value.trim();
  if (!note || !state.running || state.gameOver) {
    return;
  }
  addLog(`NOTE: ${note}`, 'player');
  const normalized = note.replace(/\s+/g, ' ').trim().toLowerCase();
  if (
    normalized === 'hi worm, you look nice today.'
    && !state.sonarBlockedWormEver
  ) {
    if (state.wormComplimentCount >= 3) {
      addLog('The Worm feels used.', 'bad');
      playWormRoarSound();
      state.hp = 0;
      state.deathMode = 'worm';
      triggerEventAnimation('worm', 72);
      endGame('The worm devoured your crawler.', 'worm');
    } else {
      state.wormComplimentCount += 1;
      storeWormComplimentCount();
      addLog('The Worm returned the compliment.', 'good');
      state.points += WORM_COMPLIMENT_POINTS;
      storePoints();
      syncHud();
      triggerEventAnimation('wormGift', 200);
      draw();
    }
  }
  const compact = normalized.replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trim();
  const lawyerSpellMatched = compact === 'bibiddi bobbidi boo' || compact === 'bibbidi bobbidi boo';
  if (lawyerSpellMatched) {
    if (state.lore.mystic && state.lore.lawyerSummoned !== true) {
      state.lore.lawyerSummoned = true;
      storeTablets();
      addLog('You have summoned a lawyer.', 'good');
    } else if (state.lore.mystic && state.lore.lawyerSummoned === true) {
      addLog('Your lawyer is already on retainer.', 'good');
    }
  }
  logNoteInput.value = '';
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
  if (state.showTrack) {
    drawTrack();
  }
  drawDecor();
  drawCrawler();
  drawEventAnimation();
  drawStatusStrip();

  if (state.eventAnim) {
    const animMult = Math.max(0.5, Math.min(2, (state.animationSpeed || 100) / 100));
    state.eventAnim.tick += 0.5 * animMult;
    state.eventAnim.frames -= animMult;
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

  if (type === 'wormGift') {
    drawWormGift();
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

  if (type === 'pickaxe') {
    drawPickaxe();
    return;
  }

  if (type === 'windmill') {
    drawWindmill();
    return;
  }

  if (type === 'plutonium') {
    drawPlutonium();
    return;
  }

  if (type === 'tablet') {
    drawTablet();
    return;
  }

  if (type === 'natives') {
    drawNatives();
    return;
  }

  if (type === 'nativeExit') {
    drawNativeExit();
    return;
  }

  if (type === 'lawyer') {
    drawLawyerIntervention();
    return;
  }

  if (type === 'nativeRide') {
    drawNativeRide();
    return;
  }

  if (type === 'fly') {
    drawFlyEncounter();
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

function drawWormGift() {
  const { x, y } = getCrawlerPosition();
  const tick = state.eventAnim ? state.eventAnim.tick : 0;
  const phaseRiseEnd = 24;
  const phaseSpitEnd = 62;
  const phaseSinkEnd = 96;
  const phaseTextEnd = 160;

  let wormRise = 0;
  let wormX = x + 82;
  let wormY = y + 22;
  let presentX = x + 78;
  let presentY = y - 2;
  let presentVisible = false;
  let presentOnCrawler = false;

  if (tick <= phaseRiseEnd) {
    wormRise = (tick / phaseRiseEnd) * 32;
  } else if (tick <= phaseSpitEnd) {
    wormRise = 32;
    const t = (tick - phaseRiseEnd) / (phaseSpitEnd - phaseRiseEnd);
    presentVisible = true;
    presentX = (x + 78) + ((x + 4) - (x + 78)) * t;
    presentY = (y - 6) + ((y - 38) - (y - 6)) * t - (Math.sin(t * Math.PI) * 18);
  } else if (tick <= phaseSinkEnd) {
    const t = (tick - phaseSpitEnd) / (phaseSinkEnd - phaseSpitEnd);
    wormRise = 32 * (1 - t);
    presentVisible = true;
    presentOnCrawler = true;
    presentX = x + 4;
    presentY = y - 38;
  } else {
    presentVisible = true;
    presentOnCrawler = true;
    presentX = x + 4;
    presentY = y - 38;
  }

  // Worm in front of crawler.
  if (tick <= phaseSinkEnd) {
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(wormX - 40, wormY + 14 - wormRise, 80, 26);
    ctx.fillStyle = '#1b1416';
    ctx.fillRect(wormX - 28, wormY + 10 - wormRise, 56, 14);
    ctx.fillStyle = '#2b1717';
    ctx.fillRect(wormX - 16, wormY + 8 - wormRise, 32, 20);
    ctx.fillStyle = '#f0d8ab';
    ctx.fillRect(wormX - 14, wormY + 6 - wormRise, 28, 5);
    ctx.fillRect(wormX - 14, wormY + 28 - wormRise, 28, 5);
    ctx.fillStyle = '#ff4c4c';
    for (let i = 0; i < 4; i += 1) {
      ctx.fillRect(wormX - 24 + i * 12, wormY + 2 - wormRise, 4, 3);
    }
  }

  if (presentVisible) {
    const pulse = Math.floor(tick) % 3;
    ctx.fillStyle = '#a7d8ff';
    ctx.fillRect(presentX - 8, presentY - 8, 16, 16);
    ctx.fillStyle = '#d8f0ff';
    ctx.fillRect(presentX - 2, presentY - 8, 4, 16);
    ctx.fillRect(presentX - 8, presentY - 2, 16, 4);
    ctx.fillStyle = '#ff4a4a';
    ctx.fillRect(presentX - 5, presentY - 11, 10, 3);
    if (presentOnCrawler) {
      ctx.fillStyle = pulse === 0 ? '#fff7bf' : '#ffe98a';
      ctx.fillRect(presentX - 12, presentY - 12, 4, 4);
      ctx.fillRect(presentX + 8, presentY + 8, 4, 4);
    }
  }

  if (tick > phaseSinkEnd && tick <= phaseTextEnd) {
    ctx.fillStyle = '#9dffb8';
    ctx.font = 'bold 18px Verdana';
    ctx.fillText(`+${WORM_COMPLIMENT_POINTS} POINTS`, x - 14, y - 66);
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

function drawTablet() {
  const { x, y } = getCrawlerPosition();
  const lift = Math.min(6, Math.floor((state.eventAnim ? state.eventAnim.tick : 0) / 3));

  ctx.fillStyle = 'rgba(210, 190, 140, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#161217';
  ctx.fillRect(x + 18, y - 2 - lift, 34, 48);
  ctx.fillStyle = '#0b0b0d';
  ctx.fillRect(x + 22, y + 2 - lift, 26, 40);
  ctx.fillStyle = '#2a2730';
  ctx.fillRect(x + 24, y + 10 - lift, 20, 2);
  ctx.fillRect(x + 24, y + 19 - lift, 18, 2);
  ctx.fillRect(x + 24, y + 28 - lift, 16, 2);

  ctx.fillStyle = '#0d0b0a';
  ctx.fillRect(x + 10, y + 26, 58, 12);
  ctx.fillRect(x + 16, y + 36, 44, 10);
}

function drawPickaxe() {
  const { x, y } = getCrawlerPosition();
  ctx.fillStyle = '#66ffd8';
  ctx.fillRect(x - 24, y - 44, 5, 26);
  ctx.fillRect(x + 19, y - 44, 5, 26);
  ctx.fillStyle = '#baffef';
  ctx.fillRect(x - 31, y - 47, 18, 7);
  ctx.fillRect(x + 13, y - 47, 18, 7);
  ctx.fillStyle = 'rgba(102, 255, 216, 0.12)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawWindmill() {
  const { x, y } = getCrawlerPosition();
  const phase = Math.floor(state.eventAnim.tick) % 4;
  ctx.fillStyle = '#89e6ff';
  ctx.fillRect(x - 2, y - 48, 4, 40);
  ctx.fillRect(x - 26, y - 30, 52, 4);
  ctx.fillRect(x - 2, y - 54, 4, 52);
  if (phase % 2 === 0) {
    ctx.fillRect(x - 20, y - 46, 40, 4);
    ctx.fillRect(x - 20, y - 14, 40, 4);
  } else {
    ctx.fillRect(x - 18, y - 42, 4, 32);
    ctx.fillRect(x + 14, y - 42, 4, 32);
  }
  ctx.fillStyle = 'rgba(137, 230, 255, 0.12)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawNatives(options = {}) {
  const { x, y } = getCrawlerPosition();
  const tick = state.eventAnim ? Math.floor(state.eventAnim.tick) % 3 : 0;
  const xOffset = typeof options.xOffset === 'number' ? options.xOffset : 0;
  const showTradePrompt = options.showTradePrompt !== false;
  const questionColor = typeof options.questionColor === 'string' ? options.questionColor : '';
  const pack = [
    { ox: 54, oy: 4, scale: 1 },
    { ox: 84, oy: 0, scale: 1.15 },
    { ox: 118, oy: 8, scale: 0.95 },
  ];

  for (const native of pack) {
    const nx = x + native.ox + xOffset;
    const ny = y + native.oy;
    const s = native.scale;

    ctx.fillStyle = '#522b76';
    ctx.fillRect(nx, ny - 24 * s, 12 * s, 20 * s);
    ctx.fillRect(nx + 8 * s, ny - 20 * s, 7 * s, 16 * s);

    ctx.fillStyle = '#66358f';
    ctx.fillRect(nx - 6 * s, ny - 28 * s, 9 * s, 8 * s);
    ctx.fillRect(nx + 1 * s, ny - 32 * s, 9 * s, 10 * s);
    ctx.fillRect(nx + 9 * s, ny - 30 * s, 6 * s, 8 * s);

    ctx.fillStyle = '#73419b';
    ctx.fillRect(nx - 14 * s, ny - 24 * s, 8 * s, 6 * s);

    ctx.fillStyle = '#3e2159';
    ctx.fillRect(nx + 12 * s, ny - 18 * s, 5 * s, 11 * s);
    ctx.fillRect(nx + 16 * s, ny - 12 * s, 5 * s, 10 * s);
    ctx.fillRect(nx + 20 * s, ny - 6 * s, 4 * s, 9 * s);
    ctx.fillRect(nx + 23 * s, ny + 0 * s, 3 * s, 8 * s);

    ctx.fillStyle = '#28173b';
    ctx.fillRect(nx + 3 * s, ny - 4 * s, 3 * s, 11 * s);
    ctx.fillRect(nx + 10 * s, ny - 4 * s, 3 * s, 11 * s);
    ctx.fillRect(nx + 11 * s, ny - 18 * s, 6 * s, 14 * s);
    ctx.fillRect(nx + 17 * s, ny - 12 * s, 5 * s, 10 * s);

    ctx.fillStyle = '#0f0d11';
    ctx.fillRect(nx - 1 * s, ny + 6 * s, 7 * s, 3 * s);
    ctx.fillRect(nx + 9 * s, ny + 6 * s, 7 * s, 3 * s);

    ctx.fillStyle = '#67ff9f';
    ctx.fillRect(nx - 11 * s, ny - 21 * s, 7 * s, 3 * s);
    ctx.fillRect(nx - 1 * s, ny - 26 * s, 2 * s, 2 * s);
    ctx.fillRect(nx + 3 * s, ny - 26 * s, 2 * s, 2 * s);
    ctx.fillRect(nx + 0 * s, ny - 20 * s, 5 * s, 2 * s);
    ctx.fillRect(nx + 2 * s, ny - 13 * s, 4 * s, 6 * s);
    ctx.fillRect(nx - 4 * s, ny - 10 * s, 4 * s, 6 * s);
    ctx.fillRect(nx - 7 * s, ny - 1 * s, 4 * s, 5 * s);

    ctx.fillStyle = '#80ffb3';
    ctx.fillRect(nx + 20 * s, ny - 4 * s + tick, 2 * s, 2 * s);

    if (questionColor) {
      const bubbleW = 14 * s;
      const bubbleH = 12 * s;
      const bubbleX = nx + 1 * s;
      const bubbleY = ny - 50 * s - tick;
      ctx.fillStyle = questionColor;
      ctx.fillRect(bubbleX, bubbleY, bubbleW, bubbleH);
      ctx.fillStyle = '#1a2a38';
      ctx.font = 'bold 11px Courier New';
      ctx.fillText('?', bubbleX + 4 * s, bubbleY + 9 * s);
    }
  }

  if (showTradePrompt) {
    ctx.fillStyle = '#a6ff7f';
    ctx.font = '14px Courier New';
    ctx.fillText('TRADE?', x + 42, y - 42);
  }
}

function drawNativeExit() {
  const tick = state.eventAnim ? state.eventAnim.tick : 0;
  const progress = Math.min(1, tick / 96);
  const shift = Math.floor(progress * (canvas.width + 120));
  drawNatives({
    xOffset: shift,
    showTradePrompt: false,
    questionColor: '#9de9ff',
  });

  ctx.fillStyle = 'rgba(157, 233, 255, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawNativeRide() {
  const { x, y } = getCrawlerPosition();
  drawNatives();
  ctx.fillStyle = '#74f3ff';
  ctx.fillRect(x - 38, y + 14, 76, 6);
  ctx.fillRect(x - 26, y + 8, 52, 4);
  ctx.fillStyle = 'rgba(116, 243, 255, 0.16)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLawyerIntervention() {
  const tick = state.eventAnim ? state.eventAnim.tick : 0;
  const animData = state.eventAnim && state.eventAnim.data
    ? state.eventAnim.data
    : {};
  if (state.eventAnim && !state.eventAnim.data) {
    state.eventAnim.data = animData;
  }
  const y = 322;
  const nativeX = 352;
  const hopEnd = 36;
  const settleEnd = 58;
  const lineHold = 150; // 5 seconds at ~30 tick/second
  const line1End = settleEnd + lineHold;
  const line2End = line1End + lineHold;
  const line3End = line2End + lineHold;
  const line4End = line3End + lineHold;
  const line5End = line4End + lineHold;
  const talkEnd = line5End;
  const rawT = Math.min(1, tick / hopEnd);
  const hopT = tick <= hopEnd ? rawT : 1;
  const hopX = canvas.width + ((548 - canvas.width) * hopT);
  const hopY = y - (Math.sin(hopT * Math.PI * 2.5) * 18);
  const lawyerX = tick <= settleEnd ? hopX : 548;
  const lawyerY = tick <= settleEnd ? hopY : y;

  // Keep the existing background/crawler view; just stage the argument actors.
  ctx.fillStyle = 'rgba(14, 18, 28, 0.18)';
  ctx.fillRect(220, 230, 460, 130);

  // Trader native.
  ctx.fillStyle = '#6d3f8f';
  ctx.fillRect(nativeX - 18, y - 44, 36, 42);
  ctx.fillStyle = '#4fe48a';
  ctx.fillRect(nativeX - 14, y - 52, 28, 8);
  ctx.fillStyle = '#2f1f38';
  ctx.fillRect(nativeX - 6, y - 62, 12, 10);
  ctx.fillStyle = '#67ff9f';
  ctx.fillRect(nativeX - 9, y - 46, 5, 4);
  ctx.fillRect(nativeX + 4, y - 46, 5, 4);
  ctx.fillStyle = '#26163a';
  ctx.fillRect(nativeX - 12, y - 6, 7, 8);
  ctx.fillRect(nativeX + 5, y - 6, 7, 8);

  // Lawyer native: black body/arms/legs with purple head accents.
  ctx.fillStyle = '#6d3f8f';
  ctx.fillRect(lawyerX - 14, lawyerY - 52, 28, 8);
  ctx.fillStyle = '#2f1f38';
  ctx.fillRect(lawyerX - 6, lawyerY - 62, 12, 10);
  ctx.fillStyle = '#67ff9f';
  ctx.fillRect(lawyerX - 9, lawyerY - 46, 5, 4);
  ctx.fillRect(lawyerX + 4, lawyerY - 46, 5, 4);
  ctx.fillStyle = '#0f1014';
  ctx.fillRect(lawyerX - 18, lawyerY - 44, 36, 42); // body
  ctx.fillRect(lawyerX - 24, lawyerY - 30, 8, 22); // left arm
  ctx.fillRect(lawyerX + 16, lawyerY - 30, 8, 22); // right arm
  ctx.fillRect(lawyerX - 12, lawyerY - 6, 8, 8); // left leg
  ctx.fillRect(lawyerX + 4, lawyerY - 6, 8, 8); // right leg
  ctx.fillStyle = '#f3f5fa';
  ctx.fillRect(lawyerX - 2, lawyerY - 40, 4, 26); // tie

  const bubbleForLawyer = (text) => {
    const isLong = text.length > 28;
    const width = isLong ? 360 : 180;
    const height = isLong ? 34 : 20;
    ctx.fillStyle = '#f2f5ff';
    ctx.fillRect(lawyerX - 34, lawyerY - 106, width, height);
    ctx.fillStyle = '#262d3e';
    ctx.font = 'bold 12px Verdana';
    if (isLong) {
      ctx.fillText('No scamming! give us what we want', lawyerX - 28, lawyerY - 92);
      ctx.fillText('and make it double!', lawyerX - 28, lawyerY - 78);
    } else {
      ctx.fillText(text, lawyerX - 28, lawyerY - 86);
    }
  };
  const bubbleForNative = (text) => {
    ctx.fillStyle = '#f2f5ff';
    ctx.fillRect(nativeX - 46, y - 102, 168, 20);
    ctx.fillStyle = '#262d3e';
    ctx.font = 'bold 12px Verdana';
    ctx.fillText(text, nativeX - 40, y - 88);
  };

  let raspStage = 0;
  if (tick > hopEnd && tick <= line1End) {
    bubbleForLawyer('Hey!');
    raspStage = 1;
  } else if (tick > line1End && tick <= line2End) {
    bubbleForNative('what do u want?!');
    raspStage = 2;
  } else if (tick > line2End && tick <= line3End) {
    bubbleForLawyer('You scammed us!');
    raspStage = 3;
  } else if (tick > line3End && tick <= line4End) {
    bubbleForNative('so?');
    raspStage = 4;
  } else if (tick > line4End && tick <= line5End) {
    bubbleForLawyer('No scamming! give us what we want and make it double!');
    raspStage = 5;
  } else if (tick > talkEnd) {
    ctx.fillStyle = '#b9ff8d';
    ctx.font = 'bold 18px Verdana';
    ctx.fillText('CASE CLOSED', 412, 220);
  }

  if (raspStage > 0 && animData.lawyerRaspStage !== raspStage) {
    playNativeRaspSound();
    animData.lawyerRaspStage = raspStage;
  }
}

function drawFlyEncounter() {
  const { x, y } = getCrawlerPosition();
  const tick = state.eventAnim ? state.eventAnim.tick : 0;
  const data = state.eventAnim && state.eventAnim.data ? state.eventAnim.data : {};
  const originX = typeof data.originX === 'number' ? data.originX : x + 70;
  const originY = typeof data.originY === 'number' ? data.originY : y - 56;

  const phase1 = 30; // hover
  const phase2 = 46; // exclamation
  const phase3 = 92; // five bounce hits
  const phase4 = 118; // retreat
  const phase5 = 136; // question bubble
  const phase6 = 156; // laser shot
  const phase7 = 184; // fall + flag
  const phase8 = 206; // flag lowers, fly gone, gun retracts

  let flyX = originX;
  let flyY = originY;
  let bubble = '';
  let showLaser = false;
  let showGun = false;
  let upsideDown = false;
  let showFlag = false;
  let flyVisible = true;

  if (tick <= phase1) {
    flyY = originY + Math.sin(tick * 0.45) * 3;
  } else if (tick <= phase2) {
    flyY = originY + Math.sin(tick * 0.5) * 3;
    bubble = '!';
  } else if (tick <= phase3) {
    const p = (tick - phase2) / (phase3 - phase2);
    const bounces = 5;
    const idx = Math.floor(p * bounces);
    const local = (p * bounces) - idx;
    const targetX = x + 14;
    const targetY = y - 24;
    if (local < 0.5) {
      const t = local / 0.5;
      flyX = originX + ((targetX - originX) * t);
      flyY = originY + ((targetY - originY) * t) - Math.sin(t * Math.PI) * 10;
    } else {
      const t = (local - 0.5) / 0.5;
      flyX = targetX + ((originX - targetX) * t);
      flyY = targetY + ((originY - targetY) * t) - Math.sin(t * Math.PI) * 8;
    }
    // Hit flashes on contact.
    if (local > 0.42 && local < 0.58) {
      ctx.fillStyle = 'rgba(255, 90, 90, 0.22)';
      ctx.fillRect(x - 36, y - 74, 72, 80);
    }
  } else if (tick <= phase4) {
    const t = (tick - phase3) / (phase4 - phase3);
    flyX = x + 14 + ((originX - (x + 14)) * t);
    flyY = y - 24 + ((originY - (y - 24)) * t);
  } else if (tick <= phase5) {
    flyY = originY + Math.sin(tick * 0.5) * 2;
    bubble = '?';
  } else if (tick <= phase6) {
    flyY = originY + Math.sin(tick * 0.35) * 2;
    showGun = true;
    if (tick > phase5 + 2) {
      showLaser = true;
    }
  } else if (tick <= phase7) {
    const t = (tick - phase6) / (phase7 - phase6);
    flyX = originX;
    flyY = originY + (t * 46);
    upsideDown = true;
    showFlag = false;
    showGun = true;
  } else if (tick <= phase8) {
    // aftermath pause: fly gone and gun retracting.
    flyVisible = false;
    showGun = tick < (phase7 + 8);
    showFlag = true;
  } else {
    flyVisible = false;
    showGun = false;
  }

  if (showGun) {
    ctx.fillStyle = '#81889d';
    ctx.fillRect(x + 6, y - 50, 6, 8);
    ctx.fillStyle = '#a8b1ca';
    ctx.fillRect(x + 12, y - 48, 10, 3);
  }

  if (showLaser) {
    ctx.strokeStyle = '#ff3131';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 22, y - 47);
    ctx.lineTo(flyX - 8, flyY + 2);
    ctx.stroke();
    ctx.fillStyle = '#ffb3b3';
    ctx.fillRect(flyX - 10, flyY - 2, 4, 4);
  }

  if (flyVisible) {
    const top = Math.round(flyY);
    const left = Math.round(flyX);
    ctx.fillStyle = '#1e1f24';
    ctx.fillRect(left - 20, top - 10, 40, 20);
    ctx.fillStyle = '#2a2d34';
    ctx.fillRect(left - 14, top - 14, 28, 8);
    ctx.fillStyle = '#9de0ff';
    ctx.fillRect(left - 24, top - 6, 6, 10);
    ctx.fillRect(left + 18, top - 6, 6, 10);
    ctx.fillStyle = '#ff3f3f';
    ctx.fillRect(left - 8, top - 9, 4, 4);
    ctx.fillRect(left + 4, top - 9, 4, 4);
    ctx.fillStyle = '#121318';
    ctx.fillRect(left - 16, top + 9, 32, 3);
    if (upsideDown) {
      ctx.fillStyle = '#e6e8ef';
      ctx.fillRect(left - 6, top - 2, 12, 2);
    }
  }

  if (bubble) {
    ctx.fillStyle = '#f0f4ff';
    ctx.fillRect(flyX - 6, flyY - 34, 18, 14);
    ctx.fillStyle = '#232730';
    ctx.font = 'bold 12px Verdana';
    ctx.fillText(bubble, flyX + 1, flyY - 23);
  }

  if (showFlag && tick <= phase8) {
    const up = Math.min(1, Math.max(0, (tick - phase7) / 8));
    const down = tick > (phase7 + 10) ? Math.min(1, (tick - (phase7 + 10)) / 10) : 0;
    const p = Math.max(0, up - down);
    const wave = Math.sin(tick * 0.45) * 1.5;
    ctx.fillStyle = '#d2d6df';
    ctx.fillRect(originX + 16, originY + 14 - (p * 10), 2, 14);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(originX + 18, originY + 15 + wave - (p * 10), 9, 5);
  }
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
    if (item.key === 'fly' && state.sprayArmed) {
      return {
        ...item,
        weight: 0,
      };
    }

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
state.investorCount = loadStoredInvestorCount();
state.mathModeEnabled = loadStoredMathModeEnabled();
state.mathModeOperator = loadStoredMathModeOperator();
const setupSettings = loadStoredSetupSettings();
state.masterVolume = setupSettings.volume;
state.showTrack = setupSettings.showTrack;
state.uiClickSoundEnabled = setupSettings.uiClickSoundEnabled;
state.animationSpeed = setupSettings.animationSpeed;
state.loadoutBonus = loadStoredLoadout();
state.records = loadStoredRecords();
state.lore = loadStoredTablets();
state.colonizeDelayTarget = loadColonizeDelay();
state.colony = loadStoredColony();
window.openColonyMapFromUi = openColonyMap;
window.delayColonizationFromUi = delayColonizationPrompt;
window.showColonyPanelFromUi = showColonyPanel;
window.showSetupFromUi = showSetup;
window.buildColonyFromUi = buildColonyBuilding;
state.hp = state.maxHp;
state.turnsToWin = 20;
state.trackLength = 22;
syncInventoryUi();
syncHud();
syncRecordsUi();
syncLoreUi();
syncColonizeUi();
syncMathModeUi();
syncSetupSettingsUi();
syncSetupShopUi();
draw();
