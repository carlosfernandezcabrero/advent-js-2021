export default function learn(time, courses) {
  const bestOption = {
    value: 0,
    indexes: null
  }

  for (let x = 0; x < courses.length; x++) {
    for (let y = x + 1; y < courses.length; y++) {
      const sum = courses[x] + courses[y]

      if (sum <= time && sum > bestOption.value){
        bestOption.value = sum
        bestOption.indexes = [x, y]
      }
    }
  }

  return bestOption.indexes ? bestOption.indexes : null
}

console.log(learn(10, [2, 3, 8, 1, 4]))
console.log(learn(15, [2, 10, 4, 1]))
console.log(learn(25, [10, 15, 20, 5]))
console.log(learn(8, [8, 2, 1]))
console.log(learn(8, [8, 2, 1, 4, 3]))
console.log(learn(4, [10, 14, 20]))
console.log(learn(5, [5, 5, 5]))