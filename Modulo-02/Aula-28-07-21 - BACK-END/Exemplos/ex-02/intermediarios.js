const logarRequisicao = (req,res,next) => {
    console.log(req.method, req.url);
    console.log("Sou sou Intermediario",  req.body)
    next();
}

const validarEntrada = (req,res,next) => {
    if(req.method === "GET" || req.query.senha === "123456"){
        next();
    }else{
        res.status(401);
        res.json({erro: "Senha incorreta"});
    }
};

module.exports = {logarRequisicao,validarEntrada}