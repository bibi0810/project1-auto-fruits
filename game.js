let fruits = new Fruits();
let basket = new Basket();
let point = 0;

class Game {
  constructor() {
    this.fruits = [];
    this.pace = 6;
    this.started = false;
    this.playCount = 0;
  }

  setup() {
    basket.setup();
    this.started = true;
  }

  draw() {
    if (!backgroundSound.isPlaying()) backgroundSound.play();
    basket.draw();

    if (frameCount % 60 == 0) {
      if (point >= 1) point--;
    }
    textSize(30);
    fill(0, 102, 153, 51);
    text(point, 30, 30);
    if (frameCount % 60 === 0) {
      this.fruits.push(new Fruits(random(50, WIDTH - 100)));
      this.fruits[this.fruits.length - 1].setup();
    }

    this.fruits.forEach((fruit, i) => {
      fruit.draw();
      if (!basket.win && this.playCount == 0) {
        if (fruit.checkCollision(basket)) {
          // this.fruits.splice(i, 1);
          this.fruits = this.fruits.filter((el, idx) => idx !== i);

          if (fruit.randomFruitName.includes("scruffy")) {
            basket.point = basket.point - 5;
            if (!minusSound.isPlaying()) minusSound.play();
            document.getElementById("credit").innerHTML = "-5";
            document.getElementById("credit").style.color = "red";
            setTimeout(() => {
              document.getElementById("credit").innerHTML = "";
            }, 300);
            document.getElementById("score").innerHTML =
              "Score: " + basket.point;
          } else if (fruit.randomFruitName.includes("dynamite")) {
            basket.point = basket.point - 10;
            if (!minusSound.isPlaying()) minusSound.play();
            document.getElementById("credit").innerHTML = "-10";
            document.getElementById("credit").style.color = "red";
            if (!dynamiteSound.isPlaying()) dynamiteSound.play();
            //fail sound
            setTimeout(() => {
              document.getElementById("credit").innerHTML = "";
            }, 300);
            document.getElementById("score").innerHTML =
              "Score: " + basket.point;
          } else if (fruit.randomFruitName.includes("gold")) {
            basket.point = basket.point + 10;
            document.getElementById("credit").innerHTML = "+10";
            document.getElementById("credit").style.color = "green";
            if (!soundGold.isPlaying()) soundGold.play();
            setTimeout(() => {
              document.getElementById("credit").innerHTML = "";
            }, 300);
            document.getElementById("score").innerHTML =
              "Score: " + basket.point;
          } else if (fruit.randomFruitName.includes("surprise")) {
            if (!plusSound.isPlaying()) plusSound.play();
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
            if (!plusSound.isPlaying()) plusSound.play();
            document.getElementById("score").innerHTML =
              "Score: " + basket.point;
            document.getElementById("credit").innerHTML = "+1";
            document.getElementById("credit").style.color = "green";
            setTimeout(() => {
              document.getElementById("credit").innerHTML = "";
            }, 300);
          }
        }
      }
      if (fruit.y1 > HEIGHT) {
        // this.fruits.splice(i, 1);
        this.fruits = this.fruits.filter((el, idx) => idx !== i);
        if (
          !(
            fruit.randomFruitName.includes("surprise") ||
            fruit.randomFruitName.includes("scruffy") ||
            fruit.randomFruitName.includes("dynamite")
          ) &&
          !basket.win
        ) {
          basket.point = basket.point - 5;
          document.getElementById("credit").innerHTML = "-5";
          document.getElementById("credit").style.color = "red";
          setTimeout(() => {
            document.getElementById("credit").innerHTML = "";
          }, 300);
          document.getElementById("score").innerHTML = "Score: " + basket.point;
        }
      }
    });

    if (basket.point > 50) {
      basket.win = true;
      if (frameCount % 2 === 0) {
        console.log("drop fruit");
        this.fruits.push(new Fruits(random(50, WIDTH - 100)));
        this.fruits[this.fruits.length - 1].setup();
      }
      document.getElementById("messages").innerHTML = "YOU WON!";
      document.getElementById("messages").style.color = "green";
      document.getElementById("score").innerHTML = "YOU ARE AWESOME";
      document.getElementById("score").innerHTML = "";
      document.getElementById("credit").innerHTML = "";
      backgroundSound.stop();
      if (!soundApplause.isPlaying()) soundApplause.play();

      document.getElementsByClassName("display")[0].style.visibility = "hidden";
      basket.hide();
      button2.show();
    }
    if (basket.point < -50) {
      this.playCount++;

      if (frameCount % 2 === 0) {
        this.fruits.push(new Fruits(random(50, WIDTH - 100)));
        this.fruits[this.fruits.length - 1].setup();
      }
      document.getElementById("messages").innerHTML = "GAME OVER!";
      document.getElementById("messages").style.color = "red";
      document.getElementById("score").innerHTML = "";
      document.getElementById("credit").innerHTML = "";

      document.getElementsByClassName("display")[0].style.visibility = "hidden";
      button2.show();
      basket.hide();
      backgroundSound.stop();
      if (!soundGameover.isPlaying() && this.playCount == 1)
        soundGameover.play();
      /* soundGameover._clearOnEnd(); */
    }
  }

  mouseMoved() {
    basket.mouseMoved();
  }
}
