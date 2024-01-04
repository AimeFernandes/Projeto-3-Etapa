import { UsuarioEntity } from "../entities/usuarioEntity";

export interface UsuarioRepository {
    create(data: UsuarioEntity): Promise<void>
    findById(id: number): Promise<UsuarioEntity>
    find(): Promise<UsuarioEntity[]>
    update(id: number, data: UsuarioEntity): Promise<void>
    delete(id: number): Promise<void>
    login(email: string): Promise<UsuarioEntity>
}