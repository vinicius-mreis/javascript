class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shampoo = new Product('Shampoo Adove', 'Fácil de usar', 80)

shampoo.addToStock(99)
const priceWithDiscount = shampoo.calculateDiscount(15)

console.log(shampoo)
console.log(priceWithDiscount)
console.log(shampoo.calculateDiscount(10))