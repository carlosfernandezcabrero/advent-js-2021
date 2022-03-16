export default function createXmasTree(height) {
  const maxAsterisks = height * 2;
  let startAsterisks = maxAsterisks / 2;
  let endAsterisks = maxAsterisks / 2;
  let result = '';
  let baseXmasTree = '';

  for (let x = 1; x <= 2; x++) {
    for (let z = 1; z <= maxAsterisks - 1; z++) {
      z >= startAsterisks && z <= endAsterisks
        ? (baseXmasTree += '#')
        : (baseXmasTree += '_');
    }
    if (x !== 2) baseXmasTree += '\n';
  }

  for (let x = 1; x <= height; x++) {
    for (let z = 1; z <= maxAsterisks - 1; z++) {
      z >= startAsterisks && z <= endAsterisks
        ? (result += '*')
        : (result += '_');
    }
    result += '\n';
    startAsterisks--;
    endAsterisks++;
  }

  return result.concat(baseXmasTree);
}

console.log(createXmasTree(5));
