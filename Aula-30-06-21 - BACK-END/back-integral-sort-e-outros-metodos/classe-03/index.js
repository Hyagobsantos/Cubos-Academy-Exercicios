const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44,101];


const maior = numeros.reduce((acc,index) => acc < index ? acc = index : acc)

console.log(maior);