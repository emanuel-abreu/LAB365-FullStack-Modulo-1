const express = require("express");
const connection = require("./src/database");
const Place = require("./src/models/place");

const app = express();

app.use(express.json()); // obrigatório (para poder ler em json)

connection.authenticate();
// { alter: true } vai sincronizar as mudanças feitas nas tabelas
// sem precisar apagar e criar novamente
connection.sync({ alter: true });

app.post("/places", async (request, response) => {
  try {
    const data = {
      name: request.body.name,
      contact: request.body.contact,
      opening_hours: request.body.opening_hours,
      description: request.body.description,
      latitudes: request.body.latitudes,
      longitude: request.body.longitude,
    };

    // Validação por campo
    if (!data.name) {
      return response
        .status(400)
        .json({ message: "Nome do lugar é obrigatório" });
    }

    // procurar o nome no banco
    const placeInDatabase = await Place.findOne({ where: { name: data.name } });

    // tratamento para verificar se o lugar já foi cadastrado
    if (placeInDatabase) {
      return response
        .status(400)
        .json({ message: "Já existe um lugar com esse nome" });
    }

    const place = await Place.create(data);

    response.status(201).json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Não possível concluir a operação" });
  }
});

app.get("/places", async (request, response) => {
  try {
    const places = await Place.findAll();
    return response.json(places);
  } catch (error) {
    response.status.json({ message: "Não consegui listar" });
  }
});

app.put("/places/:id", async (request, response) => {
  try {
    const placeInDatabase = await Place.findByPk(request.params.id);

    if (!placeInDatabase) {
      return response.status(404).json({ message: "Lugar não encontrado" });
    }

    /* tratamento para evitar que quando um campo de atualização for omitido ao enviar,
     ele não deixe como undefind e ele continue como tava antes mesmo
    */
    placeInDatabase.name = request.body.name || placeInDatabase.name;
    placeInDatabase.description =
      request.body.description || placeInDatabase.description;
    placeInDatabase.opening_hours =
      request.body.opening_hours || placeInDatabase.opening_hours;
    placeInDatabase.contact = request.body.contact || placeInDatabase.contact;

    await placeInDatabase.save(); // UPDATE
    response.json(placeInDatabase);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar suar solicitação" });
  }
});

app.delete("/places/:id", async (request, response) => {
  try {
    await Place.destroy({
      where: {
        id: request.params.id,
      },
    });

    response.status(204).json();
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
});

app.listen(3333, () => console.log("SERVIDOR ONLINE"));
