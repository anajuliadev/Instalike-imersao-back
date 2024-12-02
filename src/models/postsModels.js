import conectarAoBanco from "../config/dbConfig.js";
import { novoPost } from "../controllers/postsControllers.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("Imersao-instabytes")
    const colecao = db.collection("posts")

    return colecao.find({}).toArray(); // Recupera todos os posts

};

export async function criarPost(novoPost) {
    const db = conexao.db("Imersao-instabytes")
    const colecao = db.collection("posts")

    return colecao.insertOne(novoPost);
    
}