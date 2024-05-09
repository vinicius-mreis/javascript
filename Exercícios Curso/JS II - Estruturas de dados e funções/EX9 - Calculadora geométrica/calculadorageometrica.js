
function areaTriangulo () {
    const base = prompt("Insira o valor da base")
    const altura = prompt("Insira o valor da altura")
    return base * altura / 2
}

function areaRetangulo () {
    const base = prompt("Insira o valor da base")
    const altura = prompt("Insira o valor da altura")
    return base * altura
}

function areaQuadrado () {
    const lado = prompt("Insira o valor do lado")
    return lado * lado
}

function areaTrapezio () {
    const baseMaior = parseFloat(prompt("Insira o valor da base maior"))
    const baseMenor = parseFloat(prompt("Insira o valor da base menor"))
    const altura = prompt("Insira o valor da altura")
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo () {
    const raio = prompt("Insira o valor o raio")
    return 3,14 * raio * raio
}

function exibirMenu() {
    return prompt("Bem-vindo à calculadora geométrica!\n\n" +
    "Opções de cálculo de área:\n" + "1. Triângulo" +
    "   2. Retângulo\n" + "3. Quadrado" + "  4. Trapézio\n"
    + "5. Círculo\n"  +  "6. Sair")
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = areaTriangulo();
                break
            case "2":
                resultado = areaRetangulo();
                break
            case "3":
                resultado = areaQuadrado();
                break
            case "4":
                resultado = areaTrapezio();
                break
            case "5":
                resultado = areaCirculo();
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Opção inválida.")
                break
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }
    } while (opcao != 6)
}


executar()
