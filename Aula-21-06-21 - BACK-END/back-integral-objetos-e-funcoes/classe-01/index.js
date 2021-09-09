const prova = {
    aluno: "Janine Carmona",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

const corrigirProva = (prova) => {
    const result = prova.questoes.filter(x => x.resposta === x.correta)
    console.log(`O aluno(a) ${prova.aluno} acertou ${result.length} questões e obteve nota ${(prova.valor / prova.questoes.length) * result.length}`)
}

corrigirProva(prova);




