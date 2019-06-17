let fruits = new Fruits();
let basket = new Basket();

class Game {
  constructor() {
    this.fruits = [];
  }

  setup() {
    basket.setup();
  }

  draw() {
    basket.draw();
    // basket.mousePressed();

    if (frameCount % 50 === 0) {
      this.fruits.push(new Fruits(random(50, WIDTH - 100)));
      this.fruits[this.fruits.length - 1].setup();
    }

    this.fruits.forEach((fruit, i) => {
      fruit.draw();
      if (fruit.checkCollision(basket)) {
        this.fruits.splice(i, 1);
        if (fruit.randomFruitName.includes("scruffy")) {
          basket.point--;
          console.log(basket.point);
        } else {
          basket.point++;
          console.log(basket.point);
        }
      }
      if (fruit.y1 > HEIGHT) {
        this.fruits.splice(i, 1);
        basket.point--;
        console.log(basket.point);
      }
    });
  }

  // framecount %
  // this.fruitsArray.push(new Fruits())
  // this.fruitsArray.forEach....man kann nur

  mouseMoved() {
    basket.mouseMoved();
  }
}
