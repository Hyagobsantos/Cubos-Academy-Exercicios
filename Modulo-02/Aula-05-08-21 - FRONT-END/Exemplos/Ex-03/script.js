const inputPoke = document.querySelector('#poke');
const textoh1 = document.querySelector('.info__poke h1');
const img = document.querySelector('img');


inputPoke.addEventListener('change', async function(event) {
    const namePoke = (event.target.value).toLowerCase();
    
    const promiseFetch = await fetch('https://pokeapi.co/api/v2/pokemon/'+ namePoke + '/');
    if(!promiseFetch.ok){
        alert('Pokemon Não Encontrado')
        return
    }
    const body = await promiseFetch.json();

    textoh1.textContent = body.name;
    img.src = body.sprites.front_default

})