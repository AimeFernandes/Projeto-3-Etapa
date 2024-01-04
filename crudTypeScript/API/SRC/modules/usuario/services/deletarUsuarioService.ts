import { UsuarioRepository } from "../repositories/usuarioRepository";

export class deletarUsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository) { }
    async execute(id: number): Promise<void> {
        await this.usuarioRepository.delete(id)
    }
}