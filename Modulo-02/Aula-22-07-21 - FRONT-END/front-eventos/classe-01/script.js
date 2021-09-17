const input = document.querySelector('input');
const lis = document.querySelectorAll('li');


input.addEventListener('keydown', function(event){
    if(event.code === 'Enter'){
        lis.forEach(fruta => {
            if(event.target.value && fruta.textContent != event.target.value){
                fruta.classList.add('escondido')
            }else{
                fruta.classList.remove('escondido')
            }
        });

        input.value = "";
    }   

});

