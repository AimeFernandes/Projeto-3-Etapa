import { ProdutoEntity } from "../entities/produto.entity";

export interface ProdutoRepository {
    create(data: ProdutoEntity): Promise<void>
    findById(id: number): Promise<ProdutoEntity>
    find(): Promise<ProdutoEntity[]>
    update(id: number, data: ProdutoEntity): Promise<void>
    delete(id: number): Promise<void>
}