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
    fileName: {
      type: DataTypes.STRING
    },
    fileType: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.INTEGER
    },
    path: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  })