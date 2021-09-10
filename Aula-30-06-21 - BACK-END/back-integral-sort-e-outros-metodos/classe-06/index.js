const numeros = [0, 122, 4, 6, 7, 8, 44];

const nu = numeros.every(x => x % 2 == 0);

if(nu){
    console.log("array válido")
}else{
   console.log("array inválido") 
}

