<!DOCTYPE html>
<html>
<head>
  <title>Mini GTA Clone</title>
  <style>
    canvas {
      background: #87ceeb;
      display: block;
      margin: 0 auto;
      border: 2px solid black;
    }
  </style>
<SCRIPT LANGUAGE= "JavaScript">
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Player and car
let player = {
  x: 100,
  y: 100,
  width: 30,
  height: 30,
  color: "blue",
  speed: 2,
  inCar: false
};

let car = {
  x: 300,
  y: 200,
  width: 50,
  height: 30,
  color: "red",
  speed: 4
};

function drawRect(obj) {
  ctx.fillStyle = obj.color;
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function update() {
  // Movement logic
  if (!player.inCar) {
    if (keys["ArrowUp"]) player.y -= player.speed;
    if (keys["ArrowDown"]) player.y += player.speed;
    if (keys["ArrowLeft"]) player.x -= player.speed;
    if (keys["ArrowRight"]) player.x += player.speed;

    // Enter car
    if (keys["e"]) {
      if (Math.abs(player.x - car.x) < 40 && Math.abs(player.y - car.y) < 40) {
        player.inCar = true;
      }
    }
  } else {
    // Car control
    if (keys["ArrowUp"]) car.y -= car.speed;
    if (keys["ArrowDown"]) car.y += car.speed;
    if (keys["ArrowLeft"]) car.x -= car.speed;
    if (keys["ArrowRight"]) car.x += car.speed;

    // Exit car
    if (keys["e"]) {
      player.inCar = false;
      player.x = car.x + 40;
      player.y = car.y;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRect(car);
  if (!player.inCar) drawRect(player);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();

</SCRIPT>
</head>
<body>
  <canvas id="gameCanvas" width="800" height="600"></canvas>
  <script src="game.js"></script>
</body>
</html>
