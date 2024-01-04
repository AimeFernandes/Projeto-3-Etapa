import { UsuarioRepository } from "../repositories/usuarioRepository";
import { UsuarioEntity } from "../entities/usuarioEntity";
import { UsuarioMapping } from "../mappings/usuarioMapping";


export class loginUsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}
  async execute(email: string): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.login(email)
    return usuario
  }
}