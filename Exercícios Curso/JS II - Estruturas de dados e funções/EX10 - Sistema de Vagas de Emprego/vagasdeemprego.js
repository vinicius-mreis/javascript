const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
      // 1. nome, (x candidatos)
      textoFinal += indice + ". "
      textoFinal += vaga.nome
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return textoFinal
    }, "")
  
    alert(vagasEmTexto)
  }

function criarVaga () {
    const nome = prompt("Nome da vaga")
    const descricao = prompt("Descrição")
    const dataLimite = prompt("Data limite (dd/mm/aaaa)")
    
    const confirmacao = confirm("Confirma?\n\n" + 
                              "Nome da vaga: " + nome + 
                              "\nDescrição: " + descricao +
                              "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada")
    }
}

function visualizarVaga () {
    const indice = parseFloat(prompt("Informe o indice da vaga"))

    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido")
        return
    }

    const vaga = vagas[indice]
    
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato () {
    const candidato = prompt("Insira o nome do candidato")
    const indice = parseFloat(prompt("Insira o indice da vaga"))
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja inscrever o candidato " + candidato +
          " na vaga Nº" + indice + "?\n" +
          "Vaga: " + vaga.nome + "\nDescrição: " + vaga.descricao
          + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição confirmada")
    }
}

function excluirVaga () {
    const indice = parseFloat(prompt("Informe o indice da vaga a ser excluida"))
    const vaga = vagas[indice]

    const confirmacao = confirm("\nNome da vaga a ser excluída: " + vaga.nome +
            "\nNº da vaga: " + indice +
            "\nDescrição: " + vaga.descricao +
            "\nData limite: " + vaga.dataLimite +
            "\nQuantidade de candidatos: " + vaga.candidatos.length
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Candidato removido")
    }
}

function exibirMenu () {
    return prompt("SISTEMA DE VAGAS DE EMPREGO\n" + 
                  "\n1. Listar vagas disponíveis" +
                  "\n2. Criar uma nova vaga" +
                  "\n3. Visualizar uma vaga" +
                  "\n4. Inscrever um candidato em uma vaga" +
                  "\n5. Excluir uma vaga" +
                  "\n6. Sair"
    )
}

function executar () {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas();
                break
            case "2":
                criarVaga();
                break
            case "3":
                visualizarVaga();
                break
            case "4":
                inscreverCandidato();
                break
            case "5":
                excluirVaga();
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Opção inválida")
                break
        }

    } while (opcao!=6)
}

executar()