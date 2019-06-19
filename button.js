let input;
let button;

class Button {
  constructor() {}

  setup() {
    createCanvas(100, 200);

    input = createInput();
    input.position(100, 100);

    button = createButton("submit");
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);
  }

  draw() {
    button.draw();
  }
}
