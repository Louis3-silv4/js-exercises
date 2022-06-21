/*
4. Crie uma função que recebe um objeto pessoa como parametro e retorne uma frase informando o nome completo, a idade e as comidas favoritas dessa pessoa.
Você pode assumir que o objeto recebido como parametro possui as chaves nome, sobrenome, idade e comidasFavoritas. o campo comidasFavoritas deve ser um array.
Chame essa função e atribua o resultado da execução dela numa variável e, por fim, imprima essa variável.
*/

const pessoa = {
  nome: 'Louise',
  sobrenome: 'Alves',
  idade: 18,
  comidaPreferida: ['bifeGratinado', 'brownie', 'pipoca'],
} 

function dados(pessoa) {
 console.log(
   `Meu nome é ${pessoa.nome} ${
     pessoa.sobrenome
   } tenho ${18}anos e minhas comidas preferidas são ${pessoa.comidaPreferida}`
 )
}

const frase = dados(pessoa)

console.log(frase)


//TODO: Tirar duvida 