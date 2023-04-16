const dadosDoUsuario = {
  email: "emanuel@hotmail.com",
  senha: "12345",
};

const formId = document.getElementById("formId");

formId.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("emailUsuario").value;
  const password = document.getElementById("senhaUsuario").value;
  if (dadosDoUsuario.email === username && dadosDoUsuario.senha === password) {
    console.log("Logado");
  } else {
    console.log("Senha ou email incorretos, tente novamente!");
  }
});
