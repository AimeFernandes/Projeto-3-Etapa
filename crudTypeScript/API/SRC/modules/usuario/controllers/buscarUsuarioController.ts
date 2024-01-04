import { buscarUsuarioService } from "../services/buscarUsuarioService";
import { Request, Response } from "express";

export class buscarUsuarioController {
    constructor(private readonly service: buscarUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const usuario = await this.service.execute(Number(id))
        return response.json(usuario)
    }
}