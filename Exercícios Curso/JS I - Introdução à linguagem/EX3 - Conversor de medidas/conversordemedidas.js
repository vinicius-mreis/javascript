let valor = parseFloat(prompt("Insira um valor em metros"))
let unidadeDeMedida = prompt("Defina uma unidade de medida:\n- milímetro (mm)\n- centímetro(cm)\n- decímetro(dm)\n- decâmetro(dam)\n- hectômetro(hm)\n- quilômetro(km)")

switch (unidadeDeMedida) {
    case "mm":
        alert("O resultado é " + [valor*1000] + " mm")
        break
    case "cm":
        alert("O resultado é " + [valor*100] + " cm")
        break
    case "dm":
        alert("O resultado é " + [valor*10] + " dm")
        break
    case "dam":
        alert("O resultado é " + [valor/10] + " dam")
        break
    case "hm":
        alert("O resultado é " + [valor/100] + " hm")
        break
    case "km":
        alert("O resultado é " + [valor/1000] + " km")
        break
    default:
        alert("Opção inválida")
        break
}