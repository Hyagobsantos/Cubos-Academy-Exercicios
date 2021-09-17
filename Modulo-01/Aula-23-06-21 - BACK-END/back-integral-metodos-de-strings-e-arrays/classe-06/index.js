const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const frutasInver = frutas.reverse();

const frutasArray = frutasInver.join(",")

console.log(frutasArray)

const novoArrayFrutas = frutasArray.split(",").reverse();

novoArrayFrutas.shift();
novoArrayFrutas.pop();
novoArrayFrutas.push("Melão");

console.log(novoArrayFrutas);