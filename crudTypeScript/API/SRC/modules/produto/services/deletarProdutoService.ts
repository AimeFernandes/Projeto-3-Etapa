import { ProdutoRepository } from "../repositories/produtoRepository";

export class deletarProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(id: number): Promise<void> {
        await this.produtoRepository.delete(id)
    }
}