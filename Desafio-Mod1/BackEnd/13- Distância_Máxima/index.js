function processData(input) {
    //Enter your code here
    let valores = input.trim().split("\n");
    valores.splice(0, 1);
    let cordenadas = [];
    let maior = 0;
    for(let i = 0; i < valores.length; i++){
        let corde = valores[i].split(" ");

        cordenadas.push({
            x: (corde[0]),
            y: (corde[1]),
        })
    }

    for(let index of cordenadas){
        let x = index.x;
         let y = index.y;
        for(let index2 of cordenadas){
            let x2 = index2.x;
            let y2 = index2.y;

            if(Math.sqrt(Math.pow((x2 - x),2) + Math.pow((y2 - y),2)) > maior ){
                maior = Math.sqrt(Math.pow((x2 - x),2) + Math.pow((y2 - y),2));
        }

   }
    }



    console.log(maior);

} 

let input = "3\n0 0\n0 3\n4 0";
processData(input)