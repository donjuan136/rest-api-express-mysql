'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('products',{ 
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false,
    },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      }, 
      brand:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      description:{
        type: Sequelize.TEXT,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updateAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    }

    );
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('products');
     
  }
};
