const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres", // qual banco vai se conectar
  host: "localhost", // onde o banco está
  username: "emanuel", // qual usuario
  password: "emanuel", // qual senha
  port: "5432", // porta
  database: "places_database", // nome do banco de dados
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;
