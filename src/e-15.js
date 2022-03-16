export default function checkSledJump(heights) {
  let isGoingUp = true;
  let isComingDown = false;
  let sumGoingUp = 0;
  let sumComingDown = 0;

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) return false;
    if (isGoingUp) {
      sumGoingUp += heights[i] - heights[i - 1];
    }
    if (isComingDown) {
      sumComingDown += heights[i - 1] - heights[i];
    }
    if (heights[i - 1] > heights[i] && heights[i] < heights[i + 1]) {
      isGoingUp = true;
      isComingDown = false;
      if (sumComingDown !== sumGoingUp) return false;
      sumGoingUp = 0;
      sumComingDown = 0;
    }
    if (heights[i - 1] < heights[i] && heights[i] > heights[i + 1]) {
      isGoingUp = false;
      isComingDown = true;
    }
  }

  if (!isComingDown) return false;

  return true;
}

console.log(checkSledJump([2, 4, 4, 6, 2]));
