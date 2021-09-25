const express = require('express');
const {criarPedido, consultarPedido} = require('../controller/pedidos')

const router = express();

router.get('/consultar-pedido/:id', consultarPedido);
router.post('/criar-pedido', criarPedido);


module.exports = router