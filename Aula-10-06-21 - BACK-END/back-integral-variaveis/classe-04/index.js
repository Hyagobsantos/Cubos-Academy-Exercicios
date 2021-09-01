const jurosCompostos = (c,i,t) => {
    return `O Valor do Montante é ${Math.trunc(c * Math.pow(1+i, t))}`
};

console.log(jurosCompostos(1000,0.125,5));