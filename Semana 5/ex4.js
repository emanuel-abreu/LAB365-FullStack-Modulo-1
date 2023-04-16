let dados = [
  { nome: "luis", idade: 26 },
  { nome: "norma", idade: 16 },
  { nome: "daiana", idade: 26 },
  { nome: "jorge", idade: 16 },
  { nome: "kauan", idade: 16 },
  { nome: "charles", idade: 26 },
  { nome: "marco", idade: 16 },
  { nome: "bruno", idade: 16 },
];

function maiorMenorDeIdade(array) {
  let maioresDeIdade = array.filter((dado) => {
    if (dado.idade >= 18) {
      return dado;
    }
  });

  let menoresDeIdade = array.filter((dado) => {
    if (dado.idade < 18) {
      return dado;
    }
  });
  return console.log(maioresDeIdade, menoresDeIdade);
}

maiorMenorDeIdade(dados);
