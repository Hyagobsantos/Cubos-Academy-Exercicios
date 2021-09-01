function TaxaJuros(montante,capital,nPeriodos){
    var taxaDeJuros = 0.0;
    resu1 = 1/ nPeriodos;
    resu2 =  montante/capital;
    resu3 = Math.pow(resu2, resu1) - 1

    taxaDeJuros = resu3 * 100
    return taxaDeJuros.toFixed(3);

}

var montante = 90000;
var capital = 60000;
var meses = 24;

var porcentagem = TaxaJuros(montante,capital,meses)

console.log(`O seu financiamento de ${capital} Reais teve uma taxa de juros de ${porcentagem}% pois após ${meses} meses você teve que pagar ${montante} reais`)

