alert("Vamos jogar baralho!")

let opcao = ""
let cartas = []


do {
    opcao = prompt("Menu de seleção:\n" + "Cartas no baralho: " + cartas.length + "\n\n1. Adicionar uma carta\n" + "2. Puxar uma carta\n" + "3. Sair")

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual o nome da carta?")
            cartas.unshift(novaCarta)
            break
        case "2":
            const cartaPuxada = cartas.shift()
            if (cartaPuxada) {
                alert("Você puxou um(a) " + cartaPuxada)
            } else {
                alert("Não há cartas no baralho!")
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            break
    }
} while(opcao!=="3")



/* const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + cartaPuxada)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3"); */