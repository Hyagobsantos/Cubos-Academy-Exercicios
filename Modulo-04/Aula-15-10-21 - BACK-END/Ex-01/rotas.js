const express = require("express");
const { getUsuarios, createUsuario } = require("./usuarios");

const route = express();

route.get("/", getUsuarios);
route.post("/", createUsuario);

module.exports = route;
