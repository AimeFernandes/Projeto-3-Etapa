import { ProdutoDTO } from "../dtos/produtoDTO";
import { ProdutoMapping } from "../mappings/produtoMapping";
import { ProdutoRepository } from "../repositories/produtoRepository";

export class editarProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(id: number, data: ProdutoDTO): Promise<void> {
        const produto = ProdutoMapping.from(data)
        await this.produtoRepository.update(id, produto)
    }
}