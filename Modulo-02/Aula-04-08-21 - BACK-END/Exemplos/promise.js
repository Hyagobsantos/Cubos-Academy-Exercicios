const fs = require('fs/promises')

//promise

//primeira Forma
// const leituraDoArquivo = fs.readFile('ex-03.txt');

// leituraDoArquivo.then(data => {
//     console.log(data.toString());
// })

// leituraDoArquivo.catch((err) => {
//     console.log(err)
// })

//Forma Contraida
// fs.readFile('ex-03.txt').then((data) => {
//     console.log(data.toString());
// }).catch((err) => {
//     console.log(err)
// }) 

//terceiro Exemplo

// fs.readFile('ex-03.txt').then(data => 
//     fs.writeFile('novoTexto.txt', data)
// ).then(() => {
//     console.log('Escrita Completa');
// }).catch(err => {
//     console.log('Falha ao Escrever', err)
// })


// fs.readFile('./ex-03.txt', (err,data) => {
//     if(err){
//         console.log("erro",err)
//     }else{
//         fs.writeFile('novoTexto.txt', data, (err) => {
//             if(err){
//                 console.log(console.log("Erro ao Escrever", err))
//             }else{
//                 console.log("Escreveu Com Sucesso!")
//             }
//         })
//     }
// });


//testes 


// const leituraDoArquivo = fs.readFile('ex-03.txt');

// leituraDoArquivo.then(data => {
//     fs.writeFile('novoTexto.txt', data)
// }).then(() => {
//     console.log("Terminou")
// })

// leituraDoArquivo.then(data => {
//     fs.writeFile('novoTexto1.txt', data)
// }).then(() => {
//     console.log("Terminou1")
// })

leituraDoArquivo.catch((err) => {
    console.log(err)
})