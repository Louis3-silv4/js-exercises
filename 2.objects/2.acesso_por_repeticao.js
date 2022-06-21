/*
2. Crie um objeto contendo pelo menos 5 propriedades preenchidas com qualquer valor. Depois imprima apenas os valores de cada chave das propriedades
   utilizando uma estrutura de repetição.
*/

const pessoa = {
  nome: 'Louise',
  idade: 18,
  peso: 55,
  altura: 1.63,
  cidade: 'Nilopolis',
}

   for (const i in pessoa) {
     console.log(pessoa[i] + '\n')
   }

   //TODO: Mudar hasOwnProperty 