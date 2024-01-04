import { PrismaUsuarioRepository } from "./repositories/implementations/prismaUsuarioRepository";
import { cadastrarUsuarioService } from "./services/cadastrarUsuarioService";
import { cadastrarUsuarioController } from "./controllers/cadastrarUsuarioController";
import { buscarUsuarioController } from "./controllers/buscarUsuarioController";
import { buscarUsuarioService } from "./services/buscarUsuarioService";
import { buscarUsuariosControler } from "./controllers/buscarUsuariosController";
import { buscarUsuariosService } from "./services/buscarUsuariosService"
import { deletarUsuarioController } from "./controllers/deletarUsuarioController";
import { deletarUsuarioService } from "./services/deletarUsuarioService";
import { editarUsuarioController } from "./controllers/editarUsuarioController";
import { editarUsuarioService } from "./services/editarUsuarioService";
import { loginUsuarioService } from "./services/loginUsuarioService";
import { loginUsuarioController } from "./controllers/loginUsuarioController";


const repository = new PrismaUsuarioRepository()

const createService = new cadastrarUsuarioService(repository)
const createController = new cadastrarUsuarioController(createService)

const findOneService = new buscarUsuarioService(repository)
const findOneController = new buscarUsuarioController(findOneService)

const findService = new buscarUsuariosService(repository)
const findController = new buscarUsuariosControler(findService)

const removeService = new deletarUsuarioService(repository)
const removeController = new deletarUsuarioController(removeService)

const updateService = new editarUsuarioService(repository)
const updateController = new editarUsuarioController(updateService)


const loginService = new loginUsuarioService(repository)
const loginController = new loginUsuarioController(loginService)

export {
    createController,
    findOneController,
    findController,
    removeController,
    updateController,
    loginController
}