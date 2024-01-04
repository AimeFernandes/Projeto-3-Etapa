import { UsuarioDTO } from "../dtos/usuarioDTO";
import { cadastrarUsuarioService } from "../services/cadastrarUsuarioService";
import { Request, Response } from "express"

export class cadastrarUsuarioController {
    constructor(private readonly service: cadastrarUsuarioService) {} 
    async handle(request: Request, response: Response): Promise<Response> {
        const usuario = <UsuarioDTO>request.body
        await this.service.execute(usuario)
        return response.json({ message: "Usuário criado com sucesso "})
    }
}