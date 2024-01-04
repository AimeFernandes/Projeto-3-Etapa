import { UsuarioEntity } from "../entities/usuarioEntity";
import { UsuarioRepository } from "../repositories/usuarioRepository";

export class buscarUsuarioService { 
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    async execute(id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findById(id)
        return usuario
    }
}