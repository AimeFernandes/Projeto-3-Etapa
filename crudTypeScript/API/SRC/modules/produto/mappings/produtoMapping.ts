import { ProdutoDTO } from "../dtos/produtoDTO";
import { ProdutoEntity } from "../entities/produtoEntity";

export class ProdutoMapping {
    static from(produto: ProdutoDTO): ProdutoEntity {
        return {
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            valor: produto.valor,
            quantidade: produto.quantidade
        }
    }
}