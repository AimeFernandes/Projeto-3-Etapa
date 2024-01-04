import { UsuarioDTO } from "../dtos/usuarioDTO";
import { UsuarioMapping } from "../mappings/usuarioMapping";
import { UsuarioRepository } from "../repositories/usuarioRepository";

export class editarUsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    async execute(id: number, data: UsuarioDTO): Promise<void> {
        const usuario = UsuarioMapping.from(data)
        await this.usuarioRepository.update(id, usuario)
    }
}