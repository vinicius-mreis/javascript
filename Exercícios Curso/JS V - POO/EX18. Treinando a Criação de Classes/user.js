class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log('Login realizado com sucesso!')
        } else {
            console.log('Email e senha inválidos.')
        }
    }
}

const vinicius = new User ('Vinicius Macedo dos Reis', 'viniciusmacedo@gmail.com', 1234)

console.log(vinicius)
vinicius.login('viniciusmacedo@gmail.com', 1234)
vinicius.login('viniciusmacedo@gmail.com', 123)