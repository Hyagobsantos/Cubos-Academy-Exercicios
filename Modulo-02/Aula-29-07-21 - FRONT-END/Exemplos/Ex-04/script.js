const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numeros = '0123456789'.split('');

const inputSenha = document.querySelector('#senha');
const inputEmail = document.querySelector('#email');


inputSenha.addEventListener('change', function(){
    const senha = inputSenha.value
    let temLetra = false
    let temNumero = false

    for (let i = 0; i < senha.length; i++) {
       if(letras.includes(senha[i])){
            temLetra = true;
            continue;
       }

       if(numeros.includes(senha[i])){
        temNumero = true;
        continue
   }
}

if(temLetra && temNumero){
    console.log("senha valida")
}

});