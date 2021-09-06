const palavra = "A minha Mãe Tem um Cartão".toUpperCase();

let aux = 0;
for(let index in palavra){
    if(palavra[index] === "A" || palavra[index] === "Ã"){
        aux++
    }
};

console.log(`Foram Encontradassd ${aux} Letras A`);