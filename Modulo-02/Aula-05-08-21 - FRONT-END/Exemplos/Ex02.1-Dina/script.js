const criptoInput = document.querySelector("#cripto");
const valor = document.querySelector('.valor');

criptoInput.addEventListener('change', async function(event){
    const resposta = await fetch('https://www.mercadobitcoin.net/api/' + criptoInput.value + '/ticker/')
    const body = await resposta.json();

   valor.textContent = Number(body.ticker.high).toFixed(2)
})