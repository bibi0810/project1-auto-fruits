let background = new Background();
let game = new Game();
let button;
let button2;
// function preload() {
//   sound = loadSound("sounds/99 Drum Samples DEMO.mp3");
// }

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");

  background.setup();

  button = createButton("START GAME");
  button.parent("game-board");
  button.style(
    "background-image: linear-gradient(red, yellow); padding: 20px; border-radius:12px; transform:translate(-50%,-50%); color:white;border:4px solid white; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 1rem;"
  );
  button.position(WIDTH / 2, HEIGHT / 4);
  button.mousePressed(startGame);

  button2 = createButton("RESTART");
  button2.parent("game-board");

  button2.style(
    "background-image: linear-gradient(red, yellow); padding: 20px; border-radius:12px; transform:translate(-50%,-50%); color:white;border:4px solid white; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 1rem;"
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
