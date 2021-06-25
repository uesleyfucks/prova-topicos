import { model, Schema } from "mongoose";

const produtoSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo NOME do produto é obrigatório!!!"],
    },
    codigoBarras: {
      type: String,
      required: [true, "O campo CODIGO DE BARRAS do produto é obrigatório!!"],
    },
    preco: {
      type: Number,
      required: [true, "O campo  PRECO do produto é obrigatório!!"],
      min: [0, "0 Valor minimo"],
    },
  },
  {
    timestamps: true
  }
);

export default model("produtos", produtoSchema);
