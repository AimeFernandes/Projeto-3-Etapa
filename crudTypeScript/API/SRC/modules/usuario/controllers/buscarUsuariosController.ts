import { buscarUsuariosService } from "../services/buscarUsuariosService";
import { Request, Response } from "express";

export class buscarUsuariosControler {
    constructor(private readonly service: buscarUsuariosService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const usuarios = await this.service.execute()
        return response.json(usuarios)
    }
}