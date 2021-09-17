const frutas = document.querySelectorAll('li');

function buscarFruta(event){
   if(event.code === 'Enter'){
        frutas.forEach(fruta => {
            fruta.classList.remove('escondido');

            if(event.target.value && fruta.textContent != event.target.value){
                fruta.classList.add('escondido')
            }
        });

        event.target.value = '';
   }
}