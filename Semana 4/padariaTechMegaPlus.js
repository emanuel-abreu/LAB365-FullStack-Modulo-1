class CaixaRegistradora {
  estoque = [];

  cliente = null;

  itens = [];

  adicionarProduto(codigoBarra, preco, nome) {
    const produto = {
      codigoBarra,
      preco,
      nome,
    };
    this.estoque.push(produto);
  }

  iniciarAtendimento(nome) {
    this.cliente = nome;
    this.itens = [];
  }

  adicionarItem(codigoBarra, quantidade) {
    const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
    if (produto) {
      const item = {
        codigoBarra,
        quantidade,
      };
      this.itens.push(item);
    } else {
      console.log("Produto não encontrado no estoque.");
    }
  }

  verificarTotal() {
    let total = 0;
    for (const item of this.itens) {
      const produto = this.estoque.find(
        (p) => p.codigoBarra === item.codigoBarra
      );
      if (produto) {
        total += produto.preco * item.quantidade;
      }
    }
    return total;
  }

  fecharConta(pagamento) {
    const total = this.verificarTotal();
    if (pagamento >= total) {
      const troco = pagamento - total;
      console.log(`Total da conta: R$${total.toFixed(2)}`);
      console.log(`Pagamento: R$${pagamento.toFixed(2)}`);
      console.log(`Troco: R$${troco.toFixed(2)}`);
      this.estoque = [];
      this.cliente = null;
      this.itens = [];
      return troco;
    } else {
      console.log("Pagamento insuficiente.");
      return null;
    }
  }
}
