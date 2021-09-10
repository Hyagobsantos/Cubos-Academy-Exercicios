const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const novaCidade = cidades.reduce((acc,index) => index.length > acc.length ? acc = index : acc);

console.log(novaCidade);
