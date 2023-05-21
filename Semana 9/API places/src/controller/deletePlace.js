const Place = require("../models/place");

async function deletePlace(request, response) {
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
}

module.exports = deletePlace;
