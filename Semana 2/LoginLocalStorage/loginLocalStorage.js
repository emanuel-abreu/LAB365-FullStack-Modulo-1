const usuarioCadastrado = localStorage.setItem(
  "usuarioCadastrado",
  "emanuel@gmail.com"
);
const senhaCadastrada = localStorage.setItem("senhaCadastrada", "12345");

function verificarCredenciais() {
  var username = document.getElementById("emailUsuario").value;
  var password = document.getElementById("senhaUsuario").value;

  if (
    localStorage.getItem("usuarioCadastrado") === username &&
    localStorage.getItem("senhaCadastrada") === password
  ) {
    window.location.href = "logout.html";
  } else {
    alert("Senha ou email incorretos, tente novamente!");
    window.location.href = "ex3.html";
  }
}
