const express = require("express");

const bcrypt = require("bcrypt");
// ler a documentação do jwt
const jwt = require("jsonwebtoken");

const createTarefa = require("./src/controllers/tasks/createTask");
const deletarTarefa = require("./src/controllers/tasks/deleteTask");
const listarTarefas = require("./src/controllers/tasks/listTask");
const atualizarTarefa = require("./src/controllers/tasks/updateTask");

const connection = require("./src/database");

const Task = require("./src/models/task");
const User = require("./src/models/user");

// middleware global, sempre vai ser executado
const log = require("./src/middlewares/log");
// middleware específico da rota POST /users
const validadeNewUser = require("./src/middlewares/validadeNewUser");
const validateToken = require("./src/middlewares/validadeToken");
const createUser = require("./src/controllers/users/createUser");
const createLogin = require("./src/controllers/users/createLogin");

const app = express();

app.use(express.json());

// tem que ficar depois do  app.use(express.json());
// pois o express.json que vai ler em json
// a minha aplicação vai usar a função log
app.use(log);

connection.authenticate();
connection.sync({ alter: true });

// Tarefas

app.post("/tarefas", validateToken, createTarefa);

app.get("/tarefas", validateToken, listarTarefas);

app.put("/tarefas/:id", validateToken, atualizarTarefa);

app.delete("/tarefas/:id", validateToken, deletarTarefa);

// Usuários

app.post("/users", validadeNewUser, createUser);

app.post("/users/sessions", createLogin);

app.listen(9999, () => console.log("Aplicação online"));
