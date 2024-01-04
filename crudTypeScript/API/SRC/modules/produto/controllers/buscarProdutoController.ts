import { buscarProdutoService } from "../services/buscarProdutoService";
import { Request, Response } from "express"

export class buscarProdutoController {
    constructor(private readonly service: buscarProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const produto = await this.service.execute(Number(id))
        return response.json(produto)
    }
}