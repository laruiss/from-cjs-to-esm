import { add } from '#utils/index.js' // Ceci est un IMPORT NOMMÉ, PAS une Affectation par décomposition

// import utils from '#utils/index.js' // SyntaxError: The requested module '#utils/index.js' does not provide an export named 'default'

const result = add(1, 2)

console.log('It works:', `${result}!`) // 3