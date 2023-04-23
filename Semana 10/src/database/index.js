const { Sequelize } = require("sequelize");

// CRIANDO A CONEXÃO COM O BANCO DE DADOS
const connection = new Sequelize({
  dialect: process.env.DIALECT_DATABASE, // qual banco vai se conecta
  host: process.env.HOST_DATABASE, //onde o banco está ?
  username: process.env.USER_DATABASE, //qual usuario
  password: process.env.PASSWORD_DATABASE, // qual senha
  port: process.env.PORT_DATABASE, // qual a porta
  database: process.env.NAME_DATABASE, //qual nome de dados
  define: {
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
