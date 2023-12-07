const conexaoBancoDeDados = require('../database/db_connection.js');

class usuarioModel {
  
  async cadastrar(email, senha) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "INSERT INTO usuarios (email, senha) VALUES ($1, $2)";
    return await conexao.query(comandoSql, [email, senha]);
  }

  async addProduto(categoria, nome, preco, descricao) {
    const conexao = await conexaoBancoDeDados.conectar();
    const sql =
      "INSERT INTO produtos (categoria, nome, preco, descricao) VALUES ($1, $2, $3,$4)";
    return await conexao.query(sql, [categoria, nome, preco, descricao]);
  }

  async listarProdutos() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM produtos";
    const listaProdutos = await conexao.query(comandoSql);
    return listaProdutos.rows;
  }

  async listarProdutoPorNome(nome) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM produtos WHERE nome ILIKE '%'||$1||'%'";
    const produto = await conexao.query(comandoSql, [nome]);
    console.log('model' + nome)
    return produto.rows;
  }

  async listarProdutoPorId(id) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM produtos WHERE id = ($1)";
    const produto = await conexao.query(comandoSql, [id]);
    
    return produto.rows;
  }
  
  async deletarProduto(idProduto) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "DELETE FROM produtos WHERE id = ($1)";
    try{
      const resp = await conexao.query(comandoSql, [idProduto]);
      return resp;
    } catch(error){
      throw new Error(error);
    }
  }
  
  async editarProduto(categoria, nome, preco, descricao, id) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql =
    "UPDATE produtos SET categoria = ($1), nome = ($2), preco = ($3), descricao = ($4) WHERE id = ($5)";
    try{
      const resp = await conexao.query(comandoSql, [
      categoria,
      nome,
      preco,
      descricao,
      id
      ]);
      return resp;
    }catch(error){
      throw new Error(error);
    }
  }
}

module.exports = new usuarioModel();