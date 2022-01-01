const data = [
    [39, 18, 29, 25, 34, 32, 5],
    [10, 20, 30, 40, 50, 60, 70],
    [39, 18, 29, 25, 34, 32, 5],
    [6, 5, 4, 3]
];

export default function maxProfit(prices) {
    let maxProfit = 0;

    for (let x = 0; x < prices.length; x++) {
        const segment = prices.slice(x);
        const max = Math.max(...segment);
        const profit = max - prices[x];
        if (profit > maxProfit) maxProfit = profit;
    }

    return maxProfit ? maxProfit : -1;
}

data.forEach((prices) => {
    console.log(maxProfit(prices));
});
