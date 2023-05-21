const Place = require("../models/place");

async function createPLace(request, response) {
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
}

module.exports = createPLace;
