import { UsuarioEntity } from "../entities/usuarioEntity";
import { Usuario } from ".prisma/client";

export class UsuarioPrismaMapping {
    static to(usuario: Usuario): UsuarioEntity {
        return {
            id: usuario.id,
            email: usuario.email,
            senha: usuario.senha
        }
    }

    static from(usuario: UsuarioEntity): Usuario {
        return {
            id: usuario.id,
            email: usuario.email,
            senha: usuario.senha
        }
    }
}