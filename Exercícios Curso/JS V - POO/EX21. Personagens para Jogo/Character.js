// nome, pontos de vida, de ataque e de defesa.

// método para atacar 

// -> que tem como argumento o 
// personagem alvo (outra instância de Character) 

// -> subtrai os pontos de vida desse alvo pela 
// diferença entre os pontos de ataque do personagem 
// atual e a defesa do alvo. 
// Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.

class Character {
    constructor(name, lifePts, attackPts, defensePts) {
        this.name = name
        this.lifePts = lifePts
        this.attackPts = attackPts
        this.defensePts = defensePts
    }

    attack(targetCharacter) {
        targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts
    }
}

module.exports = Character