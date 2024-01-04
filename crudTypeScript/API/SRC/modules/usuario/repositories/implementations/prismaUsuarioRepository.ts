import { PrismaClient } from ".prisma/client";
import { UsuarioEntity } from "../../entities/usuarioEntity";
import { UsuarioPrismaMapping } from "../../mappings/usuarioPrismaMapping";
import { UsuarioRepository } from "../usuarioRepository";

export class PrismaUsuarioRepository implements UsuarioRepository {
    private prisma 
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(data: UsuarioEntity): Promise<void> {
        try {
            const usuario = UsuarioPrismaMapping.from(data)
            await this.prisma.usuario.create({ data: usuario })
        } catch (error) {
            console.log(error)
            throw new Error("Erro em criar usuário")
        }
    }

    async 

    async findById(id: number): Promise<UsuarioEntity> {
        try{
            const usuario = await this.prisma.usuario.findUniqueOrThrow({ where: { id }})
            return UsuarioPrismaMapping.to(usuario)
        } catch(error){
            console.log(error)
            throw new Error("Erro em encontrar usuário")
        }
    }

    async find(): Promise<UsuarioEntity[]> {
        try {
            const usuario = await this.prisma.usuario.findMany()
            return usuario.map(usuario => UsuarioPrismaMapping.to(usuario))
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todos os usuários")
        }
    }

    async update(id: number, data: UsuarioEntity): Promise<void> {
        try {
            const usuario = UsuarioPrismaMapping.from(data)
            await this.prisma.usuario.update({ where: {id}, data: usuario})
        } catch (error) {
            console.log(error)
            throw new Error("Erro em atualizar o usuário")
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.usuario.delete({ where: { id } })
        } catch (error) {
            console.log(error)
            throw new Error("Erro em deletar o usuário")
        }
    }

    async login(email: string): Promise<UsuarioEntity> {
        try{
            const usuario = await this.prisma.usuario.findUniqueOrThrow({ where: {email} })
            return UsuarioPrismaMapping.to(usuario)
        }catch (error) {
            console.log(error)
            throw new Error("Erro ao tentar logar")
        }
    }

}