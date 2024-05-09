const input = document.getElementById('input')
const resultInput = document.querySelector('#result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value
  input.value += value
}

function handleClear() { // adiciona um evento 'click' ao ID 'clear' (botão "C" de limpar da calculadora)
  input.value = '' // define o valor do campo de entrada como uma string vazia, limpando o conteúdo do campo
  resultInput.value = ''
  input.focus() //  O 'focus()' é normalmente usado para direcionar o cursor para o campo de entrada, o que significa que o usuário pode começar a digitar imediatamente após clicar no botão de limpar
}

function handleTyping(ev) { // quando uma tecla é pressionada no input principal, ocorre um evento
  ev.preventDefault() // comportamento padrão: quando a tecla ser pressionada, é inserida no campo de entrada (input)

  if (allowedKeys.includes(ev.key)) { // se a tecla estiver inclusa no array allowedKeys
    input.value += ev.key // o caractere vai ser adicionado ao campo de entrada (input)
    return
  }

  if (ev.key === 'Backspace') { // se a tecla pressionada for 'Backspace'
    input.value = input.value.slice(0, -1) // remove o último caractere do valor
  }
  if (ev.key === 'Enter') { // se a tecla for 'Enter' vai chamar a função calculate()
    calculate()
  }
}

export { handleButtonPress, handleClear, handleTyping }