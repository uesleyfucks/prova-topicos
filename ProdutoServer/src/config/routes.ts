import {Router} from "express";
import {ProdutoController} from "../controllers/ProdutoController";

const router = Router();
const produtoController = new ProdutoController();

export {router};

//Metodos HTTP
//GET -> Solicita determinado recurso do servidor
//POST -> Envia um recurso para o servidor


//Listar
router.get("/produto/listar", produtoController.listar);

//Buscar Por codigoBarras
router.get("/produto/buscar/:codigoBarras", produtoController.buscarPorCodigoBarras);


//Cadastrar
router.post("/produto/cadastrar", produtoController.cadastrar);

//Editar
router.put("/produto/alterar/:id", produtoController.editar);


//Deletar
router.delete("/produto/remover/:codigoBarras", produtoController.deletar);