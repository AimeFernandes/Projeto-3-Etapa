import { ProdutoEntity } from "../entities/produtoEntity";
import { ProdutoRepository } from "../repositories/produtoRepository";

export class buscarProdutosService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(): Promise<ProdutoEntity[]> {
        const produtos = await this.produtoRepository.find()
        return produtos
    }
}