/*
 * 1- [Números]
 */

const numeros = [10, 25, 40, 50, 60]

const total = numeros.reduce((acc, item) => {
  //   console.log(acc)
  //   console.log(item)
  return acc + item
})

console.log('Reduce com Números', total) //185

/*
 * 2 - [String]
 */

const palavras = ['Lo', 'Louis', 'Louise']
const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
  //   console.log(maiorPalavra)
  //   console.log(palavraAtual)
  if (palavraAtual.length > maiorPalavra.length) {
    return palavraAtual
  }

  return maiorPalavra
}, '')
console.log('Reduce com String', maiorPalavra)

/*
 * 3 - [Tipo]
 */

const pokemons = [
  {
    name: 'Pikachu',
    type: 'eletric',
  },
  {
    name: 'Squirtle',
    type: 'water',
  },
  {
    name: 'Joteon',
    type: 'eletric',
  },
  {
    name: 'Totodile',
    type: 'water',
  },
  {
    name: 'Abra',
    type: 'psycho',
  },
]

const pokemonPortipo = pokemons.reduce((pokemonPortipo, pokemons) => {
  //   console.log(pokemonAtual)
  if (!pokemonPortipo[pokemons.type]) {
    pokemonPortipo[pokemons.type] = []
  }
  pokemonPortipo[pokemons.type].push(pokemons)
  return pokemonPortipo
}, {})
console.log('Reduce por Tipo', pokemonPortipo)

//Primeiro parametro sempre sera o objeto anterior e o segundo é o objeto atual
