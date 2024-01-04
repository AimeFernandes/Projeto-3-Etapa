import { ProdutoEntity } from "../entities/produtoEntity";
import { Produto } from ".prisma/client"

export class ProdutoPrismaMapping {
    static to(produto: Produto): ProdutoEntity {
        return {
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            valor: produto.valor,
            quantidade: produto.quantidade
        }
    }

    static from(produto: ProdutoEntity): Produto {
        return {
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            valor: produto.valor,
            quantidade: produto.quantidade
        }
    }
}