function solucao(numero, limiteInferior, limiteSuperior) {
    if(numero >= limiteInferior && numero <= limiteSuperior){
        console.log("PERTENCE")
    }else{
        console.log("NAO PERTENCE")
    }
}

numero = 10;
limiteInferior = 5;
limiteSuperior = 20;
solucao(numero, limiteInferior, limiteSuperior)