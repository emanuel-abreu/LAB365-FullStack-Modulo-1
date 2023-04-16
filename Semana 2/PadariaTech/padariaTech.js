const preco = window.prompt("Digite o preço do pão (Exemplo: 0.25): ");

document.write(`<h2>Preço do pão: R$ ${preco} <br></h2>`);
document.write("<h2> Panificadora Pão de Ontem - Tabela de preços</h2>");

for (i = 1; i <= 50; i++) {
  document.write(`<strong>${i} pães</strong> - R$${i * preco} <br>`);
  console.log(`${i} - R$${i * preco}`);
}
