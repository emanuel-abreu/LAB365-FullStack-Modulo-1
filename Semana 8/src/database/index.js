const Sequelize = require("sequelize");

// CRIANDO A CONEXÃO COM O BANCO DE DADOS
const connection = new Sequelize({
  dialect: "postgres", // qual banco vai se conecta
  host: "localhost", //onde o banco está ?
  username: "emanuel", //qual usuario
  password: "emanuel", // qual senha
  port: "5432", // qual a porta
  database: "usuario", //qual nome de dados
  define: {
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
