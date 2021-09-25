const app = require('./server');
let port = 3000;


app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
});