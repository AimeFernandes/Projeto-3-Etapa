import { ProdutoEntity } from "../entities/produtoEntity";
import { ProdutoRepository } from "../repositories/produtoRepository";

export class buscarProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(id: number): Promise<ProdutoEntity> {
        const produto = await this.produtoRepository.findById(id)
        return produto
    }
}