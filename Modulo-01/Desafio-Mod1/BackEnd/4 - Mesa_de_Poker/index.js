function solucao(min, max, valores) {
    //seu codigo aqui
    const valor = valores.filter(x => x >= min && x <= max)

    console.log(valor);
  }


let min = 2;
let max = 10;
let valores = [2,10,0,5,6,10,11]
let valores2 = [1,1,1,2,3,4,5,6,7,8,9]

solucao(min, max, valores2);