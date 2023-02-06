const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colors = [
  "#b4b2b5",
  "#dfd73f",
  "#6ed2dc",
  "#66cf5d",
  "#c542cb",
  "#d0535e",
  "#3733c9",
];

let linePos = 0,
  rAF;

canvas.width = innerWidth;
canvas.height = innerHeight;

function texts(color) {
  ctx.font = "20vh Bungee Outline";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillStyle = color;
  ctx.setTransform(1, -0.15, 0, 1, 0, -10);
  ctx.fillText("TI Hub", innerWidth / 2, innerHeight / 1.75 - 5);

  ctx.fillStyle = "white";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillText("TI Hub", innerWidth / 2, innerHeight / 1.75);

  ctx.font = "18vh Bungee Inline";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillStyle = "#fff";
  ctx.setTransform(1, -0.15, 0, 1, 0, -10);
  ctx.fillText(
    "w Budowie",
    innerWidth / 2,
    innerHeight / 1.75 + innerHeight / 10
  );

  ctx.font = "8vh Bungee Outline";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillStyle = "#fff";
  ctx.setTransform(1, 0, 0, 1, 0, -10);
  ctx.fillText("Jakub Gożuk", innerWidth / 2, innerHeight / 13);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
}

function glitch() {
  rAF = window.requestAnimationFrame(glitch);

  ctx.fillStyle = "#1a191c";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  texts(colors[Math.floor(Math.random() * 7)]);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
  ctx.setTransform(1, 0, 0, 0.8, 0.2, 0);
}

glitch();

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
