const axios = require('axios').default;


// const Telein = axios.get('https://interface.telein.com.br/integracoes_json/agentes.php');

// cepPromise.then(response => {
    
//    console.log(response.data)
    
// })

// function obterLogradouro(cep) {
//     const resposePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//     return resposePromise.then(response => response.data.logradouro)
// }

// obterLogradouro('07241430').then(logradouro => console.log(logradouro))


async function obterLogradouro(cep) {
    const retorno = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return retorno.data.logradouro
}

async function exibirLogradouros1(ceps){
    for(const cep of ceps){
        console.log(await obterLogradouro(cep))
    }
}

async function exibirLogradouros2(ceps){
    ceps.forEach(async(cep) => {
        console.log(cep, '=>', await obterLogradouro(cep))
    })
}

async function exibirLogradouros3(ceps){
    const list = ceps.map(async (cep) => {
        console.log(cep, '=>', await obterLogradouro(cep))
    })
}


async function exibirLogradouros4(ceps){
    const list = ceps.map(async (cep) => {
        console.log(cep, '=>', await obterLogradouro(cep))
    })

    const PromessaFinal = Promise.all(list);
}


exibirLogradouros3(["07241410","07241430"]).then(() => console.log("FIM"))

// obterLogradouro('07241430').then(logradouro => console.log(logradouro))