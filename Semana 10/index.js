const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createTask = require("./src/controllers/tasks/createTask");
const deletarTarefa = require("./src/controllers/tasks/deleteTask");
const listarTarefas = require("./src/controllers/tasks/listTask");
const atualizarTarefa = require("./src/controllers/tasks/updateTask");

const connection = require("./src/database");

const Task = require("./src/modules/task");
const User = require("./src/modules/user");

const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

// Tarefas

app.post("/tarefas", createTask);

app.get("/tarefas", listarTarefas);

app.put("/tarefas/:id", atualizarTarefa);

app.delete("/tarefas/:id", deletarTarefa);

// Usuários

app.post("/users", async (request, response) => {
  try {
    // criptografar senha

    const hash = await bcrypt.hash(request.body.password, 10);

    const userDatabase = await User.findOne({
      where: {
        email: request.body.email,
      },
    });
    if (userDatabase) {
      return response
        .status(403)
        .json({ message: " Já existe um usuário com esse email" });
    }

    if (userDatabase.username) {
      return response
        .status(403)
        .json({ message: "Nome de usuário já existente" });
    }

    const newUser = {
      name: request.body.name,
      email: request.body.email,
      username: request.body.username,
      password: hash,
    };

    const user = await User.create(newUser);

    response.status(201).json(newUser);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação" });
  }
});

app.post("/sessions", async (request, response) => {
  try {
    const userDatabase = await User.findOne({
      where: {
        username: request.body.username,
      },
    });
    if (!userDatabase) {
      return response.status(403).json({ message: "Credenciais incorretas" });
    }
    // retorna true se bater a senha passada no body
    const passwordIsValid = await bcrypt.compare(
      request.body.password,
      userDatabase.password
    );

    if (!passwordIsValid) {
      return response.status(404).json({ message: "Credenciais incorretas" });
    }

    // gerou o token injetando o id do usuario
    // chave secreta e o tempo que o token vai ficar válido
    const token = jwt.sign(
      {
        id: userDatabase.id,
      },
      "@4PI_US3R",
      {
        expiresIn: "1h",
      }
    );

    response.status(201).json({ name: request.body.name, token });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação" });
  }
});

app.listen(9999, () => console.log("Aplicação online"));
