require("dotenv").config();
const express = require("express");
const connection = require("./src/database");

const createPLace = require("./src/controller/createPlace");
const updatePlace = require("./src/controller/updatePlace");
const deletePlace = require("./src/controller/deletePlace");
const listPlaces = require("./src/controller/listPlaces");

const app = express();

app.use(express.json()); // obrigatório (para poder ler em json)

connection.authenticate();
// { alter: true } vai sincronizar as mudanças feitas nas tabelas
// sem precisar apagar e criar novamente
connection.sync({ alter: true });

app.post("/places", createPLace);

app.get("/places", listPlaces);

app.put("/places/:id", updatePlace);

app.delete("/places/:id", deletePlace);

app.listen(3333, () => console.log("SERVIDOR ONLINE"));
