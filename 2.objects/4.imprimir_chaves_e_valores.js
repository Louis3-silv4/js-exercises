/*
4. Crie um objeto contendo pelo menos 5 propriedades preenchidos com qualquer valor. Depois imprima a chave e o respectivo valor de
   cada propriedade utilizando uma estrutura de repetição.
*/

var pessoa = {
   nome: 'Louise',
   idade: 18,
   peso: 55 ,
   altura: 1.63,
   cidade: 'Nilopolis'
}
for (const property in pessoa) {
   console.log(`${property}: ${pessoa[property]}`);
 }