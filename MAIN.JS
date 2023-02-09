const form = document.getElementById('form-envio');
const numeroA = document.getElementById('Numero-A');
const numeroB = document.getElementById('Numero-B');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroAValue = parseInt(numeroA.value);
    const numeroBValue = parseInt(numeroB.value);
    let formEValido = false;
    const mensagemSucesso = `<b>Formulario enviado com sucesso!!</b>`

    function validanum(numeroA, numeroB){
        return numeroB > numeroA;
    }

    formEValido = validanum(numeroAValue, numeroBValue);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'block';
    }
});

numeroA.addEventListener('input', function() {
    document.querySelector('.error-message').style.display = 'none';
});

numeroB.addEventListener('input', function() {
    document.querySelector('.error-message').style.display = 'none';
});
