const GRID_SIZE = 21;

export const randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

export const outsideGrid = (head) =>
  verticalOutsideGrid(head) || horizontalOutsideGrid(head);


const verticalOutsideGrid = (head) => head.y > GRID_SIZE || head.y < 1;
const horizontalOutsideGrid = (head) => head.x > GRID_SIZE || head.x < 1;
