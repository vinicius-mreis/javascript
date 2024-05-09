export class Component {
  #element = null; // referência ao elemento do DOM (HTML)

  constructor(tag, parent, options) {
    this.tag = tag; // ex: h1
    this.parent = parent; // ex: body      vai ser outra instância de component
    this.options = options; // ex: { innerText: 'Olá, mundo!'}
    this.build(); // quando criar esse Component o elemento vai ser criado automaticamente
  }

  getElement() {
    return this.#element;
  }

  build() {
    // criar o elemento DOM com as informações que temos no construtor, sendo possível chamá-lo novamente através da instância
    this.#element = document.createElement(this.tag); // h1
    Object.assign(this.#element, this.options); // atribuir as informações do options para o elemento  |  alvo -> this.#element, propriedades -> this.options
    return this; // permite encadear outro método diretamente após ele, chamando o próximo método no objeto retornado, deixa o código mais conciso e legível | encadeamento de métodos
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else { // vai assumir que é uma string
      document.querySelector(this.parent).append(this.#element);
    }
  }
}