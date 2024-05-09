/* media(2, 6, 3, 7, 4) === 4.4
// porque
2 + 6 + 3 + 7 + 4 === 22
// e 
22 / 5 === 4.4 */
const average = (...numbers) => {
    return numbers.reduce((accum, num) => (accum + num / numbers.length), 0)
}

const mediaValor = document.querySelector('.media')
mediaValor.textContent = (average(2, 6, 3, 7, 4))



/* // n -> número, p -> peso
mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
// porque
(7 * 2) + (9 * 5) + (3 * 1) === 62
// e
62 / (2 + 5 + 1) === 7.75 

somar as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos

*/
const mediaPonderada = (...entries) => {
    const somaDosPesos = entries.reduce((accum, num) => (accum + num.p), 0)
    return entries.reduce((accum, num) => accum + (num.n * num.p) / somaDosPesos, 0)
}

const mediaPonderadaValor = document.querySelector('.mediaPonderada')
mediaPonderadaValor.textContent = (mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))

/* 
mediana(2, 4, 5, 7, 42, 99) === 6
// porque 5 e 7 estão juntos no centro da sequência e
media(5, 7) === 6

mediana(15, 14, 8, 7, 3) === 8
// porque 8 está no centro da sequência
*/
const mediana = (...numbers) => {
    const orderedNumbers = numbers.sort((a, b) => a - b) // ordena em ordem decrescente
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) { // se for impar
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
};

const medianaValor = document.querySelector('.mediana')
medianaValor.textContent = mediana(2, 4, 5, 7, 42, 99)


// moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) === 4
// porque:
// 4 aparece 4 vezes
// 5 e 1 aparecem 2 vezes
// 9, 7, 3, 2 e 0 aparecem 1 vez


const moda = (...numbers) => { // aceita um número variável de argumentos usando o operador de propagação ...numbers
    // [ [n, qtd], [n, qtd], [n, qtd] ] -> contem o numero e a quantidade de vezes em que ele aparece no conjunto
    const quantities = numbers.map(num => [ // quantas vezes um elemento aparece | Para cada número (num) no array numbers, o método map está criando um novo array
      num,
      numbers.filter(n => num === n).length
      /*
      ele está filtrando todos os elementos que são iguais a num. 
      Em seguida, length é chamado no resultado desse filtro para 
      determinar quantas ocorrências do número num existem no array 
      original. Em resumo, o filter está contando quantas vezes o 
      número num aparece no array numbers
      */
    ])
    quantities.sort((a, b) => b[1] - a[1]) // ordenar de ordem decrescente baseado no 'qtd' | aquele elemento que aparecer em maior quantidade será o primeiro elemento do array
    return quantities[0][0]
  }

const modaValor = document.querySelector('.moda')
modaValor.textContent = moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)