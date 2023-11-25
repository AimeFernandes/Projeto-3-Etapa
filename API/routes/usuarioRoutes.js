const Router = require('express');
const usuarioController = require('../controllers/usuarioController.js');

const routes = new Router();

routes
  .get("/listarProdutos", usuarioController.listarProdutos)
  .post("/cadastro", usuarioController.cadastrar)
  .post("/produtos", usuarioController.addProduto) 
  .put("/editarProduto", usuarioController.editarProduto)
  .delete("/deletarProduto/:nome", usuarioController.deletarProduto);

module.exports = routes;