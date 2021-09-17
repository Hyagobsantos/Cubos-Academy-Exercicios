function processData(input) {
    //Enter your code here
    let senhaCerta = input.trim().split("\n")[0];
    let senhaBugada = input.trim().split("\n")[1]; 
    let contador = 0;
    let senhaConferida = "";
    if(senhaBugada.length < senhaCerta.length){
        console.log("NAO");
    }else{
       for(let i= 0 ; i < senhaBugada.length; i++){
            if(senhaBugada[i] === senhaCerta[contador] ){
                senhaConferida += senhaBugada[i];
                contador++
                
            }

       }

       if(senhaConferida === senhaCerta){
           console.log("SIM")
       }else{
           console.log("NAO")
       }
    }
} 


let input = "cubos\ncuggbyos"
processData(input)