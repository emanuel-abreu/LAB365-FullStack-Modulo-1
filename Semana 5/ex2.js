let usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
let frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];
frutas.reverse();

let listaAgrupada = usuarios.map((nome, index) => {
  return nome + " - " + frutas[index];
});

console.log(listaAgrupada);
