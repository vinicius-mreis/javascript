let saldo = parseFloat(prompt("Insira a quantidade inicial de dinheiro (em R$)"))
let escolhas = prompt("Saldo atual: " + saldo + "R$\n" + "1. Acrescentar dinheiro\n2. Diminuir dinheiro\n3. Sair")

do {
    switch (escolhas) {
        case "1":
            let valorAcrescentado = parseFloat(prompt("Qual o valor acrescentado?"))
            saldo+=valorAcrescentado
            escolhas = prompt("Saldo atual: " + saldo + "R$\n" + "1. Acrescentar\n2. Diminuir\n3. Sair")
            break
        case "2":
            let valorIncrementado = parseFloat(prompt("Qual o valor incrementado?"))
            saldo-=valorIncrementado
            escolhas = prompt("Saldo atual: " + saldo + "R$\n" + "1. Acrescentar\n2. Diminuir\n3. Sair")
            break
    }
} while (escolhas!=3)

alert("Programa encerrado\n" + "Saldo final: " + saldo)

/* let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3"); */