/*
3. Crie dois arrays distintos de qualquer tamanho e preenchidos com qualquer valor. Depois disso, crie um terceiro array
   que ira receber a junção desses dois arrays.
   Ex: primeiro = [1, 2, 3] segundo = [1, 2, 3, 11, 22, 33], terceiro precisa ser [1, 2, 3, 1, 2, 3, 11, 22, 33]
*/

const primeiroArray = ['Azul', 'Fusca']
const segundoArray = ['Verde', 'Gol']

const terceiroArray = [primeiroArray.concat(segundoArray)]

const quartoArray = [...primeiroArray, ...segundoArray]

console.log(quartoArray, terceiroArray)
//TODO: Usar spread operator