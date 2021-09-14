function solucao(min, km) {
    //seu codigo aqui
    let quilometro10 = 0;
    let minuto10 = 0;
    let extrakm = 0;
    let extramin = 0;
    if (km > 10 ){
        extrakm = (10 * 70);
        quilometro10 = km - 10; 
        extrakm += quilometro10 * 50;
    }else{
        extrakm = km * 70;
    }
    if(min > 20){
        extramin = (20 * 50);
        minuto10 = min - 20;
        extramin += minuto10 * 30;
    }else{
        extramin = min * 50
    }

    console.log(extramin + extrakm);
}

let min = 25
let km = 11.5

solucao(min,km)