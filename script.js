const com_carencia = document.querySelector('#com_carencia')
const lista_suspensa = document.querySelector('#lista_suspensa')
const corpo_tabela = document.querySelector('#corpo_tabela')

com_carencia.addEventListener('change', function () {
    if (this.checked) {
        lista_suspensa.removeAttribute('hidden')
    } else {
        lista_suspensa.setAttribute('hidden', 'hidden')
    }
})
