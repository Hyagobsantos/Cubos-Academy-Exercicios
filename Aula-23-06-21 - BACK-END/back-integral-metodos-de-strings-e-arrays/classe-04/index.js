let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

if(identificador.length != 6){
   console.log(identificador.padStart(6,0))
}else{
    console.log(identificador)
}

let nomearray = nome.split(' ');

let nomeParcial = []

for(let index of nomearray){
    nomeParcial.push(`${index.substr(0,1).toUpperCase()}${index.substr(1).toLowerCase()}`);
}
nomeValidado = nomeParcial.join(" ")

console.log(nomeValidado)
console.log(email.trim());
console.log(tags.join(","))



