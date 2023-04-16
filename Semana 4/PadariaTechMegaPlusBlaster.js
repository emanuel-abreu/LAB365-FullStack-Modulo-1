class CaixaRegistradora {
  constructor() {
    this.estoque = JSON.parse(localStorage.getItem("estoque")) || []; // Array para armazenar os produtos disponíveis no estoque
    this.cliente = null; // Nome do cliente sendo atendido
    this.itens = []; // Array para armazenar os itens adicionados à caixa registradora pelo cliente
  }

  adicionarProduto(codigoBarra, preco, nome, quantidade) {
    // Adiciona um produto ao estoque
    const produto = { codigoBarra, preco, nome, quantidade };
    this.estoque.push(produto);
    localStorage.setItem("estoque", JSON.stringify(this.estoque)); // Salva o estoque no localStorage
  }

  iniciarAtendimento(cliente) {
    // Inicia o atendimento a um cliente
    this.cliente = cliente;
    this.itens = []; // Reinicia o array de itens
  }

  adicionarItem(codigoBarra, quantidade) {
    // Adiciona um item à caixa registradora
    const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
    if (produto) {
      // Verifica se o produto existe no estoque
      this.itens.push({ codigoBarra, quantidade });
    } else {
      console.error("Produto não encontrado no estoque!");
    }
  }

  verificarTotal() {
    // Verifica o valor total da conta do cliente
    let total = 0;
    this.itens.forEach((item) => {
      const produto = this.estoque.find(
        (p) => p.codigoBarra === item.codigoBarra
      );
      if (produto) {
        // Verifica se o produto existe no estoque
        total += produto.preco * item.quantidade;
      }
    });
    return total;
  }

  fecharConta(pagamento) {
    // Fecha a conta do cliente
    const total = this.verificarTotal();
    let troco = 0;
    if (pagamento >= total) {
      // Verifica se o pagamento é suficiente para cobrir o valor total da conta
      troco = pagamento - total;
      console.log(`Total da conta: R$ ${total.toFixed(2)}`);
      console.log(`Pagamento: R$ ${pagamento.toFixed(2)}`);
      console.log(`Troco: R$ ${troco.toFixed(2)}`);
      // Reinicia o estoque, o cliente e os itens da caixa registradora
      this.estoque = [];
      localStorage.removeItem("estoque"); // Remove o estoque do localStorage
      this.cliente = null;
      this.itens = [];
    } else {
      console.error("Pagamento insuficiente!");
    }
    return troco;
  }
}
