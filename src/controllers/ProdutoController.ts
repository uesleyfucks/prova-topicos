import { Request, Response } from "express";
import ProdutoSchema from "../models/ProdutoSchema";

class ProdutoController {
  async listar(request: Request, response: Response) {
    const produto = await ProdutoSchema.find();
    response.status(200).json(produto);
  }

  async buscarPorCodigoBarras(request: Request, response: Response) {
    const {codigoBarras} = request.params;
    try {
      const produto = await ProdutoSchema.findOne({ codigoBarras: codigoBarras });
      if (produto === null) {
        response.status(404).json({ msg: "O produto não existe!" });
      }
      response.status(200).json(produto);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async cadastrar(request: Request, response: Response) {
    const novoProduto = request.body;
    const { codigoBarras } = request.body;

    const validacaoCodigo = await ProdutoSchema.findOne({ codigoBarras: codigoBarras });
    if (validacaoCodigo != null) {
      response.status(666).json({ msg: "ESSE PRODUTO JA EXISTE!" });
    } else {
      try {
        await ProdutoSchema.create(novoProduto);
        //console.log(novaCarta);
        response.status(201).json(novoProduto);
      } catch (error) {
        response.status(400).json(error);
      }
    }
  }

  async deletar(request: Request, response: Response) {
    const {codigoBarras} = request.params;
    try {
      const produto = await ProdutoSchema.findOneAndDelete({ codigoBarras: codigoBarras });
      if (produto === null) {
        response.status(404).json({ msg: "O produto não existe!" });
      }
      response.status(200).json({msg: "Produto deletado com sucesso!!"});
    } catch (error) {
      response.status(400).json(error);
    }
  }


  async editar(request: Request, response: Response) {
    //const {codigoBarras} = request.params; 
    const {id} = request.params; 
    const {nome, codigoBarras, preco} = request.body;
    
    try {
      const produto = await ProdutoSchema.findOneAndUpdate({ _id: id }, {nome, codigoBarras, preco} );
      if (produto === null) {
        response.status(404).json({ msg: "O produto não existe!" });
      }
      response.status(200).json({msg: "Produto editado com sucesso!!"});
      console.log({nome, codigoBarras, preco});
    } catch (error) {
      response.status(400).json(error);
    }
  }
}
export { ProdutoController };
