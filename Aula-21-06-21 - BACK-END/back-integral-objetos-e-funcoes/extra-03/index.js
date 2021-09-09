const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function(){
        let totalProdutos = 0;
        for(let index of this.produtos){
            totalProdutos += index.qtd
        }

        return totalProdutos;
        
    },
    calcularTotalAPagar: function(){
        let PrecototalProdutos = 0;
        for(let index of this.produtos){
            PrecototalProdutos += index.qtd * index.precoUnit
        }
       return PrecototalProdutos
    },
    imprimirResumo: function(){
        console.clear();
        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de Itens: ${this.calcularTotalDeItens()} Itens`)
        console.log(`Total a Pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`) 
    },
    addProduto:function(produto){
        const buscado = this.produtos.find(x => x.id == produto.id)
    
        if(buscado === undefined){
            carrinho.produtos.push(produto)
        }else{
            buscado.qtd += produto.qtd
        }
    },
    imprimirDetalhes:function(){
        console.clear()
        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log("");
        for(let index of this.produtos){
            console.log(`Item ${index.id} - ${index.nome} - ${index.qtd} und - R$ ${(index.precoUnit / 100).toFixed(2)}`)
        }
        console.log("");
        this.calcularTotalDeItens();
        this.calcularTotalAPagar();
    },
    calcularDesconto: function(){
        let desconto = 0;
        if(this.calcularTotalDeItens() > 4){
            let cora = this.produtos.sort((a,x) => a.precoUnit - x.precoUnit)
            desconto = (cora[0].precoUnit / 100).toFixed(2);
        }else if(this.calcularTotalAPagar() > 100){
            desconto = ((this.calcularTotalAPagar() * 0.1) / 100).toFixed(2)
        }

        return console.log(desconto)


       
    }
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.addProduto(novaBermuda)
carrinho.addProduto(novoTenis)
// carrinho.imprimirDetalhes();
// carrinho.imprimirResumo();
carrinho.calcularDesconto();



