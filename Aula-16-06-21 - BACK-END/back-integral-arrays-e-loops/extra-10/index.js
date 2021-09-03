const numeros = [10,40,5];

let arrayAuxiliar = [];
let arrayAuxiliar1 = 0;
for(let index in numeros){
    for(let i in numeros){
        arrayAuxiliar1 = numeros[index] - numeros[i]
        if(Math.sign(arrayAuxiliar1) === 1){
            arrayAuxiliar.push(arrayAuxiliar1)
        }
    }
}

console.log(arrayAuxiliar.reduce((x,i) => x > i ? x : x = i));
