import express from "express";

const routes = (app) =>{
    app.use(express.json());
    
    //criar uma rota
    app.get("/posts" , async (req , res) => {
        const posts = await getTodosPosts();
        res.status(200).json(posts);
    });
};


export default routes;