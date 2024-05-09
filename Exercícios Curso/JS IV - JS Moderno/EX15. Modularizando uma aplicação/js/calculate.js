export default function calculate() {
    const resultInput = document.querySelector('#result')
    resultInput.value = 'ERROR' // CONFIGURAÇÕES PADRÕES: define o valor do input de resultado para 'ERROR'
    resultInput.classList.add('error') // adiciona um classe 'error' (já definida no CSS) ao input de resultado
  
    const result = eval(input.value) // a várivel result usa a função 'eval' para avaliar a expressão contida no campo de entrada ('input'). Ela avalia a string passado como código Javascript. Neste caso, ele está avaliado a expressão matemática fornecida pelo usuário
    resultInput.value = result // no input de resultado vai ser mostrado o resultado da operação
  
    resultInput.classList.remove('error') // remove a classe 'error' do input de resultado, volta ao normal se o resultado escrito for correto
  }