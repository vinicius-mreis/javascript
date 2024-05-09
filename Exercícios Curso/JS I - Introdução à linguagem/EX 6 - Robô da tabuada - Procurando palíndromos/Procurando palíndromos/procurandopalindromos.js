const palavra = prompt("Insira uma palavra:")
let palavraInvertida = ""

for(let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

/* Utiliza um loop for para percorrer a palavra da última letra até a primeira,
 adicionando cada letra à palavraInvertida, assim invertendo a palavra. 
    OVO - > OVO - 1 =  (...)  = 0   //  palavraInvertida = OVO
    i -> POSIÇÃO ATUAL
 */

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
} else {
    alert(palavra + " não é um palíndromo!\n\n" + 
    palavra + " !== " + palavraInvertida)
}