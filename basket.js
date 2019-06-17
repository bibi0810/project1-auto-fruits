class Basket {
  constructor() {
    this.x = WIDTH / 2;
    this.y = 350;
    this.width = 100;
    this.height = 100;
    this.point = 0;
  }

  setup() {
    this.image = loadImage("assets/wicker-basket-icon-535020.png");
  }

  draw() {
    image(this.image, this.x, this.y, this.width, this.height);
  }

  // mousePressed() {
  //   this.startX = mouseX;
  // }

  mouseMoved() {
    this.x = mouseX;
  }
}
