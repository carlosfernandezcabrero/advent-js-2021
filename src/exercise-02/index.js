const letter = "bici    coche balón _playstation bici coche peluche";

export default function listGifts(letter) {
    const validGifts = letter
        .split(" ")
        .filter((e) => e[0] !== "_" && e.length > 0);

    const result = {};
    validGifts.forEach((element) => {
        const matches = validGifts.filter((e) => e === element);
        result[element] = matches.length;
    });

    return result;
}

console.log(listGifts(letter));
