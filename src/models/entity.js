'use strict';
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js";
const { v4: uuidv4 } = require('uuid');

const entity =  sequelize.define(
  'entity',
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
    blockId: {
      type: DataTypes.UUID,
      references: {
        model: "block",
        key: "id"
      },
    },
    type: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.JSONB
    },
    layer: {
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
  },
  {
    freezeTableName: true,
    modelName: 'entity'
  })

export default entity