const usuarioModel = require('../models/usuarioModel.js');

class UsuarioController {

  async cadastrar(req, res) {
    const { email, senha } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Digite seu email" });
    }
    if (!senha) {
      return res.status(400).send({ message: "Digite sua senha" });
    }
    try {
      const resultado = await usuarioModel.cadastrar(email, senha);
      return res
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      res.status(400).send({ message: `Erro ao cadastrar Usuário - ${error}` });
    }
  }

  async listarProdutos(req, res) {
    try {
      const produtos = await usuarioModel.listarProdutos();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).send({ message: `Erro ao listar produtos - ${error}` });
    }
  }

  async addProduto(req,res) {
    const { categoria, nome, preco, descricao } = req.body;
        try {
            await usuarioModel.addProduto(categoria, nome, preco, descricao)
            res.status(200).send({mensagem: "Produto adicionado"})
        } catch (error) {
          res.status(500).send({ mensagem: `Erro ao adicionar o produto - ${error}` });
        }
  }

  async deletarProduto(req, res) {
    try {
      const nomeDoProduto = parseInt(req.params.nome);
      const resp = await usuarioModel.deletarPedido(nomeDoProduto);
      res.status(500).send({ message: "Deletado com sucesso" });
    } catch (error) {
      res.status(500).send({ message: `Erro ao deletar produto - ${error}` });
    }
  }

  async editarProduto(req, res) {
    const { novaCategoria, nome, novoPreco, novaDescricao } = req.body;
    try {
      await usuarioModel.editarProduto(
        novaCategoria,
        nome,
        novoPreco,
        novaDescricao
      );
      res.status(200).send({ message: "Produto atualizado!" });
    } catch (error) {
      res.status(500).send({ message: `Erro ao editar produto - ${error}` });
    }
  }
}

module.exports = new UsuarioController();