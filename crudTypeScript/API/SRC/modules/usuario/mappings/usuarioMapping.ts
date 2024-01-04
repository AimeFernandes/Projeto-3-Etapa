import { UsuarioDTO } from "../dtos/usuarioDTO";
import { UsuarioEntity } from "../entities/usuarioEntity";

export class UsuarioMapping {
    static from(usuario: UsuarioDTO): UsuarioEntity {
        return {
            id: usuario.id,
            email: usuario.email,
            senha: usuario.senha
        }
    }
}