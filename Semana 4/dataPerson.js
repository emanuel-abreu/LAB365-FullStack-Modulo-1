class Person {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  apresentar() {
    return `Olá me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura.`;
  }
}

class Profissao extends Person {
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }

  apresentar() {
    return `Olá me chamo ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e sou ${this.profissao}.`;
  }
}

const pessoa = new Person("Emanuel", 22, "1,62");
const profissional = new Profissao("Thais", 24, "1,63", "Fisioterapeuta");

console.log(pessoa.apresentar());
console.log(profissional.apresentar());
