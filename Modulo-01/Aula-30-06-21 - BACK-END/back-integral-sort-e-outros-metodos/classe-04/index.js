const palavras = ['livro', 'canet', 'sol', 'carro', 'orel'];

const maisDe5 = palavras.find(x => x.length > 5)

if(maisDe5){
    console.log("Existe palavra inválida")
}else{
    console.log("Array validado")
}
