alert("Cadastro de recrutas")

let primeiroNome = window.prompt("Primeiro nome?")
let sobrenome = window.prompt("Sobrenome?")
let campoDeEstudo = window.prompt("Campo de estudo?")
let anoDeNascimento = window.prompt("Ano de nascimento?")

parseFloat(anoDeNascimento)

window.alert("Recruta cadastrado com sucesso!\n" + "\nNome: " + primeiroNome + " " + sobrenome + 
            "\nCampo de estudo: " + campoDeEstudo + 
            "\nIdade: " + [2023 - anoDeNascimento])
