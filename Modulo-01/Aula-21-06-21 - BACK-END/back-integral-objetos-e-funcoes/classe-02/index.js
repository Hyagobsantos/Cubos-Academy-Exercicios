const carro = {
    ligado: false,
    velocidade:0,
    ligar: function() {
        if(this.ligado === false){
            this.ligado = true;
            this.velocidade = 0;
            this.situation();
        }else{
            console.log("Este carro já está ligado")
        }
    },
    desligar: function() {
        if(this.ligado === false){
            console.log("Este carro já está desligado.")
        }else if(this.velocidade === 0){
            this.ligado = false;
            this.situation()
        }else{
            console.log("Para Desligar a velocidade precisa ser 0")
        }
    },
    acelerar: function(){
       if(this.ligado === false){
            console.log("Não é possível acelerar um carro desligado.")
       }else{
           this.velocidade += 10;
           this.situation()
       } 
    },
    desacelerar: function(){
        if(this.ligado === false){
            console.log("Não é possível desacelerar um carro desligado.")
       }else{
           this.velocidade -= 10;
           this.situation()
       } 
    },
    situation: function(){
        console.log(`Carro ${this.ligado === true ? 'Ligado' : 'Desligado'} Velocidade: ${this.velocidade}`)
    }


}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()


