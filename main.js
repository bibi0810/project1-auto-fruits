let background = new Background();
let game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  background.setup();
  game.setup();
}

function draw() {
  background.draw();
  game.draw();
}

function mouseDragged() {
  game.mouseMoved();
}

function mouseMoved() {
  game.mouseMoved();
}
