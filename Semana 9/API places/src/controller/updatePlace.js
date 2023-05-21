const Place = require("../models/place");

async function updatePlace(request, response) {
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
    placeInDatabase.latitudes =
      request.body.latitudes || placeInDatabase.latitudes;
    placeInDatabase.longitude =
      request.body.longitude || placeInDatabase.longitude;

    await placeInDatabase.save(); // UPDATE
    response.status(200).json(placeInDatabase);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar suar solicitação" });
  }
}

module.exports = updatePlace;
