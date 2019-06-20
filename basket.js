class Basket {
  constructor() {
    this.x = WIDTH / 2;
    this.y = 350;
    this.width = 100;
    this.height = 100;
    this.point = 0;
    this.show = true;
    this.win = false;
  }

  setup() {
    this.image = loadImage("assets/wicker-basket-icon-535020.png");
  }

  draw() {
    if (this.show === true)
      image(this.image, this.x, this.y, this.width, this.height);
  }

  hide() {
    this.show = false;
  }

  mouseMoved() {
    this.x = mouseX;
  }
}
