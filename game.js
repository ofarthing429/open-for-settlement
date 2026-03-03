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
const openColonyMapBtn = document.getElementById('openColonyMapBtn');
const backToSetupBtn = document.getElementById('backToSetupBtn');
const colonyLog = document.getElementById('colonyLog');
const colonyTerritoryPanel = document.getElementById('colonyTerritoryPanel');
const territoryMap = document.getElementById('territoryMap');
const closeColonyMapBtn = document.getElementById('closeColonyMapBtn');
const farmCount = document.getElementById('farmCount');
const powerPlantCount = document.getElementById('powerPlantCount');
const mineCount = document.getElementById('mineCount');
const factoryCount = document.getElementById('factoryCount');
const businessHouseCount = document.getElementById('businessHouseCount');
const storageHouseCount = document.getElementById('storageHouseCount');
const barracksCount = document.getElementById('barracksCount');
const buildFarmBtn = document.getElementById('buildFarmBtn');
const buildPowerPlantBtn = document.getElementById('buildPowerPlantBtn');
const buildMineBtn = document.getElementById('buildMineBtn');
const buildFactoryBtn = document.getElementById('buildFactoryBtn');
const buildBusinessHouseBtn = document.getElementById('buildBusinessHouseBtn');
const buildStorageBtn = document.getElementById('buildStorageBtn');
const buildBarracksBtn = document.getElementById('buildBarracksBtn');

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

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const POINTS_STORAGE_KEY = 'black-sand-colony-run-points';
const MAX_HP_STORAGE_KEY = 'black-sand-colony-run-max-hp';
const INVESTOR_STORAGE_KEY = 'black-sand-colony-run-investor';
const RECORD_RUNS_STORAGE_KEY = 'black-sand-colony-run-record-runs';
const RECORD_WINS_STORAGE_KEY = 'black-sand-colony-run-record-wins';
const RECORD_BEST_POINTS_STORAGE_KEY = 'black-sand-colony-run-record-best-points';
const RECORD_BEST_TURNS_STORAGE_KEY = 'black-sand-colony-run-record-best-turns';
const TABLET_STORAGE_KEY = 'black-sand-colony-run-tablets';
const COLONY_STORAGE_KEY = 'black-sand-colony-run-colony';
const COLONIZE_DELAY_STORAGE_KEY = 'black-sand-colony-run-colonize-delay';

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
};

const REGION_MASKS = {
  forest: new Set(['2,2', '3,2', '4,2', '2,3', '3,3', '4,3', '3,4']),
  flats: new Set(['8,2', '9,2', '10,2', '8,3', '9,3', '10,3', '9,4']),
  capital: new Set(['8,5', '9,5', '10,5', '8,6', '9,6', '10,6', '9,7']),
  mergi: new Set(['2,8', '3,8', '4,8', '5,8', '6,8', '3,9', '4,9', '5,9', '6,9', '4,10', '5,10', '6,10']),
};

