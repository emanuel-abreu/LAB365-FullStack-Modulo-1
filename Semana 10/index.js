const express = require("express");
const connection = require("./src/database");

const Task = require("./src/modules/task");
const User = require("./src/modules/user");

const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

// Tarefas

app.post("/tarefas", async (request, response) => {
  try {
    const tarefa = {
      name: request.body.name,
      description: request.body.description,
    };

    if (!tarefa.name || !tarefa.description) {
      return response
        .status(400)
        .json({ message: "Nome/Descrição é obrigatório" });
    }

    const taskInDatabase = await Task.findOne({ where: { name: tarefa.name } });

    if (taskInDatabase) {
      return response
        .status(400)
        .json({ message: "Já existe uma tarefa com esse nome" });
    }

    const newTask = await Task.create(tarefa);

    response.status(201).json(newTask);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação " });
  }
});

app.get("/tarefas", async (request, response) => {
  try {
    const tasks = await Task.findAll();
    return response.status(200).json(tasks);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação " });
  }
});

app.put("/tarefas/:id", async (request, response) => {
  try {
    const taskInDatabase = await Task.findByPk(request.params.id);
    if (!taskInDatabase) {
      return response.status(404).json({ message: "Tarefa não encontrada" });
    }

    taskInDatabase.name = request.body.name || taskInDatabase.name;
    taskInDatabase.description =
      request.body.description || taskInDatabase.description;

    await taskInDatabase.save();

    response.json(taskInDatabase);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
});

app.delete("/tarefas/:id", async (request, response) => {
  try {
    await Task.destroy({
      where: {
        id: request.params.id,
      },
    });
    response.status(204);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação " });
  }
});

// Usuários

app.post("/users", async (request, response) => {
  try {
    const newUser = {
      name: request.body.name,
      email: request.body.email,
      username: request.body.username,
      password: request.body.password,
    };

    const user = await User.create(newUser);

    response.status(201).json(newUser);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação" });
  }
});

app.listen(3333, () => console.log("Aplicação online"));
