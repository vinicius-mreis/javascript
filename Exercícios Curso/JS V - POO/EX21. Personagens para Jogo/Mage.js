// Uma classe Mage que representa outro tipo de personagem e também herda de 
// Character. No entanto, essa classe também deve ter um atributo para pontos 
// de magia. Além disso, ela também deve sobrescrever o método de ataque para 
// que o cálculo utilize os pontos de ataque somados aos pontos de magia. 
// No entanto, essa classe também deve ter um atributo para pontos de magia.
// Além disso, ela também deve sobrescrever o método de ataque para que o 
// cálculo utilize os pontos de ataque somados aos pontos de magia.
// A classe Mage também deverá ter um outro método exclusivo que servirá 
// para aumentar os pontos de vida de um personagem alvo (passado como 
// argumento do método) em um valor de duas vezes os pontos de magia do 
// personagem atual.

const Character = require("./Character");

class Mage extends Character {
    constructor(name, lifePts, attackPts, defensePts, magicPts) {
        super(name, lifePts, attackPts, defensePts)
        this.magicPts = magicPts
    }

    attack(targetCharacter) {
        targetCharacter.lifePts -= (this.attackPts + this.magicPts) - targetCharacter.defensePts
      }

    heal(targetCharacter) {
        targetCharacter.lifePts += this.magicPts * 2
    }
}

module.exports = Mage