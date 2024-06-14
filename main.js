const form = document.getElementById('form-numbers');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

let formEValido = false;

function validaNumeros(numeroA,numeroB){
    const resultadoComparativo = numeroB > numeroA;
    return resultadoComparativo;
}



form.addEventListener('submit', function(e){
    e.preventDefault();

    const msgSucesso = `A validação foi positiva, numero-B: ( ${campoB.value} ) é maior que numero-A: ( ${campoA.value} ) `;

    const msgErro = `O Numero do campo B: (${campoB.value}) deve ser maior que o do campo A: (${campoA.value}).`;

    formEValido = validaNumeros(campoA.value,campoB.value)
    if(formEValido){
        const paragrafoMensagemSucesso = document.querySelector('.success-message');
        paragrafoMensagemSucesso.innerHTML = msgSucesso;
        paragrafoMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        campoA.value = '';
        campoB.value = '';
    }else{
        campoA.style.border = '1px solid red';
        campoB.style.border = '1px solid red';
        const paragrafoMensagemErro = document.querySelector('.error-message');
        paragrafoMensagemErro.innerHTML = msgErro;
        paragrafoMensagemErro.style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        campoA.value = '';
        campoB.value = '';
    }
});


