const obstacles = [2, 4, 6, 8, 10];

export default function getMinJump(obstacles) {
  const maxJump = Math.max(...obstacles) + 1;
  let isPerfectJump;
  let perfectJump;

  for (let i = 1; i <= maxJump; i++) {
    isPerfectJump = true;
    perfectJump = i;
    for (let z = 0; z < maxJump; z += i) {
      if (obstacles.find((e) => e === z)) {
        isPerfectJump = false;
        break;
      }
    }
    if (isPerfectJump) break;
  }

  return perfectJump;
}

console.log(getMinJump(obstacles));
