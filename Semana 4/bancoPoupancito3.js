class Conta {
  #senha;
  saldo;

  constructor(saldo, senha) {
    this.saldo = saldo;
    this.#senha = 1234;
  }

  getSenha() {
    return this.#senha;
  }

  deposito(valorDepositado, senha) {
    if (typeof valorDepositado !== "number" || valorDepositado <= 0) {
      throw new Error("Valor de depósito inválido.");
    }

    if (senha === this.#senha) {
      this.saldo += valorDepositado;
      return `Depósito realizado. Saldo atual: ${this.saldo}`;
    } else {
      return "Senha inválida, não é possível depositar.";
    }
  }

  retirada(valorRetirado) {
    if (typeof valorRetirado !== "number" || valorRetirado <= 0) {
      throw new Error("Valor de retirada inválido.");
    }

    if (this.saldo < valorRetirado) {
      return "Saldo insuficiente.";
    }

    this.saldo -= valorRetirado;
    return `Retirada realizada. Saldo atual: ${this.saldo}`;
  }
}

class ContaPoupanca extends Conta {
  constructor(saldo, senha) {
    super(saldo, senha);
  }

  atualizaJuros(taxa) {
    if (typeof taxa !== "number" || taxa <= 0) {
      throw new Error("Taxa de juros inválida.");
    }

    this.saldo += this.saldo * (taxa / 100);
    return `Juros atualizados. Saldo atual: ${this.saldo}`;
  }
}

class PoupancaPremium extends ContaPoupanca {
  constructor(saldo, senha) {
    super(saldo, senha);
    this.taxa = 1.2;
  }

  atualizaJuros() {
    this.saldo += this.saldo * (this.taxa / 100);
    return `Juros atualizados. Saldo atual: ${this.saldo}`;
  }
}

const poupancaPremium = new PoupancaPremium(500, 1234);
console.log(poupancaPremium.atualizaJuros());
