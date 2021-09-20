const imagensGaleria = document.querySelectorAll(".container img");
const linkModal = document.querySelector(".modal a")
const imagemModal = document.querySelector(".modal img");
const Modal = document.querySelector(".modal");

function abrirModal(src){
    Modal.style.display = 'flex'
    imagemModal.src = src
    linkModal.href = src
}

imagensGaleria.forEach(imagem => {
    imagem.addEventListener('click', function(event){
        abrirModal(event.target.src)
    });
});

Modal.addEventListener('click', function() {
    Modal.style.display = 'none'
})

linkModal.addEventListener('click', function(event) {
    event.stopPropagation();
});