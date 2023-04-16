function adicionarNome(...nomes) {
  let lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
  let novaLista = [...lista, ...nomes];
  //----------------------------------------------
  let listaComDuplicados = novaLista.filter((nomeRepetidos, i) => {
    if (novaLista.indexOf(nomeRepetidos) !== i) {
      return nomeRepetidos;
    }
  });

  //---------------------------
  if (nomes.length === 0) {
    console.log("Erro: é necessário enviar pelo menos 1 parâmetro!");
  } else if (listaComDuplicados.length > 0) {
    console.log("Erro: algum nome digitado já existe na lista!");
  } else if (nomes.some((nome) => typeof nome !== "string")) {
    console.log("Erro: algum parâmetro enviado não é do tipo string!");
  } else {
    console.log(novaLista);
  }
}

adicionarNome("emanuel", "emanuel");
adicionarNome("Joao", 12);
adicionarNome();
adicionarNome("Gabriel");
