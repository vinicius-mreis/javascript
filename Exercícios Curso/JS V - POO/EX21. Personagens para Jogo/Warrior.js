// Uma classe Warrior que representa outro tipo de personagem e também herda 
// de Character.Essa classe também deve possuir um atributo para pontos de 
// escudo e outro para posição, que poderá ser de ataque ou defesa.Ela também 
// deve sobrescrever o método de ataque para que ele só aconteça se a posição 
// atual for a de ataque.Por fim, ela deverá ter também um método para mudar 
// a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os 
// pontos de escudo devem ser somados aos de defesa para fazer o cálculo do 
// método de ataque. Ao trocar para a posição de ataque apenas os pontos de 
// defesa devem ser considerados (comportamento normal).
// Essa classe também deve possuir um atributo para pontos de escudo e outro 
// para posição, que poderá ser de ataque ou defesa.
// Ela também deve sobrescrever o método de ataque para que ele só aconteça se 
// a posição atual for a de ataque.
// Por fim, ela deverá ter também um método para mudar a posição entre ataque 
// e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser 
// somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para 
// a posição de ataque apenas os pontos de defesa devem ser considerados 
// (comportamento normal).

const Character = require("./Character");

class Warrior extends Character {
    constructor(name, lifePts, attackPts, defensePts, shieldPts) {
        super(name, lifePts, attackPts, defensePts)
        this.shieldPts = shieldPts
        this.stance = 'attacking'
    }

    attack(targetCharacter) {
        if (this.stance === 'attacking') {
            super.attack(targetCharacter)
        }
    }

    switchStance() {
        // Por fim, ela deverá ter também um método para mudar a posição entre ataque 
        // e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser 
        // somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para 
        // a posição de ataque apenas os pontos de defesa devem ser considerados 
        // (comportamento normal).
        if (this.stance = 'attacking') {
            this.stance = 'defending'
            this.defensePts += this.shieldPts
        } else {
            this.stance = 'attacking'
            this.defensePts -= this.shieldPts
        }
    }
}

module.exports = Warrior