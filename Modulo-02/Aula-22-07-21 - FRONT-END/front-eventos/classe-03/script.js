const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal')
const cancelar = document.querySelector('.cancelar');
const confirmar = document.querySelector('.confirmar');

btn.addEventListener('click', function(){
    btn.textContent = "INSCRITO";
    btn.classList.add('inscrito');

    btn.addEventListener('click', function(){
        modal.classList.remove('escondido')
    })

    cancelar.addEventListener('click', function(){
        modal.classList.add('escondido')
    })

    confirmar.addEventListener('click', function(){
        modal.classList.add('escondido');

        btn.textContent = "INSCREVER-SE";
        btn.classList.remove('inscrito');
    })

});