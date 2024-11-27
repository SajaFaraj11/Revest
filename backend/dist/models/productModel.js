"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initProductModel = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
exports.default = Product;
const initProductModel = (sequelize) => {
    Product.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        discount: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true,
        },
        stock: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        brandName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        imageUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        weight: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true,
        },
        isActive: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'products',
        modelName: 'Product',
        timestamps: true,
    });
    Product.sync();
};
exports.initProductModel = initProductModel;