const TABLETS = {
  terrarex: {
    title: 'Ancient Tablet: Terrarex',
    body: `The great city of Terrarex, thought to be unstoppable, was wiped out by the Elder Vermis. The horrific monster annihilated Terrarex by turning the land against them. The land swallowed Terrarex, and no person could escape their prison. The people of Terrarex made a secret tunnel that led to the surface in which the exact coordinates are unknown, and inside, there are greater treasures and wisdom than one could ever imagine. But, it is cursed, those that search for it in the Mergi Wastes never return.\n\nScrawled at the bottom of the text lay the coordinates of the temple.`,
  },
};

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
  investorOwned: false,
  traderOffers: [],
  traderSellOffers: [],
  traderOpen: false,
  tabletOpen: false,
  colonyMapOpen: false,
  colonizeDelayTarget: 0,
  colony: null,
  lore: {
    terrarex: false,
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
  { key: 'natives', weight: 8, text: 'Native traders flag you down from the dunes.' },
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
  state.traderOpen = false;
  state.tabletOpen = false;
  state.colonyMapOpen = false;
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
readTabletBtn.addEventListener('click', () => openTabletReader('terrarex'));
closeTabletBtn.addEventListener('click', closeTabletReader);
colonizeYesBtn.addEventListener('click', openColonyMap);
colonizeNoBtn.addEventListener('click', delayColonizationPrompt);
manageColonyBtn.addEventListener('click', showColonyPanel);
cancelColonizeBtn.addEventListener('click', showSetup);
advanceColonyBtn.addEventListener('click', advanceColonyCycle);
openColonyMapBtn.addEventListener('click', openColonyTerritoryMap);
backToSetupBtn.addEventListener('click', showSetup);
closeColonyMapBtn.addEventListener('click', closeColonyTerritoryMap);

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
  state.lore = loadStoredTablets();
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
  state.inventory.repairKits = 3;
  state.inventory.antiNibSpray = 2;
  state.inventory.sonarDisrupter = 0;
  state.inventory.bouncer = 1;
  state.inventory.specialPickaxes = 0;
  state.inventory.windmills = 0;
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
  state.traderOffers = [];
  state.traderSellOffers = [];
  state.traderOpen = false;
  state.tabletOpen = false;
  state.colonyMapOpen = false;

  titlePanel.classList.add('hidden');
  setupPanel.classList.add('hidden');
  gamePanel.classList.remove('hidden');
  colonyMapPanel.classList.add('hidden');
  colonyPanel.classList.add('hidden');
  nativeTraderPanel.classList.add('hidden');
  tabletPanel.classList.add('hidden');
  colonyTerritoryPanel.classList.add('hidden');
  nextTurnBtn.disabled = false;

  log.innerHTML = '';
  addLog(`Mission start. Reach turn ${state.turnsToWin} to win.`, 'good');
  addLog(`Starting food: ${state.food}. Food drain is 10 per turn.`);

  syncHud();
  syncInventoryUi();
  syncRecordsUi();
  syncLoreUi();
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
  setupPanel.classList.remove('hidden');
  state.points = loadStoredPoints();
  state.colonizeDelayTarget = loadColonizeDelay();
  state.colony = loadStoredColony();
  syncRecordsUi();
  syncLoreUi();
  syncColonizeUi();
}

function advanceTurn() {
  if (!state.running || state.gameOver || state.traderOpen || state.tabletOpen) {
    return;
  }

  processTurn({ skipHazards: false, skipLabel: '' });
}

function processTurn({ skipHazards, skipLabel = '' }) {
  if (!state.running || state.gameOver || state.traderOpen || state.tabletOpen) {
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
    state.points += state.investorOwned ? 2 : 1;
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
      processTurn({ skipHazards: true, skipLabel: autoSkipLabel });
    }
  }
}

