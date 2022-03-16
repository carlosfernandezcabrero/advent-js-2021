const data = [
  'bici coche (balón) bici coche peluche',
  '(muñeca) consola bici',
  'bici coche (balón bici coche',
  'peluche (bici [coche) bici coche balón',
  '(peluche {) bici',
  '() bici',
];

function checkParenthesis(letter) {
  let closed = true;

  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === ')' && closed) return true;
    if (letter[i] === '(') closed = false;
    if (letter[i] === ')') closed = true;
  }

  return !closed ? true : false;
}

export default function isValid(letter) {
  switch (true) {
    case letter.includes('{'):
      return false;
    case letter.includes('['):
      return false;
    case /\(\)/.test(letter):
      return false;
    case checkParenthesis(letter):
      return false;
    default:
      return true;
  }
}

data.forEach((e) => {
  console.log(`"${e}": ${isValid(e)}`);
});
