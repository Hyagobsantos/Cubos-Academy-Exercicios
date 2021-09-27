const fs = require('fs');

const cont = fs.readFileSync('ex-02.json').toString();
const conteudo = JSON.parse(cont);

console.log(conteudo)


const novoConteudo = JSON.stringify(conteudo, null,2);

console.log(novoConteudo)

fs.writeFileSync("dados2.json",novoConteudo)