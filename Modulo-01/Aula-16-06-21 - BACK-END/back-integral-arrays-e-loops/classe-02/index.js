const letras = ["A", "a", "B", "C", "k", "j"];


const contem = letras.filter(x => x == "E" || x == "e");

contem.length > 0 ? console.log(contem.length) : console.log("Não Contém")
