const diaDaSemana = 3;

const semana = [
    {
        numero:1,
        nome:"Segunda"
    },
    {
        numero:2,
        nome:"Terça"
    },
    {
        numero:3,
        nome:"Quarta"
    },
    {
        numero:4,
        nome:"Quinta"
    },
    {
        numero:5,
        nome:"Sexta"
    },
    {
        numero:6,
        nome:"Sabado"
    },
    {
        numero:7,
        nome:"Domingo"
    },
]

let retorinou = semana.find(x => x.numero === diaDaSemana)

console.log(retorinou.nome)
