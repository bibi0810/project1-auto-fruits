class Background {
  constructor() {
    this.x = 0;
    this.y = HEIGHT;
  }

  setup() {
    this.backgroundImage = loadImage("assets/background_nature.png");
  }

  draw() {
    image(this.backgroundImage, this.x, 0, WIDTH, HEIGHT);
  }
}
