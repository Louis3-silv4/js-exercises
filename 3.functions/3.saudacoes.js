/*
3. Crie e chame uma função que recebe um array de pessoas como parametro e imprime uma frase informando o nome completo e a idade de cada pessoa.
Essa função não retorna nada, apenas imprime.
Você pode assumir que os objetos pessoa possuem as chaves nome, sobrenome e idade.
*/

var arr = [
  {
    nome: 'Brenda',
    sobrenome: 'Fernandes',
    idade: 24,
  },
  {
    nome: 'Carlos',
    sobrenome: 'Silva',
    idade: 32,
  }
]

function frase(arr) {
  console.log( 
   'Meu nome é ' + arr.nome +' '+ arr.sobrenome +' '+ 'tenho '+ arr.idade
)
}
arr.forEach(frase)

// utilizar o metodo map tambem funciona porém iria ter que atribuir em uma variavel