const cepInput = document.querySelector('#cep');
const ufInput = document.querySelector('#uf');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change', async function(){

    if(cepInput.value.length != 8){
        alert('ERRO')
        return;
    }


    const resposta = await fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/');
    if(!resposta.ok){
        alert('ERRO')
        return;
    }
    const respostaBory = await resposta.json();

    if(respostaBory.erro){
        alert("404 NOT FOUND")
        return;
    }

    ufInput.value = respostaBory.uf;
    cidadeInput.value = respostaBory.localidade;
    ruaInput.value = respostaBory.logradouro

   
});