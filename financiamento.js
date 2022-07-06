import { parcela } from './parcela.js'

class financiamento {
    #taxa_juros
    #prazo
    #parcelas = []
    constructor(valor, entrada, taxa_juros, prazo) {
        this.#taxa_juros = taxa_juros
        this.#prazo = prazo
        this.#parcelas.push(new parcela(0, 0, 0, 0, valor - entrada))
    }
    static calcula_juros(valor, taxa_juros) {
        return valor * (taxa_juros / 100)
    }
    calcula_parcelas_mensais() {
        let saldo = this.#parcelas[this.#parcelas.length - 1].get_saldo()
        let prazo = this.prazo - (this.#parcelas - 1)
        let amortizacao = saldo / prazo
        for (i = 0; i < prazo; i++) {
            const numero = this.#parcelas.length
            const juros = financiamento.calcula_juros(saldo, this.#taxa_juros)
            const valor = juros - amortizacao
            saldo -= amortizacao
            if (saldo < 0) {
                saldo = 0
            }
            this.#parcelas.push(
                new parcela(numero, valor, juros, amortizacao, saldo)
            )
        }
    }
}
