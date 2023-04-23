const Task = require("../../models/task");

async function listarTarefas(request, response) {
  try {
    const tasks = await Task.findAll();
    return response.status(200).json(tasks);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação " });
  }
}

module.exports = listarTarefas;
