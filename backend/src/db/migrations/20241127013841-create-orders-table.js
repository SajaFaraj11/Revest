// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     // Create the 'orders' table
//     await queryInterface.createTable('orders', {
//       id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       customerName: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       customerEmail: {
//         type: Sequelize.STRING,
//         allowNull: true,
//       },
//       customerPhone: {
//         type: Sequelize.STRING,
//         allowNull: true,
//       },
//       address: {
//         type: Sequelize.TEXT,
//         allowNull: false,
//       },
//       status: {
//         type: Sequelize.ENUM('Pending', 'Processing', 'Completed', 'Cancelled'),
//         defaultValue: 'Pending',
//         allowNull: false,
//       },
//       paymentMethod: {
//         type: Sequelize.ENUM('Cash', 'Credit Card', 'PayPal'),
//         allowNull: false,
//       },
//       paymentStatus: {
//         type: Sequelize.ENUM('Unpaid', 'Paid', 'Refunded'),
//         defaultValue: 'Unpaid',
//         allowNull: false,
//       },
//       totalAmount: {
//         type: Sequelize.FLOAT,
//         allowNull: false,
//       },
//       createdAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//       updatedAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       }
//     });

//     // Create the 'OrderProducts' join table for the many-to-many relationship
//     await queryInterface.createTable('OrderProducts', {
//       orderId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'orders',
//           key: 'id',
//         },
//         onDelete: 'CASCADE',
//       },
//       productId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'products',
//           key: 'id',
//         },
//         onDelete: 'CASCADE',
//       },
//       quantity: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         defaultValue: 1,
//       },
//       createdAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       },
//       updatedAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     // Drop the 'OrderProducts' join table
//     await queryInterface.dropTable('OrderProducts');

//     // Drop the 'orders' table
//     await queryInterface.dropTable('orders');
//   }
// };
