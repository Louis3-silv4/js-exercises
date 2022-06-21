/*
2. Crie um array de 10 posições preenchido com qualquer valor. Depois imprima os valores de cada posição
   desse array utilizando uma estrutura de repetição.
*/
const arr = [
  'Pera',
  'Uva',
  'Melancia',
  'Abacate',
  'Morango',
  'Abacaxi',
  'Melao',
  'Maça',
  'Banana',
  'Laranja',
]

for (i = 0; i < arr.length; i++) {
  console.log(i + '=' + arr[i])
}

const retorno = arr.map((frutas, indice) => `${indice + 1}: ${frutas}`)

console.log(retorno)
  
/* ++ é um operador, é a mesma coisa que i++ = i + 1. 
    i= 0 ,então faz o for, i < número do tamanho do arr, 
    e por último faz i++(i + 1) que é o contador do for, e vai até o i ser igual .
  */

//TODO: Fazer com .map
