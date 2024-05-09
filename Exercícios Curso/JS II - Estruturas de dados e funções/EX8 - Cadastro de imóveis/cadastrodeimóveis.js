let imoveis = [] 
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo(a) ao cadastro de Imóveis!\n" +
        "Quantidade de imóveis cadastrados: " + imoveis.length + 
        "\n\n1. Salvar um novo imóvel" + 
        "\n2. Listar imóveis salvos" + 
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Nome do proprietário:"),
            imovel.qtdQuartos = prompt("Quantidade de quartos:"),
            imovel.qtdBanheiros = prompt("Quantidade de banheiros:"),
            imovel.temGaragem = prompt("Possui garagem? (Sim/Não)") 

            const confirmacao = confirm(
                "Deseja confirmar?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.qtdQuartos +
                "\nBanheiros: " + imovel.qtdBanheiros +
                "\nPossui garagem? " + imovel.temGaragem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso")
            } else {
                alert("Voltando ao menu...")
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].qtdQuartos +
                    "\nBanheiros: " + imoveis[i].qtdBanheiros +
                    "\nPossui garagem? " + imoveis[i].temGaragem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
            break
    }
} while (opcao!="3")