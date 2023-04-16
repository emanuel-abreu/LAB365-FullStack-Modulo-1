function contaVogais(string) {
  let listaDeVogais = ["a", "e", "i", "o", "u"];
  let contador = 0;
  if (typeof string != "string") {
    console.log("Erro: algum parâmetro enviado não é do tipo string!");
  } else {
    let arrayDaString = string.split("");
    arrayDaString.forEach((vogal) => {
      if (listaDeVogais.includes(vogal)) {
        contador += 1;
      }
    });
    if (contador === 0) {
      console.log("Não há vogal na string");
    } else {
      console.log(`Número de vogais: ${contador}`);
    }
  }
}

contaVogais("emanuel");
contaVogais(123);
contaVogais("crrr");
