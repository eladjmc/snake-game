let inputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  updateInputDirection(e.key);
});

export function getInputDirection() {
  return inputDirection;

}

function updateInputDirection(key) {
  switch (key) {
    case "ArrowUp" + ignoreVerticalInput():
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown" + ignoreVerticalInput():
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft" + ignoreHorizontalInput():
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight" + ignoreHorizontalInput():
      inputDirection = { x: 1, y: 0 };
      break;
    default:
      break;
  }
}

const ignoreVerticalInput = () => (inputDirection.y ? "No" : "");
const ignoreHorizontalInput = () => (inputDirection.x ? "No" : "");
