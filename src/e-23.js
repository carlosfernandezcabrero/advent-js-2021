/**
 * @param {string} from
 * @param {string} to
 */
export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  const fromObject = {};
  const toObject = {};

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i];
    const toChar = to[i];

    if (
      Object.keys(fromObject).includes(fromChar) &&
      fromObject[fromChar] !== toChar
    )
      return false;
    if (Object.keys(toObject).includes(toChar) && toObject[toChar] !== fromChar)
      return false;

    fromObject[fromChar] = toChar;
    toObject[toChar] = fromChar;
  }

  return true;
}

let from = "AA";
let to = "MID";
console.log(canReconfigure(from, to));

from = "XBOX";
to = "XOBX";
console.log(canReconfigure(from, to));

from = "MMM";
to = "MID";
console.log(canReconfigure(from, to));
