import { getInputDirection } from "./input.js";

let newSegment = 0;

export const SNAKE_SPEED = 2;
const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
];

export function update() {
  const inputDirection = getInputDirection();
  addSegments();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegment += amount;
}
export const onSnake = (position, ignoreHead = false) => {
  snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) {
      return false;
    }
    return equalsPositions(segment, position);
  });
};

const equalsPositions = (segment, position) =>
  segment.x === position.x && segment.y === position.y;

const addSegments = () => {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegment = 0;
};

const getSnakeHead = () => snakeBody[0];

export const reachSelf = () => onSnake(snakeBody[0], true);
