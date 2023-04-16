async function buscarDadosPerfil() {
  try {
    const response = await fetch("https://api.github.com/users/emanuel-abreu");
    const dados = await response.json();

    const img = document.getElementById("imagem");
    img.src = "https://avatars.githubusercontent.com/u/111504650?v=4";

    let nome = (document.getElementById("nome").innerText = `${dados?.name}`);

    let usuario = (document.getElementById(
      "login"
    ).innerText = `${dados?.login}`);

    let localizacao = (document.getElementById(
      "localizacao"
    ).innerText = `${dados?.location}`);

    let bio = (document.getElementById("bio").innerText = `${dados?.bio}`);

    console.log(dados);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Foi finalizado");
  }
}

buscarDadosPerfil();
