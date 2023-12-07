const Router = require('express');
const usuarioController = require('../controllers/usuarioController.js');

const routes = new Router();

routes
  .get("/listarProdutos", usuarioController.listarProdutos)
  .get("/listarProdutoPorNome/:nome", usuarioController.listarProdutoPorNome)
  .get("/listarProdutoPorId/:id", usuarioController.listarProdutoPorId)
  .post("/cadastro", usuarioController.cadastrar)
  .post("/produtos", usuarioController.addProduto) 
  .put("/editarProduto/:id", usuarioController.editarProduto)
  .delete("/deletarProduto/:id", usuarioController.deletarProduto);

module.exports = routes;