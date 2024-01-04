import { PrismaProdutoRepository } from "./repositories/implementations/prismaProdutoRepository";
import { cadastrarProdutoController } from "./controllers/cadastrarProdutoController";
import { cadastrarProdutoService } from "./services/cadastrarProdutoService";
import { buscarProdutoController } from "./controllers/buscarProdutoController";
import { buscarProdutoService } from "./services/buscarProdutoService";
import { buscarProdutosController } from "./controllers/buscarProdutosController"
import { buscarProdutosService } from "./services/buscarProdutosService";
import { deletarProdutoController } from "./controllers/deletarProdutoController";
import { deletarProdutoService } from "./services/deletarProdutoService";
import { editarProdutoController } from "./controllers/editarProdutoController";
import { editarProdutoService } from "./services/editarProdutoService";

const repository = new PrismaProdutoRepository()

const createService = new cadastrarProdutoService(repository)
const createController = new cadastrarProdutoController(createService)

const findOneService = new buscarProdutoService(repository)
const findOneController = new buscarProdutoController(findOneService)

const findService = new buscarProdutosService(repository)
const findController = new buscarProdutosController(findService)

const removeService = new deletarProdutoService(repository)
const removeController = new deletarProdutoController(removeService)

const updateService = new editarProdutoService(repository)
const updateController = new editarProdutoController(updateService) 


export {
    createController,
    findOneController,
    findController,
    removeController,
    updateController
}