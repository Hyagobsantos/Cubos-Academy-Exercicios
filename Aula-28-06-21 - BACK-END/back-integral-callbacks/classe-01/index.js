const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const NovasCidades = cidades.filter(x => x.length <= 8);

console.clear();
console.log(NovasCidades);