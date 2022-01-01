const data = [
    [[6.1, 4.2, 6.3], Math.floor],
    [["one", "two", "three"], "length"],
    [
        [
            { title: "JavaScript: The Good Parts", rating: 8 },
            { title: "Aprendiendo Git", rating: 10 },
            { title: "Clean Code", rating: 9 }
        ],
        "rating"
    ],
    [[{ age: 23 }, { age: 24 }], "age"]
];

export default function groupBy(collection, it) {
    const result = {};

    if (typeof collection === "object") {
        collection = Object.values(collection);
    }

    collection.forEach((element) => {
        let resultFunction;

        switch (typeof it) {
            case "function":
                resultFunction = it(element);
                break;
            case "string":
                resultFunction = element[it];
                break;
            default:
                break;
        }

        result[resultFunction]
            ? result[resultFunction].push(element)
            : (result[resultFunction] = [element]);
    });

    return result;
}

data.forEach((e) => {
    console.log(groupBy(e[0], e[1]));
});
