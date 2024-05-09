const nomeTurista = prompt("Qual seu nome turista?")
let cidades = ""
let numeroDeCidades = 0

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual o nome da cidade?")
    cidades += " - " + cidade + "\n"
    numeroDeCidades++
    continuar = prompt("Você já visitou alguma outra cidade (Sim/Não)")
}

alert("Você visitou um total de " + numeroDeCidades + " cidades\n" + "Dentre elas estão: " + cidades)
