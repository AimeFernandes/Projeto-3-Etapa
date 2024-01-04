import { ProdutoDTO } from "../dtos/produtoDTO";
import { cadastrarProdutoService } from "../services/cadastrarProdutoService";
import { Request, Response } from "express";

export class cadastrarProdutoController {
    constructor(private readonly service: cadastrarProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const produto = <ProdutoDTO>request.body
        await this.service.execute(produto)
        return response.json({ message: "Produto criado com sucesso "})
    }
}