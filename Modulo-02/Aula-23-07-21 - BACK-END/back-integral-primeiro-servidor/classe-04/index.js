const express = require("express");

const app = express();

app.use(express.json());

app.get("/somar", (req,res) => {
    const n1 = Number(req.query.num1)
    const n2 = Number(req.query.num2)

    res.json(n1 + n2)
})

app.get("/subtrair", (req,res) => {
    const n1 = Number(req.query.num1)
    const n2 = Number(req.query.num2)

    res.json(n1 - n2)
})


app.get("/multiplicar", (req,res) => {
    const n1 = Number(req.query.num1)
    const n2 = Number(req.query.num2)

    res.json(n1 * n2)
})

app.get("/dividir", (req,res) => {
    const n1 = Number(req.query.num1)
    const n2 = Number(req.query.num2)

    res.json(n1 / n2)
})

app.listen(3008)