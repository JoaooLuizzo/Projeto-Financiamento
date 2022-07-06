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
}
