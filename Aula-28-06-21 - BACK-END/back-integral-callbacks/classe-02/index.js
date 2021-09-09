const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];


const buscarEndereco = (cep) => {
     const rua = endereços.find(x => x.cep === cep)
     return rua.rua
}


console.log(buscarEndereco(00222444)
);