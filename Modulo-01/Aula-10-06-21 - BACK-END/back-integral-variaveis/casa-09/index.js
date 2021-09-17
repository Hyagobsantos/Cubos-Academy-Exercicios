var lados = 6

function somaPoligno(lados){
    var s = (lados - 2) * 180;

    return s;

}


var total = somaPoligno(lados);
var valorLados = total / lados;


console.log(total)
console.log(valorLados)