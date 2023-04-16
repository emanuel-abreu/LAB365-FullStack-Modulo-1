

const usuarioCadastrado = localStorage.setItem(
  "usuarioCadastrado",
  "emanuel@gmail.com"
);
const senhaCadastrada = localStorage.setItem("senhaCadastrada", "12345");

function verificarCredenciais() {
  const username = document.getElementById("emailUsuario").value;
  const password = document.getElementById("senhaUsuario").value;

  // VALIDANDO CREDENCIAIS
  if (
    localStorage.getItem("usuarioCadastrado") === username &&
    localStorage.getItem("senhaCadastrada") === password
  ) {
    // REDIRECIONAMENTO PARA ALTERAR OS DADOS
    window.location.href = "operacoesNaConta.html";
  } else {
    alert("Senha ou email incorretos, tente novamente!");
    window.location.href = "ex4.html";
  }
}


/*
Segunda opção de código:
function verificarCredenciais() {
  const username = localStorage.setItem(
    "usuarioCadastrado",
    `${document.getElementById("emailUsuario").value}`
  );
  const password = localStorage.setItem(
    "senhaCadastrada",
    `${document.getElementById("senhaUsuario").value}`
  );

  window.location.href = "operacoesNaConta.html";
}  */
