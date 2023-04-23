async function workLevel(request, response, next) {
  console.log(request.body);

  try {
    if (request.body.workLevel === "lider") {
      next();
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error.message });
  }
}

module.exports = workLevel;
