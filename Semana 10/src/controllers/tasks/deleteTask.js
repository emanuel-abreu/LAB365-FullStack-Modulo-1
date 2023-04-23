const Task = require("../../models/task");

async function deletarTarefa(request, response) {
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
}

module.exports = deletarTarefa;
