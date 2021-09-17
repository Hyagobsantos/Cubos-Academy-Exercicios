const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

let i = 0
const fruru = frutas.map(x => i++ + " - "+ x.charAt(0).toUpperCase() + x.substr(1).toLowerCase())

const fruru1 = frutas.map((x,i) => `${i} - ${x.charAt(0).toUpperCase()+ x.substr(1).toLowerCase()}`)


console.log(fruru)
console.log(fruru1)