function validateName(name) {
    if (name === '') {
        const err = new Error('Campo vazio')
        err.input = 'name'
        throw err
    }
}

function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password) {
    if (
        password.length < 8 || // se tiver menos de 8 letras
        !password.match(/[a-z]/) || // se não encontrar nenhuma letra minuscula
        !password.match(/[A-Z]/) || // se não encontrar nenhuma letra maiuscula
        !password.match(/\d/) || // números | OU [0-9]
        !password.match(/[^a-zA-Z0-9\s]/) // garantir que tenhas caracteres especiais  | '^' : fora dos colchetes -> início da string        dentro dos colchetes -> anulação | inverte o efeito de uma regra
    ) {
        const err = new Error('Senha inválida.')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles(inputs) {
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles(userInputs)

    try {
        validateName(userInputs.name.value)
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
        alert('cadastrado com sucesso')
    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})