const User = require("../../modules/user");
const bcrypt = require("bcrypt");

async function createUser(request, response) {
  try {
    const userDatabase = await User.findOne({
      where: {
        username: request.body.username,
      },
    });

    if (userDatabase) {
      return response
        .status(409)
        .json({ message: "Nome de usuário já existente" });
    }
    // criptografar a senha

    const hash = await bcrypt.hash(request.body.password, 10);

    const newUser = {
      name: request.body.name,
      email: request.body.email,
      username: request.body.username,
      password: hash,
    };

    const user = await User.create(newUser);

    const { _password, ...userData } = user.toJSON();
    response.status(201).json(userData);
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação" });
  }
}

module.exports = createUser;
