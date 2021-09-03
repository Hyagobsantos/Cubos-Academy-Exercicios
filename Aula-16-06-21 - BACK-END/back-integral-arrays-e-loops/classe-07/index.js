const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const result = nomes.filter((x,i) => x.charAt(0) == "A" || x.charAt(0) == "a");

console.log(result)
