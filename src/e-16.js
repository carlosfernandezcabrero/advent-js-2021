export default function decodeNumbers(symbols) {
  const data = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };
  let sum = 0;

  for (let i = 0; i < symbols.length; i++) {
    if (data[symbols[i]] < data[symbols[i + 1]]) {
      sum -= data[symbols[i]];
    } else {
      sum += data[symbols[i]];
    }
  }
  return sum;
}

console.log(decodeNumbers('.........!'));
