const numero = parseFloat(prompt("Insira um número"))
let resultado = ""

for (let i = 1; i <= 20; i++) {
    resultado += " -> " + numero + " * " + i + " = " + (numero*1) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)