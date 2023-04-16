const numero = window.prompt("Digite um número:");

document.write(`Tabuada de ${numero}: <br>`);
for (i = 1; i <= 10; i++) {
  document.write(`<br> ${i} X ${numero} = ${i * numero} <br>`);
  console.log(`${i} X ${numero} = ${i * numero}`);
}
