const com_carencia = document.querySelector('#com_carencia')
const lista_suspensa = document.querySelector('#lista_suspensa')

com_carencia.addEventListener('change', function () {
    if (this.checked) {
        lista_suspensa.removeAttribute('hidden')
    } else {
        lista_suspensa.setAttribute('hidden', 'hidden')
    }
})
