import { PrismaClient } from '.prisma/client';
import { ProdutoEntity } from '../../entities/produtoEntity'; 
import { ProdutoPrismaMapping } from "../../mappings/produtoPrismaMapping";
import { ProdutoRepository } from '../produtoRepository'; 

export class PrismaProdutoRepository implements ProdutoRepository {
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(data: ProdutoEntity): Promise<void> {
        try {
            const produto = ProdutoPrismaMapping.from(data)
            await this.prisma.produto.create({ data: produto})
        } catch (error) {
            console.log(error)
            throw new Error("Erro em criar o produto")
        }
    }

    async findById(id: number): Promise<ProdutoEntity> {
        try {
            const produto = await this.prisma.produto.findUniqueOrThrow({ where: { id }})
            return ProdutoPrismaMapping.to(produto)
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar o produto")
        }
    }

    async find(): Promise<ProdutoEntity[]> {
        try {
            const produto = await this.prisma.produto.findMany()
            return produto.map(produto => ProdutoPrismaMapping.to(produto))
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todos os produtos")
        }
    }

    async update(id: number, data: ProdutoEntity): Promise<void> {
        try {
            const produto = ProdutoPrismaMapping.from(data)
            await this.prisma.produto.update({ where: {id}, data: produto })
        } catch (error) {
            console.log(error)
            throw new Error("Erro em atualizar o produto")
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.produto.delete({ where: { id }})
        } catch (error) {
            console.log(error)
            throw new Error("Erro em deletar o produto")
        }
    }

}