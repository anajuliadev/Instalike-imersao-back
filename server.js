import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

//criar uma rota
app.get("/rota" , (req , res) => {
    res.status(200).send("rota inicial");
});