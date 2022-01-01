export default function shouldBuyFidelity(times) {
    const normal = times * 12;
    let fidelity = 250;
    let currentPrice = 12;

    for (let i = 0; i < times; i++) {
        currentPrice *= 0.75;
        fidelity += currentPrice;
    }

    return normal > fidelity ? true : false;
}

console.log(shouldBuyFidelity(1));
