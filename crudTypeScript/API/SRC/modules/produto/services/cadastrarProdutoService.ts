import { ProdutoDTO } from "../dtos/produtoDTO";
import { ProdutoRepository } from "../repositories/produtoRepository";
import { ProdutoMapping } from '../mappings/produtoMapping';

export class cadastrarProdutoService {
    constructor(private readonly produtoRepository: ProdutoRepository) {}
    async execute(data: ProdutoDTO): Promise<void> {
        const produto = ProdutoMapping.from(data)
        const resposta = await this.produtoRepository.create(produto)
    }
}