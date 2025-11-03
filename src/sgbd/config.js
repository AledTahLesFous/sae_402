// src/config.js
const { Sequelize } = require("sequelize");
const path = require("path");

const myDB = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../db.sqlite"), // chemin vers ton fichier .sqlite
  logging: console.log, // ou false pour désactiver les logs
});

module.exports = myDB;
