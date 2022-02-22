const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export default function pangram (letter) {
  const uniquesLetters = [
    ...new Set(
      letter
        .toLowerCase()
        .replaceAll('ó', 'o')
        .replaceAll('á', 'a')
        .replaceAll('é', 'e')
        .replaceAll('í', 'i')
        .replaceAll('ú', 'u')
        .split(' ')
        .join('')
    )
  ]

  const letterNormalized = uniquesLetters
    .sort()
    .join('')
    .normalize()

  return letterNormalized.includes(alphabet) && letterNormalized.includes('ñ')
}

console.log(pangram('üüüüüüExtraño pan de col y kiwi se quemó bajo fugaz vaho,')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false
