const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

const result = numeros.filter(x => x % 2 == 0).reduce((acc,index) => acc + index)

console.log(result)

