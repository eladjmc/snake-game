import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  reachSelf,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderedTime = 0;
const gameBoard = document.querySelector(".game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondSinceRender = (currentTime - lastRenderedTime) / 1000;
  if (secondSinceRender < 1 / SNAKE_SPEED) {
    return;
  }

  lastRenderedTime = currentTime;

  update();
  draw();
//   checkDeath();
}

function update() {
  gameBoard.innerHTML = "";
  updateSnake();
  updateFood();
}

function draw() {
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

const isDead = () => outsideGrid(getSnakeHead()) || reachSelf()

window.requestAnimationFrame(main);
