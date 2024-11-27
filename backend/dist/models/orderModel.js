"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initOrderModel = void 0;
const sequelize_1 = require("sequelize");
const productModel_1 = __importDefault(require("./productModel"));
class Order extends sequelize_1.Model {
}
exports.default = Order;
const initOrderModel = (sequelize) => {
    Order.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customerName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        customerEmail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        customerPhone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('Pending', 'Processing', 'Completed', 'Cancelled'),
            defaultValue: 'Pending',
            allowNull: false,
        },
        paymentMethod: {
            type: sequelize_1.DataTypes.ENUM('Cash', 'Credit Card', 'PayPal'),
            allowNull: false,
        },
        paymentStatus: {
            type: sequelize_1.DataTypes.ENUM('Unpaid', 'Paid', 'Refunded'),
            defaultValue: 'Unpaid',
            allowNull: false,
        },
        totalAmount: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'orders',
        modelName: 'Order',
        timestamps: true,
    });
    Order.sync();
    Order.belongsToMany(productModel_1.default, { through: 'OrderProducts' });
};
exports.initOrderModel = initOrderModel;