function applyEvent(event) {
  if (!event || event.key === 'none') {
    addLog('No hazard this turn. Black dunes stay still.', 'good');
    triggerEventAnimation('none', 32);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  const isGoodEvent = event.key === 'wreckage' || event.key === 'orchard';
  addLog(event.text, isGoodEvent ? 'good' : 'bad');

  if (event.kill) {
    if (state.sonarArmed) {
      state.sonarArmed = false;
      addLog('Sonar disrupter scattered the worm before it surfaced.', 'good');
      triggerEventAnimation('sonar', 64);
      return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
    }

    state.hp = 0;
    state.deathMode = 'worm';
    triggerEventAnimation('worm', 72);
    endGame('The worm devoured your crawler.', 'worm');
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'nibblorax') {
    if (state.sprayArmed) {
      state.sprayArmed = false;
      addLog('Spray blast repelled the Nibblorax.', 'good');
      triggerEventAnimation('spray', 60);
      return { sprayConsumed: true, autoSkipTurns: 0, autoSkipLabel: '' };
    }

    const eaten = randInt(15, 150);
    state.food = Math.max(0, state.food - eaten);
    addLog(`Nibblorax eats ${eaten} food.`, 'bad');
    triggerEventAnimation('nibblorax', 68, { eaten });
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'natives') {
    openNativeTrader();
    triggerEventAnimation('natives', 88);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'tablet') {
    collectTablet('terrarex');
    triggerEventAnimation('tablet', 84);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'wreckage') {
    state.hp = Math.min(state.maxHp, state.hp + 25);
    applyWreckageLoot();
    triggerEventAnimation('wreckage', 56);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'orchard') {
    state.food += 50;
    triggerEventAnimation('orchard', 56);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  if (event.key === 'plutonium') {
    addLog('Plutonium burst launches you 3 turns forward with no hazards.', 'good');
    triggerEventAnimation('plutonium', 60);
    return { sprayConsumed: false, autoSkipTurns: 3, autoSkipLabel: 'Plutonium jump: hazards skipped this turn.' };
  }

  if (event.key === 'sink' && Math.random() < 0.08) {
    addLog('Native riders skim over the sinking sand and carry you clear.', 'good');
    triggerEventAnimation('nativeRide', 72);
    return { sprayConsumed: false, autoSkipTurns: 1, autoSkipLabel: 'Native riders carry you over the sink. No food spent.' };
  }

  if (event.key === 'weather' && state.windmillArmed) {
    state.windmillArmed = false;
    addLog('Windmill catches the storm and spins you past it. Free skip turn.', 'good');
    triggerEventAnimation('windmill', 72);
    return { sprayConsumed: false, autoSkipTurns: 1, autoSkipLabel: 'Windmill glide: the storm gives you a free turn.' };
  }

  if (event.key === 'coral' && state.pickaxeArmed) {
    state.pickaxeArmed = false;
    state.hp = Math.min(state.maxHp, state.hp + 20);
    addLog('Special pickaxe turns the glowcore coral into +20 HP.', 'good');
    triggerEventAnimation('pickaxe', 72);
    return { sprayConsumed: false, autoSkipTurns: 0, autoSkipLabel: '' };
  }

  state.lastDamageSource = event.key;
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

  if (consumePossiblyFakeItem('sonarDisrupter', 'The sonar disrupter is hollow. Scam device.')) {
    syncInventoryUi();
    draw();
    return;
  }

  state.sonarArmed = true;
  addLog('Sonar disrupter armed until a worm appears.', 'good');
  triggerEventAnimation('sonar', 52);
  syncInventoryUi();
  draw();
}

function useBouncer() {
  if (!state.running || state.gameOver || state.traderOpen) {
    return;
  }

  if (state.inventory.bouncer <= 0) {
    addLog('No bouncer charges left.', 'bad');
    return;
  }

  if (consumePossiblyFakeItem('bouncer', 'The bouncer charge fizzles out. Scam field.')) {
    syncInventoryUi();
    draw();
    return;
  }
  addLog('Bouncer engaged: jumping 5 turns with hazard immunity.', 'good');

  for (let i = 0; i < 5; i += 1) {
    if (state.gameOver) {
      break;
    }
    processTurn({ skipHazards: true, skipLabel: 'Bouncer field active: hazards skipped this turn.' });
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
    state.points += state.investorOwned ? 2 : 1;
    storePoints();
    resolveRoundState(true);
    nextTurnBtn.disabled = false;
    syncHud();
    syncInventoryUi();
    draw();
  }
}

function collectTablet(id) {
  const tablet = TABLETS[id];
  if (!tablet) {
    return;
  }

  if (!state.lore[id]) {
    state.lore[id] = true;
    storeTablets();
    addLog(`Recovered ${tablet.title}. It has been added to your lore archive.`, 'good');
  } else {
    addLog(`You uncover another copy of ${tablet.title}.`, 'good');
  }

  syncLoreUi();
}

function openTabletReader(id) {
  if (!state.lore[id] || !TABLETS[id]) {
    return;
  }

  const tablet = TABLETS[id];
  state.tabletOpen = true;
  tabletTitle.textContent = tablet.title;
  tabletBody.textContent = tablet.body;
  tabletPanel.classList.remove('hidden');
  nextTurnBtn.disabled = true;
  syncInventoryUi();
}

function closeTabletReader() {
  state.tabletOpen = false;
  tabletPanel.classList.add('hidden');
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

  state.colony = {
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
    },
    territory: [{ x: 6, y: 6 }],
    specialTiles: buildSpecialTilesForRegion(regionId),
    lastInstabilityCauses: [],
    log: [
      { text: `Colony ship touched down in ${region.name}.`, tone: 'good' },
      { text: region.summary, tone: '' },
    ],
  };
  state.colonizeDelayTarget = 0;
  storeColonizeDelay();
  storeColony();
  syncColonizeUi();
  showColonyPanel();
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
    parsed.powerDemand = Number.isFinite(parsed.powerDemand) ? parsed.powerDemand : 0;
    parsed.buildings.businessHouses = Number.isFinite(parsed.buildings.businessHouses) ? parsed.buildings.businessHouses : 0;
    parsed.territory = Array.isArray(parsed.territory) && parsed.territory.length > 0
      ? parsed.territory
      : [{ x: 6, y: 6 }];
    parsed.specialTiles = Array.isArray(parsed.specialTiles) ? parsed.specialTiles : buildSpecialTilesForRegion(parsed.region);
    parsed.lastInstabilityCauses = Array.isArray(parsed.lastInstabilityCauses) ? parsed.lastInstabilityCauses : [];
    parsed.log = Array.isArray(parsed.log)
      ? parsed.log.map((entry) => (typeof entry === 'string' ? { text: entry, tone: '' } : entry))
      : [];
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

function getColonyCaps(colony = state.colony) {
  const storage = colony.buildings.storageHouses;
  return {
    food: 180 + storage * 120,
    supplies: 180 + storage * 100,
    plutonium: 60 + storage * 70,
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

  const region = REGION_DATA[state.colony.region];
  const caps = getColonyCaps();
  const defense = state.colony.buildings.barracks * 2;

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

  colonyLog.innerHTML = '';
  for (const entry of state.colony.log) {
    const p = document.createElement('p');
    p.className = `logEntry ${entry.tone || ''}`.trim();
    p.textContent = entry.text;
    colonyLog.appendChild(p);
  }

  buildFarmBtn.disabled = state.colony.supplies < BUILDING_DATA.farms.suppliesCost;
  buildPowerPlantBtn.disabled = state.colony.supplies < BUILDING_DATA.powerPlants.suppliesCost;
  buildMineBtn.disabled = false;
  buildFactoryBtn.disabled = state.colony.supplies < BUILDING_DATA.factories.suppliesCost;
  buildBusinessHouseBtn.disabled = state.colony.supplies < BUILDING_DATA.businessHouses.suppliesCost;
  buildStorageBtn.disabled = state.colony.supplies < BUILDING_DATA.storageHouses.suppliesCost;
  buildBarracksBtn.disabled = state.colony.supplies < BUILDING_DATA.barracks.suppliesCost;
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

  if (state.colony.supplies < rules.suppliesCost) {
    addColonyLog(`Not enough supplies to build ${rules.label}.`, 'bad');
    syncColonyUi();
    return;
  }

  state.colony.supplies -= rules.suppliesCost;
  state.colony.buildings[kind] += 1;
  addColonyLog(`${rules.label} completed.`, 'good');
  storeColony();
  syncColonyUi();
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

function syncTerritoryMap() {
  if (!state.colony) {
    territoryMap.innerHTML = '';
    return;
  }

  const regionSet = REGION_MASKS[state.colony.region] || new Set();
  const claimed = new Set(state.colony.territory.map((tile) => `${tile.x},${tile.y}`));
  const specials = new Map((state.colony.specialTiles || []).map((tile) => [`${tile.x},${tile.y}`, tile]));
  territoryMap.innerHTML = '';

  for (let y = 0; y < 13; y += 1) {
    for (let x = 0; x < 13; x += 1) {
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
        cell.classList.add(special.type === 'copper' ? 'copper' : 'hive');
        if (special.cleared) {
          cell.classList.add('cleared');
        }
      }
      if (x === 6 && y === 6) {
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
      if (nx < 0 || nx > 12 || ny < 0 || ny > 12 || occupied.has(key)) {
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
  state.colony.territory.push(chosen);
  addColonyLog(`Colony borders expanded to ${chosen.x},${chosen.y}.`, 'good');
  resolveTerritoryClaim(chosen);
  return true;
}

function buildSpecialTilesForRegion(regionId) {
  const regionSet = REGION_MASKS[regionId];
  if (!regionSet) {
    return [];
  }

  const tiles = [...regionSet].map((key) => {
    const [x, y] = key.split(',').map(Number);
    return { x, y };
  }).filter((tile) => !(tile.x === 6 && tile.y === 6));

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
    }
  }
}

function resolveHiveInfestations(cycleIssues) {
  if (!state.colony || !Array.isArray(state.colony.specialTiles)) {
    return;
  }

  const defense = state.colony.buildings.barracks * 2;
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

  const colony = state.colony;
  const region = REGION_DATA[colony.region];
  const cycleIssues = [];
  colony.cycle += 1;
  const expansionSteps = 1 + colony.buildings.businessHouses;
  for (let i = 0; i < expansionSteps; i += 1) {
    if (!expandColonyTerritory()) {
      break;
    }
  }

  const mineOutput = Math.round(colony.buildings.mines * 8 * region.mineMult);
  colony.plutonium += mineOutput;
  addColonyLog(`Mines brought in ${mineOutput} plutonium.`, 'good');

  const plutoniumForPower = Math.min(colony.buildings.powerPlants * 2, colony.plutonium);
  colony.plutonium -= plutoniumForPower;
  const powerProduced = plutoniumForPower * 10;
  colony.power = powerProduced;

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

  const foodProduced = Math.round(colony.buildings.farms * 18 * region.foodMult * powerRatio);
  const suppliesProduced = Math.round(colony.buildings.factories * 10 * region.factoryMult * powerRatio);
  colony.food += foodProduced;
  colony.supplies += suppliesProduced;
  if (foodProduced > 0) {
    addColonyLog(`Farms produced ${foodProduced} food.`, 'good');
  }
  if (suppliesProduced > 0) {
    addColonyLog(`Factories produced ${suppliesProduced} building supplies.`, 'good');
  }

  const foodUse = 14 + colony.buildings.farms * 2 + colony.buildings.factories * 2 + colony.buildings.barracks * 3;
  colony.food -= foodUse;
  colony.supplies -= region.supplyUpkeep;
  addColonyLog(`Colony upkeep consumed ${foodUse} food and ${region.supplyUpkeep} supplies.`);

  resolveHiveInfestations(cycleIssues);
  resolveRegionCycleEvents(region, cycleIssues);

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
    addColonyLog('Colony stability has broken. Rebuilding this settlement will take another campaign.', 'bad');
  }

  state.points += region.cyclePoints;
  storePoints();
  colony.lastInstabilityCauses = cycleIssues;
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
  const defense = colony.buildings.barracks * 2;

  if (region.id !== 'capital' && Math.random() < 0.28) {
    const tribeTroops = randInt(0, Math.max(0, defense * 2));
    if (tribeTroops > 0) {
      if (defense >= tribeTroops) {
        addColonyLog(`A roaming native tribe tested the perimeter with ${tribeTroops} troops. Barracks held them off.`, 'good');
      } else {
        const shortfall = tribeTroops - defense;
        const loss = Math.max(4, shortfall * 2);
        colony.stability = Math.max(0, colony.stability - loss);
        addColonyLog(`A roaming native tribe attacked with ${tribeTroops} troops. Defense was short by ${shortfall}. Stability -${loss}.`, 'bad');
        cycleIssues.push('tribal raid');
      }
    }
  }

  if (region.id === 'forest' && Math.random() < 0.38) {
    const loss = randInt(8, 16);
    colony.supplies = Math.max(0, colony.supplies - loss);
    addColonyLog(`Glowcore coral overgrowth chewed through ${loss} supplies.`, 'bad');
    cycleIssues.push('coral overgrowth');
  }

  if ((region.id === 'forest' || region.id === 'capital') && Math.random() < 0.24) {
    const coralAttack = randInt(0, Math.max(0, Math.floor(defense * 1.5)));
    if (coralAttack > 0) {
      if (defense >= coralAttack) {
        addColonyLog(`A coral surge struck with ${coralAttack} force. Defensive walkers burned it back.`, 'good');
      } else {
        const shortfall = coralAttack - defense;
        const loss = Math.max(8, shortfall * 4);
        colony.food = Math.max(0, colony.food - loss);
        addColonyLog(`Glowing coral attacked with ${coralAttack} force. Defense was short by ${shortfall}. Food -${loss}.`, 'bad');
        cycleIssues.push('coral attack');
      }
    }
  }

  if (region.id === 'flats' && Math.random() < 0.26) {
    if (defense > 0 && Math.random() < 0.7) {
      colony.stability = Math.max(0, colony.stability - 4);
      addColonyLog('Barracks robots drove off wormsign before the flats broke open.', 'good');
      cycleIssues.push('worm pressure');
    } else {
      colony.stability = Math.max(0, colony.stability - 20);
      destroyRandomColonyBuilding();
      addColonyLog('A worm surfaced near the mines and smashed part of the colony.', 'bad');
      cycleIssues.push('worm attack');
    }
  }

  if (region.id === 'mergi') {
    const sinkLoss = randInt(10, 18);
    colony.supplies = Math.max(0, colony.supplies - sinkLoss);
    colony.stability = Math.max(0, colony.stability - 6);
    addColonyLog(`Mergi ground reinforcement ate ${sinkLoss} supplies.`, 'bad');
    cycleIssues.push('unstable ground');
    if (Math.random() < 0.4) {
      const foodLoss = randInt(20, 45);
      colony.food = Math.max(0, colony.food - foodLoss);
      addColonyLog(`Nibbloraxes stripped ${foodLoss} food from the depots.`, 'bad');
      cycleIssues.push('Nibblorax infestation');
    }
    const supplyLoss = randInt(8, 14);
    colony.supplies = Math.max(0, colony.supplies - supplyLoss);
    colony.stability = Math.max(0, colony.stability - 8);
    addColonyLog(`Sinking field supports failed. ${supplyLoss} more supplies were spent to stabilize them.`, 'bad');
    cycleIssues.push('sinking field collapse');
  }

  if (region.id === 'capital' && Math.random() < 0.55) {
    const gain = randInt(12, 26);
    colony.supplies += gain;
    state.points += 18;
    storePoints();
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

  if (offer.kind === 'foodCrate') {
    if (offer.scam) {
      addLog('The food crate was packed with black sand. Scam trade.', 'bad');
    } else {
      state.food += 50;
      addLog(`Bought Food Crate from the natives for ${offer.price} points. +50 food.`, 'good');
    }
  } else if (offer.scam) {
    state.inventory[offer.inventoryKey] += 1;
    state.fakeInventory[offer.inventoryKey] += 1;
    addLog(`The traders sell you a fake ${offer.label.toLowerCase()}.`, 'bad');
  } else {
    state.inventory[offer.inventoryKey] += 1;
    addLog(`Bought ${offer.label} from the natives for ${offer.price} points.`, 'good');
  }

  triggerEventAnimation('natives', 56, { traded: true });
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
      scam: Math.random() < picked.scamChance,
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

function resolveRoundState(checkWin, options = {}) {
  const { deferWin = false } = options;

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

  if (checkWin && !state.gameOver && !deferWin && state.turn >= state.turnsToWin) {
    addLog('Extraction signal locked. You survived the crossing.', 'good');
    triggerEventAnimation('confetti', 140);
    endGame('Mission success. You won.', 'win');
  }
}

function endGame(message, cause = '') {
  state.gameOver = true;
  state.running = false;
  state.traderOpen = false;
  state.tabletOpen = false;
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
  addLog(message, message.includes('success') ? 'good' : 'bad');
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

function loadStoredTablets() {
  try {
    const raw = window.localStorage.getItem(TABLET_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      terrarex: parsed.terrarex === true,
    };
  } catch {
    return {
      terrarex: false,
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
  }
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
  const tabletFound = state.lore.terrarex === true;
  tabletCount.textContent = tabletFound ? '1' : '0';
  tabletStatus.textContent = tabletFound ? 'Terrarex tablet recovered' : 'None';
  readTabletBtn.disabled = !tabletFound;
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
  sonarBtn.disabled = inactive || state.inventory.sonarDisrupter <= 0 || state.sonarArmed;
  bouncerBtn.disabled = inactive || state.inventory.bouncer <= 0;
  pickaxeBtn.disabled = inactive || state.inventory.specialPickaxes <= 0 || state.pickaxeArmed;
  windmillBtn.disabled = inactive || state.inventory.windmills <= 0 || state.windmillArmed;
  buyRepairBtn.disabled = state.traderOpen || state.points < 15;
  buySprayBtn.disabled = state.traderOpen || state.points < 5;
  buyBouncerBtn.disabled = state.traderOpen || state.points < 30;
  buyHpBtn.disabled = state.traderOpen || state.points < 50;
  buySonarBtn.disabled = state.traderOpen || state.points < 100;
  buyInvestorBtn.disabled = state.traderOpen || state.points < 75 || state.investorOwned;
  if (state.lore.terrarex !== true) {
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
  readTabletBtn.disabled = disabled || !state.lore.terrarex;
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

  if (type === 'nativeRide') {
    drawNativeRide();
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

function drawNatives() {
  const { x, y } = getCrawlerPosition();
  const tick = Math.floor(state.eventAnim.tick) % 3;
  const pack = [
    { ox: 54, oy: 4, scale: 1 },
    { ox: 84, oy: 0, scale: 1.15 },
    { ox: 118, oy: 8, scale: 0.95 },
  ];

  for (const native of pack) {
    const nx = x + native.ox;
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
  }

  ctx.fillStyle = '#a6ff7f';
  ctx.font = '14px Courier New';
  ctx.fillText('TRADE?', x + 42, y - 42);
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
draw();
