const sheep = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
];

export default function contarOvejas(sheep) {
  return sheep.filter(
    ({ color, name }) =>
      color === 'rojo' &&
      (name.includes('n') || name.includes('N')) &&
      (name.includes('a') || name.includes('A')),
  );
}

console.log(contarOvejas(sheep));
