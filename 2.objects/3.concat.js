/*
3. Crie dois objetos distintos com pelo menos duas propriedades preenchidas com qualquer valor. Depois disso, crie um terceiro objeto
   que ira receber a junção desses dois anteriores.
   Ex: primeiro = {nome: "meu nome", sobrenome: "meu sobrenome"} segundo = {idade: 15}
       terceiro precisa ser {nome: "meu nome", sobrenome: "meu sobrenome", idade: 15}
*/

var primeiro = {
    nome: 'Louise',
    sobrenome: 'Alves'
}

var segundo = {
    idade: 18,
    altura: 1.63
}

var terceiro = {...primeiro, ...segundo} //spread operator
// var terceiro = Object.assign({}, primeiro,segundo) Metodo Object Assign

console.log(terceiro)