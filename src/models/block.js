'use strict';
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js";
import entity from "./entity.js";

const block = sequelize.define(
  'block',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
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
    fileId: {
      type: DataTypes.UUID,
      references: {
        model: "file",
        key: "id"
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    modelName: 'block'
  })

block.hasMany(entity,{foreignKey: "blockId"})
entity.belongsTo(block, {foreignKey: "blockId"})


export default block