const listaDeInstrutores = require("../dados/instrutores");
const areasDeAtuacao = [
    "Logica",
    "Back-end",
    "Full-stack",
    "Flutter",
    "Soft Skills",
    "UI/UX"
]

const consultarTodosInstrutores = (req,res) => {
    res.json(listaDeInstrutores)
};

const consultarUmInstrutor = (req,res) => {
    const buscado = listaDeInstrutores.find(x => x.id === Number(req.params.id));
    if(buscado != undefined){
        res.json(buscado)
    }else{
        res.status(404)
        res.json({erro: `Instrutor ${req.params.id} Não Existe`})
        return;
    }
}

let proximoId = 5;

const validarInstrutor = (instrutor) => {
    if(!instrutor.nome) {
        return "O campo 'nome' é obrigatório.";
    }

    if(!instrutor.idade){
        return "O campo 'idade' é obrigatório.";
    }
    if(!instrutor.areaDeAtuacao){
        return "O campo 'areaDeAtuacao' é obrigatório.";
    }

    if(typeof instrutor.nome !== "string"){
        return"O Campo 'Nome' Deve ser preenchido com um texto.";
    }

    if(typeof instrutor.idade !== "number"){
        return"O Campo 'idade' Deve ser preenchido com um texto.";
    }

    if(typeof instrutor.areaDeAtuacao !== "string"){
        return"O Campo 'areaDeAtuacao' Deve ser preenchido com um texto.";
    }

    if(instrutor.idade < 18){
        return "O Instrutor deve ser maior de idade";
    }

    if(!areasDeAtuacao.includes(instrutor.areaDeAtuacao)) {
        return "A area de atuação é invalida";
    }

    if(!instrutor.nome.includes(" ")){
        return "O nome deve contar primeiro nome e sobrenome"
    }
};

const criarUmInstrutor = (req,res) => {
    const erro = validarInstrutor(req.body);
    
    if(erro){
        res.status(400).json({erro});
        return;
    }

    const novoInstrutor = {
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao
    } 

    listaDeInstrutores.push(novoInstrutor);
    proximoId++

    res.json(novoInstrutor);
}

const alterarInstrutor = (req,res) => {
    const buscado = listaDeInstrutores.find(x => x.id === Number(req.params.id));

    if(!buscado){
        res.status(404).json({erro: "instrutor " + req.params.id + " não Existe."})
        return;
    }

    const erro = validarInstrutor({
        nome: req.body.nome ?? buscado.nome,
        //faz a mesma coisa que o de cima, ele usa o que existir
        idade: req.body.idade === undefined ? buscado.idade : req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao ?? buscado.areaDeAtuacao
    });
    
    if(erro){
        res.status(400).json({erro});
        return;
    }

    if(req.body.nome !== undefined) buscado.nome = req.body.nome
    
    if(req.body.idade !== undefined) buscado.idade = req.body.idade

    if(req.body.areaDeAtuacao !== undefined) buscado.areaDeAtuacao = req.body.areaDeAtuacao

    res.json(buscado);
}

const substituirInstrutor = (req,res) => {
    const erro = validarInstrutor(req.body);
    
    if(erro){
        res.status(400).json({erro});
        return;
    }

    if (req.body.id !== Number(req.params.id)){
        res.status(400).json({erro: "O Campo Id deve Ser Igual na rota e no corpo da requisição"})
        return;
    }

    const buscado = listaDeInstrutores.find(x => x.id === Number(req.params.id));
    
    if(buscado){
        // substitui o existente
        buscado.nome = req.body.nome
        buscado.idade = req.body.idade
        buscado.areaDeAtuacao = req.body.areaDeAtuacao
        res.json(buscado);
    }else{
        //inseri
        const novoInstrutor = req.body 
        listaDeInstrutores.push(novoInstrutor);
        res.json(novoInstrutor);
    }
}

const deletarUmInstrutor = (req,res) => {
    const buscado = listaDeInstrutores.find(x => x.id === Number(req.params.id));

    if(!buscado){
        res.status(404).json({erro: "instrutor " + req.params.id + " não Existe."})
        return;
    }
    
    const indice = listaDeInstrutores.indexOf(buscado);

    listaDeInstrutores.splice(buscado,1);
    res.json(buscado)
}

module.exports = {consultarTodosInstrutores, consultarUmInstrutor, criarUmInstrutor, alterarInstrutor,substituirInstrutor,deletarUmInstrutor}

