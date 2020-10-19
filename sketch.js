const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const BG_COLOR = [255, 224, 252];
let droplet;
let dropletAnim;

function preload() {
  const dropletSpritesheet = loadSpriteSheet("img/droplet.png", 32, 32, 12);
  dropletAnim = loadAnimation(dropletSpritesheet);
  droplet = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 32, 32);
  droplet.moveSpeed = 3;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  droplet.addAnimation("move", dropletAnim);
  droplet.addImage("still", loadImage("img/drop0.png"));
  droplet.setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  droplet.limitSpeed(droplet.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(droplet);
}
