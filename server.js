import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    { id: 1, descricao: "pretina" , imagem: "https://placecats.com/millie/300/150" },

    { id: 2, descricao: "pipoca" , imagem: "https://placecats.com/millie/300/150" },

    { id: 3, descricao: "leco" , imagem: "https://placecats.com/millie/300/150" }
]

const app = express();

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosPosts() {
    const db = conexao.db("Imersao-instabytes")
    const colecao = db.collection("posts")

    return colecao.find().toArray();
};

/* function buscarpostID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/posts/:id" , (req , res) => {
    const index = buscarpostID(req.params.id);
    res.status(200).json(posts[index]);
}); */