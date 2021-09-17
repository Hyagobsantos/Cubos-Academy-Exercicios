const input = document.querySelectorAll('input');

input.forEach(campo => {
    campo.addEventListener('change', function(event) {
        if(event.target.value === campo.dataset.resposta){
           campo.classList.add('acerto')
        }else{
            campo.classList.add('erro')
        }
        
    });
});