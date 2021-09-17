//renda mensal do aluno, em centavos.
let rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
let mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
let totalJaPagoPeloAluno = 1000000;


if(mesesDecorridos < 60){
    while (totalJaPagoPeloAluno < 1800000)
    if(rendaMensalEmCentavos >= 200000){
        let parcela = (rendaMensalEmCentavos * 0.18);
        console.log(`O valor da parcela desse mês ${mesesDecorridos} é R$ ${parcela / 100} reais`)
        totalJaPagoPeloAluno += parcela
        mesesDecorridos++
        console.log(totalJaPagoPeloAluno / 100)
    }
}else{
    console.log(`O Aluno não deve nada`)
}

