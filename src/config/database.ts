import mongoose from "mongoose";

mongoose.connect("mongodb+srv://topicos:topicos@clustertopicossistemas.8xede.mongodb.net/ApiProva?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("Aplicacão conectada ao banco de dados")
    })
    .catch((erro) =>{
        console.log(`Erro ao conectar no banco: ${erro}`)
    });

export{mongoose};