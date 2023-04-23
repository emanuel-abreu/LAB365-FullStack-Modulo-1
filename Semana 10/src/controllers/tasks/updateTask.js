const Task = require("../../models/task");

async function atualizarTarefa(request, response) {
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
}
module.exports = atualizarTarefa;
