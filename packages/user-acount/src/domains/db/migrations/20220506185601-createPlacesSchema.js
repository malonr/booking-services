"use strict";
const { DataTypes, Sequelize } = require("sequelize");

const { PLACES_TABLE } = require("../models/places.models.js");
const { USER_FAVORITE_PLACES_TABLE } = require("../models/userFavoritePlaces.models.js");


module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PLACES_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      }
    });
    await queryInterface.addColumn(USER_FAVORITE_PLACES_TABLE, "place_id",{      
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: PLACES_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",          
  })
  },
  async down(queryInterface) {
    await queryInterface.dropTable(PLACES_TABLE);
  },
};
