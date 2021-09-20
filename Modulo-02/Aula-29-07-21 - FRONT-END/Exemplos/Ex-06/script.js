const inputSenha = document.querySelector('#senha');
const inputRepetirSenha = document.querySelector('#r-senha');
const submit = document.querySelector('form');

submit.addEventListener('submit', function(event) {
    if(inputSenha.value != inputRepetirSenha.value){
        event.preventDefault();
    }
})


