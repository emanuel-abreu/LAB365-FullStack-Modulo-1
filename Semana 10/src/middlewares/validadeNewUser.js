const yup = require("yup");

// ler a documentação do yup
const validation = yup.object().shape({
  name: yup
    .string("O nome  deve ser uma string")
    .required("Nome é obrigatório"),
  username: yup
    .string("O nome de usuário deve ser uma string")
    .required("Nome de usuário é obrigatório"),

  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Senha é obrigatória"),
  email: yup
    .string("O email deve ser uma string")
    .email("Deve ter o formato de email")
    .required("Email é obrigatório"),
});

async function validadeNewUser(request, response, next) {
  console.log(request.body);

  try {
    await validation.validate(request.body);
    next();
    /* {
      name: "",
      email: "",
      password: ""
    } */
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error.message });
  }
}

module.exports = validadeNewUser;
