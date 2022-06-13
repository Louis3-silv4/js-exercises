/*
2. Crie um objeto contendo pelo menos 5 propriedades preenchidas com qualquer valor. Depois imprima apenas os valores de cada chave das propriedades
   utilizando uma estrutura de repetição.
*/

var pessoa = {
   nome: 'Louise',
   idade: 18,
   peso: 55 ,
   altura: 1.63,
   cidade: 'Nilopolis'
}

   for (var i in pessoa) {
     if (pessoa.hasOwnProperty(i)) {
      console.log( pessoa[i] + "\n")
     }
   }