const Place = require("../models/place");

async function listPlaces(request, response) {
  try {
    const places = await Place.findAll();
    return response.status(200).json(places);
  } catch (error) {
    response.status(500).json({ message: "Não consegui listar" });
  }
}

module.exports = listPlaces;
