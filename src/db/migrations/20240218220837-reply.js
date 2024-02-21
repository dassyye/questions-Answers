'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reply', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      reply: {
        type: Sequelize.STRING,
        allowNull: false
      },
      question_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'question',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('reply')
  }
};
