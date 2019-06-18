let fruits = new Fruits();
let basket = new Basket();
let point = 0;

class Game {
  constructor() {
    this.fruits = [];
    this.pace = 8;
  }

  setup() {
    basket.setup();
  }

  draw() {
    basket.draw();
    if (frameCount % 60 == 0) {
      if (point >= 1) point--;
    }
    text(point, 30, 30);
    if (frameCount % 50 === 0) {
      this.fruits.push(new Fruits(random(50, WIDTH - 100)));
      this.fruits[this.fruits.length - 1].setup();
    }

    this.fruits.forEach((fruit, i) => {
      fruit.draw();
      if (fruit.checkCollision(basket)) {
        this.fruits.splice(i, 1);
        if (fruit.randomFruitName.includes("scruffy")) {
          basket.point = basket.point - 5;
          document.getElementById("credit").innerHTML = "-5";
          setTimeout(() => {
            document.getElementById("credit").innerHTML = "";
          }, 300);
          document.getElementById("score").innerHTML = "Score: " + basket.point;
        } else if (fruit.randomFruitName.includes("shit")) {
          basket.point = basket.point - 10;
          document.getElementById("credit").innerHTML = "-10";
          setTimeout(() => {
            document.getElementById("credit").innerHTML = "";
          }, 300);
          document.getElementById("score").innerHTML = "Score: " + basket.point;
        } else if (fruit.randomFruitName.includes("gold")) {
          basket.point = basket.point + 10;
          document.getElementById("credit").innerHTML = "+10";
          setTimeout(() => {
            document.getElementById("credit").innerHTML = "";
          }, 300);
          document.getElementById("score").innerHTML = "Score: " + basket.point;
        } else if (fruit.randomFruitName.includes("surprise")) {
          let rand = Math.round(Math.random() * 3);
          if (rand === 0) {
            point = 5;

            this.pace = 20;
            document.getElementById("special").innerHTML = "turbo mode";
            setTimeout(() => {
              this.pace = 8;
              document.getElementById("special").innerHTML = "";
            }, 5000);
          }
          if (rand === 1) {
            point = 5;

            this.pace = 4;
            document.getElementById("special").innerHTML = "slow mode";
            setTimeout(() => {
              this.pace = 8;
              document.getElementById("special").innerHTML = "";
            }, 5000);
          }
          if (rand === 2) {
            point = 5;

            basket.width = 40;
            basket.height = 40;
            document.getElementById("special").innerHTML = "tiny basket mode";
            setTimeout(() => {
              basket.width = 100;
              basket.height = 100;
              document.getElementById("special").innerHTML = "";
            }, 5000);
          }
          if (rand === 3) {
            point = 5;

            basket.width = 300;
            basket.height = 100;
            document.getElementById("special").innerHTML = "huge basket mode";
            setTimeout(() => {
              basket.width = 100;
              basket.height = 100;
              document.getElementById("special").innerHTML = "";
            }, 5000);
          }
        } else {
          basket.point++;
          document.getElementById("score").innerHTML = "Score: " + basket.point;
          document.getElementById("credit").innerHTML = "+1";
          setTimeout(() => {
            document.getElementById("credit").innerHTML = "";
          }, 300);
        }
      }

      if (fruit.y1 > HEIGHT) {
        this.fruits.splice(i, 1);
        if (fruit.randomFruitName.includes("scruffy" || "surprise")) {
          basket.point = basket.point;
        } else {
          basket.point = basket.point - 5;
          document.getElementById("credit").innerHTML = "-5";
          setTimeout(() => {
            document.getElementById("credit").innerHTML = "";
          }, 300);
          document.getElementById("score").innerHTML = "Score: " + basket.point;
        }
      }
    });
  }

  mouseMoved() {
    basket.mouseMoved();
  }

  // framecount %
  // this.fruitsArray.push(new Fruits())
  // this.fruitsArray.forEach....man kann nur
}
