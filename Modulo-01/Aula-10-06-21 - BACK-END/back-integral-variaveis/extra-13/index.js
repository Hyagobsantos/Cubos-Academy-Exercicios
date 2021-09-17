const Pi = 3.14;

function AreaCilindroTotal(raio, altura){

    var base1 = Math.pow(raio, 2)
    var circunferencia  = 2 * raio;
    var circunferencia2 = circunferencia * altura;


    var area = 2 * base1 + circunferencia2;

    return area;
}

resultado = AreaCilindroTotal(4, 8);

console.log(`${resultado}π cm²`);