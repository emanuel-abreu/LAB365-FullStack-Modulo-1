const express = require("express");
const connection = require("./src/database");
const User = require("../Semana 8/src/modules/user");

const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.post("/users", async (request, response) => {
  try {
    const user = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    };

    if (!user.name || !user.password || !user.email) {
      return response
        .status(400)
        .json({ message: "Nome/Senha/email é obrigatório" });
    }

    const userInDatabase = await User.findOne({
      where: { name: user.name },
    });

    if (userInDatabase) {
      return response
        .status(400)
        .json({ message: "Já existe uma user com esse nome" });
    }

    const newUser = await User.create(user);

    response.status(201).json(newUser);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não consiguimos processar a solicitação " });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não consiguimos processar a solicitação " });
  }
});

app.put("/users/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const user = await User.findOne({
      where: { id },
    });

    if (!user) {
      return response.status(404).json({ message: "Usuário não encontrado" });
    }

    const updatedUser = {
      name: request.body.name || user.name,
      email: request.body.email || user.email,
      password: request.body.password || user.password,
    };

    await User.update(updatedUser, { where: { id } });
    const updatedData = await User.findOne({ where: { id } });
    response.status(200).json(updatedData);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não foi possível atualizar o usuário" });
  }
});

app.delete("/users/:id", async (request, response) => {
  await User.destroy({
    where: {
      id: request.params.id,
    },
  });
  response.status(200).json({ message: "deletado com sucesso" });
});

app.listen(3333, () => console.log("Aplicação online"));
