const palavras = ["arroz","feijão", "carne", "cerveja", "macarrão"];

const aceitavel = palavras.some(x => x === "vodka" || x === "cerveja");

if(aceitavel){
   console.log("revise sua lista, joão. possui bebida com venda proibida!") 
}else{
    console.log("revise sua lista, joão. possui bebida com venda proibida!")
}
