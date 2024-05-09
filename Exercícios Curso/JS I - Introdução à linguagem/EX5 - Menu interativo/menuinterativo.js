/* 1. Criar o menu interativo com as 4 opções, com a quinta sendo encerrar
   2. Quando selecionado, encontrar uma forma de mostrar uma mensagem na tela e após isso recomeçar o loop
   3. Quando clicar na opção encerrar, mostrar uma mensagem dizendo que o sistema está encerrado */

let opção = prompt("Escolha uma das quatro opções:\n1) Banana\n2) Morango\n3) Kiwi\n4) Maça\n5) Encerrar")

do {
    switch (opção) {
        case "1":
            alert("Você escolheu a banana")
            break
        case "2":
            alert("Você escolheu o morango")
            break
        case "3":
            alert("Você escolheu o kiwi")
            break
        case "4":
            alert("Você escolheu a maça")
            break
        default:
            alert("Opção inválida")
    }
    opção = prompt("Escolha outra fruta:\n1) Banana\n2) Morango\n3) Kiwi\n4) Maça\n5) Encerrar")
} while (opção!==5)

alert("O sistema está encerrado")

/* let opcao = ""

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.")
      break
    case "2":
      alert("Você escolheu a opção 2.")
      break
    case "3":
      alert("Você escolheu a opção 3.")
      break
    case "4":
      alert("Você escolheu a opção 4.")
      break
    case "5":
      alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
} while (opcao !== "5"); */