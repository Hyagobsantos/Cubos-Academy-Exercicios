const converterParaGraus = (fahrenheit) => {
    return Math.round((fahrenheit - 32) * 5/9);
};

console.info(converterParaGraus(73));