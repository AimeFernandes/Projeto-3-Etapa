import { UsuarioDTO } from "../dtos/usuarioDTO";
import { UsuarioRepository } from "../repositories/usuarioRepository";
import { UsuarioMapping } from "../mappings/usuarioMapping";

export class cadastrarUsuarioService {
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ) {}
    async execute(data: UsuarioDTO): Promise<void> {
        const usuario = UsuarioMapping.from(data)
        const resposta = await this.usuarioRepository.create(usuario)
    }
}