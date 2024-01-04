import { ProdutoDTO } from "../dtos/produtoDTO";
import { editarProdutoService } from "../services/editarProdutoService";
import { Request, Response } from "express";

export class editarProdutoController {
    constructor(private readonly service: editarProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const data = <ProdutoDTO>request.body
        await this.service.execute(Number(id), data)
        return response.json({ message: "Produto foi atualizado"})
    }
}