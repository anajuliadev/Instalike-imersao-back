import express from "express";
import { listarPosts, novoPost } from "../controllers/postsControllers.js";

const routes = (app) =>{
    app.use(express.json());
    //criar uma rota
    app.get("/posts" , listarPosts);
    //rota para riae 
    app.post("/posts", novoPost);
};


export default routes;