export default function wrapGifts(gifts) {
    switch (gifts.length) {
        case 0:
            return gifts;
        default: {
            const result = [];
            const maxLength = Math.max(...gifts.map((e) => e.length)) + 2;
            const baseString = "".padStart(maxLength, "*");

            result.push(baseString);

            gifts.forEach((element) => {
                result.push(`*${element}*`);
            });

            result.push(baseString);

            return result;
        }
    }
}

console.log(wrapGifts(["📷", "⚽️"]));
