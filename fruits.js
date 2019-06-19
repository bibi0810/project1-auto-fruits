class Fruits {
  constructor(x) {
    this.x1 = x;
    this.y1 = -300;
    this.fruitWidth = 50;
    this.fruitHeight = 50;
  }

  setup() {
    /*   this.banana = loadImage("assets/banana.png");
    this.strawberry = loadImage("assets/strawberry.png");
    this.grapes = loadImage("assets/grapes.png");
    this.watermelon = loadImage("assets/watermelon.png");
    this.apple = loadImage("assets/apple.png");
    this.cherries = loadImage("assets/cherries.png");
    this.kiwi = loadImage("assets/kiwi.png");
    this.pear = loadImage("assets/pear.png"); */

    this.fruitsList = [
      "banana",
      "strawberry",
      "grapes",
      "watermelon",
      "apple",
      "cherries",
      "kiwi",
      "pear",
      "banana",
      "strawberry",
      "grapes",
      "watermelon",
      "apple",
      "cherries",
      "kiwi",
      "pear",
      "surprise",
      "surprise",
      "surprise",
      "dynamite",
      "gold",
      "scruffy-banana",
      "scruffy-strawberry",
      "scruffy-grapes",
      "scruffy-watermelon",
      "scruffy-apple",
      "scruffy-cherries",
      "scruffy-kiwi",
      "scruffy-pear"
    ];

    this.randomFruitName = this.fruitsList[
      Math.floor(Math.random() * this.fruitsList.length)
    ];

    this.randomImageFruits = loadImage(`assets/${this.randomFruitName}.png`);

    /*     this.fruitsImage.forEach(function(element) {
      element.push(fruits.randomImageFruits);
    }, []); */
  }

  checkCollision(basket) {
    if (
      this.x1 > basket.x &&
      this.x1 < basket.x + basket.width &&
      this.y1 + this.fruitHeight > basket.y + 40
    ) {
      return true;
    }
  }

  draw() {
    image(
      this.randomImageFruits,
      this.x1,
      this.y1,
      this.fruitWidth,
      this.fruitHeight
    );

    this.y1 += game.pace;
  }
}

//X1 position
/*  if (frameCount % 200 == 0) {
    console.log("hahahah");
  } */

// image(this.banana, this.x1, this.y1, this.fruitHeight, this.fruitWidth);
// image(
//   this.strawberry,
//   this.x1,
//   this.y1 - this.fruitDistance,
//   this.fruitHeight,
//   this.fruitWidth
// );
// image(
//   this.grapes,
//   this.x1,
//   this.y1 - 2 * this.fruitDistance,
//   this.fruitHeight,
//   this.fruitWidth
// );
// image(
//   this.watermelon,
//   this.x1,
//   this.y1 - 3 * this.fruitDistance,
//   this.fruitHeight,
//   this.fruitWidth
// );
// image(
//   this.apple,
//   this.x1,
//   this.y1 - 4 * this.fruitDistance,
//   this.fruitHeight,
//   this.fruitWidth
// );
// image(
//   this.cherries,
//   this.x1,
//   this.y1 - 5 * this.fruitDistance,
//   this.fruitHeight,
//   this.fruitWidth
// );
// image(
//   this.pear,
//   this.x1,
//   this.y1 - 6 * this.fruitDistance,
//   this.fruitHeight,
//   this.fruitWidth
// );

// if (this.y1 >= HEIGHT + this.fruitHeight) {
//   this.y1 = -100;
// }
