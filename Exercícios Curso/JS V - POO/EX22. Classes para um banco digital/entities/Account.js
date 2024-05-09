module.exports = class Account {
    #balance

    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer) { 
        if (transfer.toUser.email === this.owner.email) { // verificando se o destinatário da transferência é o mesmo que o proprietário da conta atual. Se for, isso significa que o dinheiro está sendo transferido para a própria conta. TRANSFERENCIA FOI PRA ELE
            // valor da transferência é adicionado ao saldo da conta (this.#balance += transfer.value) e a transferência é registrada na lista de transferências
            this.#balance += transfer
            this.transfers.push(transfer)
        } else if (transfer.fromUser.email = this.owner.email) { // verifica se o remetente da transferência é o proprietário da conta. Se for, isso significa que o dinheiro está sendo retirado da conta
            // valor da transferência é subtraído do saldo da conta e a transferência é registrada na lista de transferências 
            this.#balance -= transfer
            this.transfers.push(transfer)
        }
    }
}