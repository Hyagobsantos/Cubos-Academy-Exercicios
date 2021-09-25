const btnClose = document.querySelector('.aside__button--close');
const aside = document.querySelector('.aside');
const asideimg = document.querySelector('.aside__button img')
const imagemCard = document.querySelectorAll('.card__img img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal .imgModal');
const fecharModal = document.querySelector('.fecharModal');
const anterior = document.querySelector('.imgprev');
const prox = document.querySelector('.imgnext');



btnClose.addEventListener('click', function(event) {
    aside.classList.toggle('hidden');

    asideimg.src = aside.classList.contains('hidden') ? './assets/closed-menu.svg' :  './assets/open-menu.svg'

   
})
let dataAnotation = 0;
imagemCard.forEach(img => {
    img.addEventListener('click', function(event) {
        modalImg.src = event.target.src
        modal.classList.remove('escondido')
        dataAnotation = img.dataset.img;
    })
})

fecharModal.addEventListener('click',function(event){
    modal.classList.add('escondido')
})

function verificaPrimeiroClick(dataAnotation){
    if(dataAnotation === "1"){
        anterior.classList.add('escondido')
    }

    if(dataAnotation === "10"){
        prox.classList.add('escondido')
    }
}

prox.addEventListener('click', function() {
    console.log(dataAnotation)
    dataAnotation++
    modalImg.src = `./assets/gallery/image ${dataAnotation}.png`
    console.log(dataAnotation)
    if(dataAnotation === 10){
        prox.classList.add('escondido')
        anterior.classList.remove('escondido')
        dataAnotation = 10
    }
});

anterior.addEventListener('click', function() {
    dataAnotation--
    if(dataAnotation === 1){
        anterior.classList.add('escondido')
        prox.classList.remove('escondido')
    }
    modalImg.src = `./assets/gallery/image ${dataAnotation}.png`
   
    
});






