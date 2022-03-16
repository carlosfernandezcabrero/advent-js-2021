const data = [
  [[3, 5, 7, 2], 10],
  [[-3, -2, 7, -5], 10],
  [[2, 2, 3, 1], 4],
  [[6, 7, 1, 2], 8],
  [[0, 2, 2, 3, -1, 1, 5], 6],
];

export default function sumPairs(numbers, result) {
  for (let x = 0; x < numbers.length; x++) {
    for (let z = x + 1; z < numbers.length; z++) {
      if (numbers[x] + numbers[z] === result) {
        return [numbers[x], numbers[z]];
      }
    }
  }
  return null;
}

data.forEach((e) => {
  console.log(sumPairs(e[0], e[1]));
});
