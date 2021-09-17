const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const retorno = numeros.filter(x => Math.sign(x) === 1);


console.log(retorno)