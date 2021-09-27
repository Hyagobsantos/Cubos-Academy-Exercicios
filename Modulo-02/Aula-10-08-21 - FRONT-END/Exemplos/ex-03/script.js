const body1 = document.querySelector('body');

const linkModal = document.querySelector(".modal a")
const imagemModal = document.querySelector(".modal img");
const Modal = document.querySelector(".modal");


function abrirModal(src){
    Modal.style.display = 'flex'
    imagemModal.src = src
    linkModal.href = src
}

async function buscarPhotos() {
    const photosBuscadas = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const body = await photosBuscadas.json()

    body.forEach((img,index) => {
        const div = document.createElement('div'); 
        div.classList.add('card')

        const imagem = document.createElement('img'); 
        imagem.classList.add('img') 

        const texto = document.createElement('p');  
        
        imagem.src = body[index].url;
        texto.textContent = body[index].title

        imagem.addEventListener('click', function(event) {
            abrirModal(event.target.src)
        })

        div.append(imagem,texto)

        body1.append(div)
        
    })
} 


Modal.addEventListener('click', function() {
    Modal.style.display = 'none'
})


window.onload = function(){
    buscarPhotos()
}





