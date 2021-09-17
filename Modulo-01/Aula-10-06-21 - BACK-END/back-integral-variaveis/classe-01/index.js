const imc = (peso,altura) => {
    return peso / Math.pow(altura, 2).toFixed(2);
};

console.log(imc(76,1.79));