'use strict';
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js";

export default sequelize.define(
  'file',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    base_x: {
      type: DataTypes.FLOAT
    },
    base_y: {
      type: DataTypes.FLOAT
    },
    base_z: {
      type: DataTypes.FLOAT
    },
    layer: {
      type: DataTypes.STRING
    },
    file: {
      type: DataTypes.INTEGER,
      references: {
        model: "file",
        key: "id"
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })