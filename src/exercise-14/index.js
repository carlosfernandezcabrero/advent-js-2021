export default function missingReindeer(ids) {
    for (let i = 0; i <= 100 + 1; i++) {
        if (ids.find((e) => e === i) === undefined) return i;
    }
    return -1;
}

console.log(missingReindeer([0, 1]));
