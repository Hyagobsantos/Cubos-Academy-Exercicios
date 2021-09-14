function processData(input) {
    //Enter your code here
    let novapalavra = "";
    let palavra = input.trim();
    
    let palavraMaiuscula = palavra.toUpperCase();
    let palavraMinuscula = palavra.toLowerCase();
    
    if (palavraMaiuscula === palavra){
        console.log(palavraMinuscula);
    }else if(palavra[0] === palavraMinuscula[0] && palavra.substr(1) === palavraMaiuscula.substr(1)) {
        novapalavra += palavraMaiuscula[0] + palavraMinuscula.substr(1)
        console.log(novapalavra);
    }else{
        console.log(palavra)
    }
} 


let input = "cAPS";
processData(input)