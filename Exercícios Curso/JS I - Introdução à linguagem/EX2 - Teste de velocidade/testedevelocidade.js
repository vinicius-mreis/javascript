alert("Teste de velocidade")

const veiculo1 = prompt("Nome do primeiro veículo")
let velocidade1 = parseFloat(prompt("Qual a velocidade do primeiro veículo? (em Km/h)"))

const veiculo2 = prompt("Nome do segundo veículo")
let velocidade2 = parseFloat(prompt("Qual a velocidade do segundo veículo? (em Km/h)"))

if (velocidade1>velocidade2) {
    alert("O veículo 1 é mais rápido!")
} else if (velocidade1<velocidade2) {
    alert("O veículo 2 é mais rápido")
} else if (velocidade1==velocidade2) {
    alert("As velocidades são iguais")
} else {
    alert("Resposta inválida")
}