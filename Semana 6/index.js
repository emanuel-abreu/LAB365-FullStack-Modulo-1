const express = require("express");

const app = express();
app.use(express.json());

app.post("/body/:nome", (request, response) => {
  response
    .status(201)
    .json({ message: `Rota da API criada pelo(a): ${request.params.nome}` });
  console.log(`Rota da API criada pelo(a): ${request.params.nome}`);
});

app.post("/body", (request, response) => {
  const data = {
    name: request.body.name,
    age: request.body.age,
    workLevel: request.body.workLevel,
    password: request.body.password,
  };

  response.status(200).json(data);
});

app.post("/cadastro", (request, response) => {
  const data = {
    name: request.body.name,
    age: request.body.age,
    workLevel: request.body.workLevel,
    password: request.body.password,
  };

  if (!(data.name || data.age || data.workLevel || data.password)) {
    return response
      .status(406)
      .json({ message: "Está faltando dados para concluir a operação" });
  }

  if (data.age < 21) {
    return response
      .status(406)
      .json({ message: "Usuário não possui idade suficiente" });
  }
  response.status(200).json({ message: " Criado com sucesso" });
});

app.delete("/delete/:id", (request, response) => {
  if (!request.params.id) {
    return response
      .status(406)
      .json({ message: "Está faltando dados para concluir a operação" });
  }

  response.status(200).json({ message: "Deletado com sucesso" });
});

app.listen(3333, () => console.log("Servidor online"));
