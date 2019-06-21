let background = new Background();
let game = new Game();
let button;
let button2;
let soundApplause;
let soundGameover;
let soundGold;
let countdown;
let backgroundSound;
let dynamiteSound;
let minusSound;
let plusSound;

function preload() {
  soundApplause = loadSound("sounds/applause.wav");
  soundGameover = loadSound("sounds/KL Peach Game Over III.mp3");
  soundGold = loadSound("sounds/shimmer_1.flac");
  countdown = loadSound("sounds/Slow Office Clock Tick Sfx.wav");
  backgroundSound = loadSound("sounds/99 Drum Samples.mp3");
  dynamiteSound = loadSound("sounds/Fire impact 1.wav");
  minusSound = loadSound("sounds/sfx_sounds_damage3.wav");
  plusSound = loadSound("sounds/sfx_sound_neutral8.wav");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");

  background.setup();

  button = createButton("START GAME");
  button.parent("game-board");
  button.style(
    "background-image: linear-gradient(red, yellow, green, blue, pink, purple); padding: 20px; border-radius:12px; transform:translate(-50%,-50%); color:white;border:4px solid white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande'"
  );
  button.position(WIDTH / 2, HEIGHT / 4);
  button.mousePressed(startGame);

  button2 = createButton("RESTART");
  button2.parent("game-board");

  button2.style(
    "background-image: linear-gradient(red, yellow, green, blue, pink, purple); padding: 20px; border-radius:12px; transform:translate(-50%,-50%); color:white;border:4px solid white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande'"
  );
  button2.position(WIDTH / 2, HEIGHT / 4);
  button2.mousePressed(restartGame);
  button2.hide();
}

function restartGame() {
  location.reload();
}

function startGame() {
  button.hide();

  game.setup();
}

function draw() {
  background.draw();
  if (game.started == true) {
    game.draw();
  }
  if (game.started == false) {
    button.show();
  }
}

function mouseDragged() {
  game.mouseMoved();
}

function mouseMoved() {
  game.mouseMoved();
}
