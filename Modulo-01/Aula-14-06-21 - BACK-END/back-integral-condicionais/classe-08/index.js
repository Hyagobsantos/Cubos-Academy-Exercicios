const idade = 13;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = true;

if(idade < 12 || idade > 65 || possuiPatologia || altura < 150){
    console.log("NEGADO")
}else{
    if(ehEstudante){
        console.log("10 CONTO")
    }else{
        console.log("20 CONTO")
    }
}

