const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const numerosOrdenados = numeros.sort((x,y) => x - y)
const numerosDecres = numeros.sort((x,y) => y - x)

frutas.sort((a,b) => a.localeCompare(b)); //Ordem Alfabetica

frutas.sort((a,b) => b.localeCompare(a)); //Ordem Alfabetica decrescente

console.log(numerosOrdenados);
console.log(numerosDecres);