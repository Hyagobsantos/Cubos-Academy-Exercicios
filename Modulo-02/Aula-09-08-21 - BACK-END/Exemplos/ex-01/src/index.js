const app = require('./servidor');
let porta = 8000;


app.listen(porta, () => {
    console.log(`Rodando em http:localhost:${porta}`)
})