const db = require("../src/bancodedados");
const instaciaAxios = require("../services/empresas");
const fs = require("fs");

const consultar = async (req, res) => {
  try {
    const dominip = req.query.dominio;
    const pedido = await instaciaAxios.get("?domain=" + dominip);
    const result = pedido.data;

    db.Empresas.push(result);
    // id++
    // novoRegistro = JSON.stringify(db, null,2);
    // fs.writeFileSync(
    //     "./src/bancodedados.js",
    //     "module.exports = " + novoRegistro
    // )
    res.send(result);
  } catch (err) {
    const {
      data: { errors },
      status,
    } = err.response;
    return res.status(status).json({
      erro: `${errors[0].parameter_name} - ${errors[0].message}`,
    });
  }
};

module.exports = { consultar };
