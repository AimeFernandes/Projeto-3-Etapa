import { buscarProdutosService } from "../services/buscarProdutosService";
import { Request, Response } from "express";

export class buscarProdutosController {
    constructor(private readonly service: buscarProdutosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const produtos = await this.service.execute()
        return response.json(produtos)
    }
}