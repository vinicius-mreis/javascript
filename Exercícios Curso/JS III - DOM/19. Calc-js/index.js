const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) { // seleciona todos os elementos com a classe 'charKey', e para cada um desses elementos, é adicionado um evento 'click' (charKeyBtn -> botão individual)
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value // obtém o valor do data-value do botão clicadoe armazena na variavel value      Ex: data-value="7">
    input.value += value // adiciona o valor obtido do data para o campo de entrada (input)
  })
})

document.getElementById('clear').addEventListener('click', function () { // adiciona um evento 'click' ao ID 'clear' (botão "C" de limpar da calculadora)
  input.value = '' // define o valor do campo de entrada como uma string vazia, limpando o conteúdo do campo
  input.focus() //  O 'focus()' é normalmente usado para direcionar o cursor para o campo de entrada, o que significa que o usuário pode começar a digitar imediatamente após clicar no botão de limpar
})

input.addEventListener('keydown', function (ev) { // quando uma tecla é pressionada no input principal, ocorre um evento
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
})

document.getElementById('equal').addEventListener('click', calculate) // quando clicado o botão de igual, chama a função calculate()

function calculate() {
  resultInput.value = 'ERROR' // CONFIGURAÇÕES PADRÕES: define o valor do input de resultado para 'ERROR'
  resultInput.classList.add('error') // adiciona um classe 'error' (já definida no CSS) ao input de resultado

  const result = eval(input.value) // a várivel result usa a função 'eval' para avaliar a expressão contida no campo de entrada ('input'). Ela avalia a string passado como código Javascript. Neste caso, ele está avaliado a expressão matemática fornecida pelo usuário
  resultInput.value = result // no input de resultado vai ser mostrado o resultado da operação

  resultInput.classList.remove('error') // remove a classe 'error' do input de resultado, volta ao normal se o resultado escrito for correto
}

document.getElementById('copyToClipboard').addEventListener('click', function (ev) { // adiciona um evento ao elemento com id 'copyToClipboard' (botão de copiar o resultado para área de transferência)
  const button = ev.currentTarget // obtém a referência do botão clicado, usando a propriedade 'currentTarget' do objeto de evento 'ev'          currentTarget -> botão 'copyToClipboard'
  if (button.innerText === 'Copy') { // se o texto no botão for 'Copy'
    button.innerText = 'Copied!' // atualiza o texto para 'Copied!'
    button.classList.add('success') // adiciona a classe chamada 'success' ao botão, 'success' que teve suas propriedades definidas anteriormente no CSS
    navigator.clipboard.writeText(resultInput.value)
  } else { // se o texto no botão não for 'Copy'
    button.innerText = 'Copy' // define o padrão novamente para 'Copy'
    button.classList.remove('sucess') // remove a classe 'success' e suas configurações
  }
})

document.getElementById('themeSwitcher').addEventListener('click', function () { // adiciona um ouvinte de eventos ao elemento com o ID 'themeSwitcher' (botão para alternar entre temas escuros e claros)
  if (main.dataset.theme === 'dark') { // se o data-theme do 'main' ter valor 'dark'
    root.style.setProperty('--bg-color', '#f1f5f9') // define as propriedades de estilo para alterar as variáveis CSS definidas no :root
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light' // alterna o data-theme para 'light'
  } else { // ou então define as propriedades anteriores novamente
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark' // alterna o data-theme para 'dark'
  }
})