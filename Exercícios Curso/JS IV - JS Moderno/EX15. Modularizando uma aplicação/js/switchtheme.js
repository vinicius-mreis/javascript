export default function switchTheme() { // adiciona um ouvinte de eventos ao elemento com o ID 'themeSwitcher' (botão para alternar entre temas escuros e claros)
    const main = document.querySelector('main')
    const root = document.querySelector(':root')
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
}