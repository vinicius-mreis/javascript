alert("Fila de espera do consultório")

let opcao = ""
let fila = ["Matheus","Marcos","Thiago"]

do {
    opcao = prompt("Pacientes na fila de espera:\n" + fila + ' \n1. Novo paciente\n' + '2. Consultar paciente\n' + '3. Sair')

    switch(opcao) {
        case "1":
            let novoPaciente = prompt("Insira o nome do paciente:")
            fila.push(novoPaciente) // adicionando o novoPaciente para o fim da fila
            break
        case "2":
            let pacienteConsultado = fila.shift() // removendo o paciente do começo da fila e devolve o pacienteConsultado
            if (pacienteConsultado) {
                alert(pacienteConsultado + " foi consultado.")
              } else {
                alert("Não há pacientes na fila!")
              }
            break
        default:
            break
    }
} while(opcao!="3")

alert("Encerrando")



/* let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3"); */