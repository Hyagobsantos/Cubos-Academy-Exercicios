const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855980; //emCentavos

//seu código aqui

if(aposentada || portadoraDeDoenca){
    console.log("ISENTA")
    return
}

if(totalDeRendimentos < 28_559_70){
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
    return
}else{
    console.log("PEGA LEAO")
}
