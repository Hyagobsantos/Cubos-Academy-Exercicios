const express = require('express');
const {consultar}  = require('../controller/controlador');

const router = express();

router.get('/empresa', consultar)


module.exports = router
