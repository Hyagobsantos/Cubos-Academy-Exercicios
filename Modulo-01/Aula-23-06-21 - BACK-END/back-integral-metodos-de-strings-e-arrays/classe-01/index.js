const comentario = "Esse COVID é muito perigoso!".toUpperCase();

const contem = comentario.includes("COVID") || comentario.includes("PANDEMIA") ;

if(contem){
    console.log("Comentário bloqueado por conter palavras proibidas")
}else{
    console.log("Comentário autorizado")


    
}
