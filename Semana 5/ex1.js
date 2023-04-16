let lista = [
  "Pedro",
  "José",
  "Aderbal",
  "Danilo",
  "Luisa",
  "Vitoria",
  "Luis",
  "Danilo",
  "José",
];
let listaSemDuplicados = [...new Set(lista)];

let listaComDuplicados = lista.filter((nome, i) => {
  if (lista.indexOf(nome) !== i) {
    return nome;
  }
});

console.log(...listaComDuplicados, listaSemDuplicados);
