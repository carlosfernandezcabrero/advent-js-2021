export default function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const result = [0, 0, 0, 0, 0, 0];
  let sum = 0;

  for (let i = coins.length - 1; i >= 0; i--) {
    while (coins[i] + sum <= change) {
      result[i]++;
      sum += coins[i];
    }
  }

  return result;
}

console.log(getCoins(100));
