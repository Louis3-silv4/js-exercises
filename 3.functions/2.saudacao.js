/*
2. Crie uma função que recebe um objeto pessoa como parametro e retorne uma frase informando o nome completo e a idade dessa pessoa.
Você pode assumir que o objeto recebido como parametro possui as chaves nome, sobrenome e idade.
Chame essa função e atribua o resultado da execução dela numa variável e, por fim, imprima essa variável.
*/

const pessoa = {
  nome: 'Louise',
  sobrenome: 'Alves',
  idade: 18,
}

function dadosCompletos(pessoa) {
  return `Meu nome é ${pessoa.nome} ${pessoa.sobrenome} tenho ${pessoa.idade}anos`
}

const frase = dadosCompletos(pessoa)
console.log(frase)