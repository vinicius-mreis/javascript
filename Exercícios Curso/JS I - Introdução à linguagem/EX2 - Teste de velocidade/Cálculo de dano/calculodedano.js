const personagem1 = prompt("Nome do personagem atacante")
let poderDeAtaque = parseFloat(prompt("Qual o poder do ataque (1 a 10)"))

const personagem2 = prompt("Nome do personagem defensor")
let pontosDeVida = parseFloat(prompt("Pontos de vida (1 a 20 HP)"))
let poderDeDefesa = parseFloat(prompt("Pontos de defesa (1 a 10)"))
const escudo = prompt("Possui escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque>poderDeDefesa && escudo == 'Não') {
    danoCausado = poderDeAtaque-poderDeDefesa
} else if (poderDeAtaque>poderDeDefesa && escudo == 'Sim') {
    danoCausado = poderDeAtaque-poderDeDefesa/2
} else if (poderDeAtaque<=poderDeDefesa) {
    danoCausado = 0
}

alert("Quantidade de dano: " + danoCausado + "\n" + "Ataque -> " + poderDeAtaque + " Defesa -> " + poderDeDefesa + "\nPossui escudo? -> " + escudo )

alert("HP atual -> " + [pontosDeVida-danoCausado])