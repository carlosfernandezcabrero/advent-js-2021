const almacen = {
    estanteria1: {
        cajon1: {
            producto1: "coca-cola",
            producto2: "fanta",
            producto3: "sprite"
        }
    },
    estanteria2: {
        cajon1: "vacio",
        cajon2: {
            producto1: "pantalones",
            producto2: "camiseta" // <- ¡Está aquí!
        }
    }
};

export default function contains(store, product) {
    for (const i in store) {
        if (typeof store[i] === "object") {
            if (contains(store[i], product)) return true;
        }
        if (typeof store[i] === "string") {
            if (store[i] == product) {
                return true;
            }
        }
    }
    return false;
}

console.log(contains(almacen, "camiseta"));
