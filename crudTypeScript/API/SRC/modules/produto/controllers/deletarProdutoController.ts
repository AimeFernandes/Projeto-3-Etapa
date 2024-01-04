import { deletarProdutoService } from '../services/deletarProdutoService';
import { Request, Response } from "express"

export class deletarProdutoController {
    constructor(private readonly service: deletarProdutoService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        await this.service.execute(Number(id))
        return response.json({ message: "Produto foi removido" })
    }
}