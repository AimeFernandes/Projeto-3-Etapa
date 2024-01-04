import { loginUsuarioService } from "../services/loginUsuarioService";
import { Request, Response } from "express";

export class loginUsuarioController {
    constructor(private readonly service: loginUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body
        const usuario = await this.service.execute(email)
        return response.json({message: "Login efetuado com sucesso!!"})
    }
}