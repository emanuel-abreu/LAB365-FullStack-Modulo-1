// middlewares são muito usados para debbuging

// fazendo algo antes de concluir a ação

function log(request, response, next) {
  console.log("Passei pelo middlewares");
  // Imprimir o método da requisição
  console.log(`Método: ${request.method}`);
  // Imprimir o path da requisição
  console.log(`Path: ${request.path}`);
  console.log("Body:", request.body);
  console.log(`Params: ${request.params}`);

  // serve para autorizar a fazer a requisição
  next();
}

module.exports = log;
