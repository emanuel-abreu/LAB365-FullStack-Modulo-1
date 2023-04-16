function reiniciarCompras() {
  window.location.reload(true);
}

let preco = 1;
let contador = 1;
let totalDeCompra = 0;
document.write("<h1>Lojas Tabajara</h1>");

do {
  preco = parseFloat(window.prompt("Digite o valor do produto: "));
  document.write(`<br><strong>Produto ${contador}:</strong> R$${preco} <br>`);
  totalDeCompra += preco;
  contador++;
  if (preco === 0) {
    document.write(`<br> <h2>Total da compra: R$ ${totalDeCompra} </h2>`);
    let pagamento = parseFloat(window.prompt("Digite o valor de pagamento: "));
    let troco = pagamento - totalDeCompra;
    document.write(`<br> <h2>Pagamento: R$ ${pagamento} </h2>`);
    document.write(`<br> <h2>Troco: R$ ${troco} </h2>`);
  }
} while (preco != 0);
