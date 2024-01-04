import { UsuarioEntity } from "../entities/usuarioEntity";
import { UsuarioRepository } from "../repositories/usuarioRepository";

export class buscarUsuariosService { 
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    async execute(): Promise<UsuarioEntity[]> {
        const usuarios = await this.usuarioRepository.find()
        return usuarios
    }
}