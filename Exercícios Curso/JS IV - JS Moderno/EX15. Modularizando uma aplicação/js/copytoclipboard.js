export default function copyToClipboard(ev) { // adiciona um evento ao elemento com id 'copyToClipboard' (botão de copiar o resultado para área de transferência)
    const resultInput = document.querySelector('#result')
    const button = ev.currentTarget // obtém a referência do botão clicado, usando a propriedade 'currentTarget' do objeto de evento 'ev'          currentTarget -> botão 'copyToClipboard'
    if (button.innerText === 'Copy') { // se o texto no botão for 'Copy'
        button.innerText = 'Copied!' // atualiza o texto para 'Copied!'
        button.classList.add('success') // adiciona a classe chamada 'success' ao botão, 'success' que teve suas propriedades definidas anteriormente no CSS
        navigator.clipboard.writeText(resultInput.value)
    } else { // se o texto no botão não for 'Copy'
        button.innerText = 'Copy' // define o padrão novamente para 'Copy'
        button.classList.remove('success') // remove a classe 'success' e suas configurações
    }
}