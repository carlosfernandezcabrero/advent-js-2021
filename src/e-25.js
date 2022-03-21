/**
 * @param {string} direction
 * @param {string[][]} game
 */
export default function canMouseEat(direction, game) {
  const FOOD_SYMBOL = "*";
  const MOUSE_SYMBOL = "m";

  let mouseYPosition;
  let mouseXPosition;

  game.forEach((_row, _idx) => {
    game[_idx].forEach((_item, _idxItem) => {
      if (_item === MOUSE_SYMBOL) {
        mouseXPosition = _idxItem;
        mouseYPosition = _idx;
      }
    });
  });

  if (direction === "up") --mouseYPosition;
  if (direction === "down") ++mouseYPosition;
  if (direction === "left") --mouseXPosition;
  if (direction === "right") ++mouseXPosition;

  if (mouseYPosition < 0 || game.length <= mouseYPosition) return false;

  const row = game[mouseYPosition];
  if (mouseXPosition < 0 || row.length <= mouseXPosition) return false;

  return row[mouseXPosition] === FOOD_SYMBOL;
}

const room3 = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

console.log(canMouseEat("up", room3)); // false
console.log(canMouseEat("down", room3)); // true
console.log(canMouseEat("right", room3)); // false
console.log(canMouseEat("left", room3)); // false
console.log(canMouseEat("up", [["*", "m"]]));

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

console.log(canMouseEat("up", room2)); // false
console.log(canMouseEat("down", room2)); // false
console.log(canMouseEat("right", room2)); // true
console.log(canMouseEat("left", room2)); // false
