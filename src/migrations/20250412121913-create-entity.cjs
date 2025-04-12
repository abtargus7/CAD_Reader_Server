'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entity', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      blockId: {
        type: Sequelize.UUID,
        references: {
          model: "block",
          key: "id"
        },
      },
      name: {
        type: Sequelize.STRING
      },
      blockId: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.JSONB
      },
      layer: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('entity');
  }
};