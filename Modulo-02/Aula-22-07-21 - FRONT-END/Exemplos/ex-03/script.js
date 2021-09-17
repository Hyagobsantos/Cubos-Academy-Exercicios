const botaoincrito = document.querySelector('.btn');
const botoes = document.querySelectorAll('.modal button');
const botaoConfirmar = document.querySelector('.confirmar');
const modal = document.querySelector('.modal');


botaoincrito.addEventListener('click', inscrever)

botoes.forEach(botoes => {
    botoes.addEventListener('click', function() {
        modal.classList.add('escondido')
    })
})

function inscrever(){
    botaoincrito.textContent = "INSCRITO";
    botaoincrito.classList.add('inscrito');

    botaoincrito.removeEventListener('click', inscrever);

    botaoincrito.addEventListener('click', function () {
        modal.classList.remove('escondido');
   });
}




botaoConfirmar.addEventListener('click', function () {
    botaoincrito.textContent = 'INSCREVER-SE';
    botaoincrito.classList.remove('inscrito');
    
    botaoincrito.addEventListener('click', inscrever);
});




   