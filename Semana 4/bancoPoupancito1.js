class Conta {
  #senha;
  saldo;

  constructor(saldo, senha) {
    this.saldo = saldo;
    this.#senha = 1234;
  }

  get senha() {
    return this.#senha;
  }

  deposito(valor, senha) {
    if (senha === this.#senha) {
      this.saldo += valor;
      return `Saldo atual: ${this.saldo}`;
    } else {
      throw new Error("Senha inválida, não é possível depositar.");
    }
  }

  retirada(valor) {
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente.");
    }
    this.saldo -= valor;
    return `Saldo atual: ${this.saldo}`;
  }
}

const contaCorrente = new Conta(700);

console.log(contaCorrente.retirada(200));
console.log(contaCorrente.deposito(400, 1234));
