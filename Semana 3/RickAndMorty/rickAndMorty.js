async function buscarDadosPerfil() {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/10"
    );
    const dados = await response.json();

    const img = document.getElementById("imagem");
    img.src = "https://rickandmortyapi.com/api/character/avatar/10.jpeg";

    let nome = (document.getElementById(
      "nome"
    ).innerText = `Nome: ${dados?.name}`);

    let especie = (document.getElementById(
      "especie"
    ).innerText = `Espécie: ${dados?.species}`);

    let genero = (document.getElementById(
      "genero"
    ).innerText = `Gênero: ${dados?.gender}`);

    let tipo = (document.getElementById(
      "tipo"
    ).innerText = `Tipo: ${dados?.type}`);

    let localizacao = (document.getElementById(
      "localizacao"
    ).innerText = `Lugar: ${dados?.location.name}`);

    let status = (document.getElementById(
      "status"
    ).innerText = `Status: ${dados?.status}`);

    console.log(dados);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Foi finalizado");
  }
}

buscarDadosPerfil();
