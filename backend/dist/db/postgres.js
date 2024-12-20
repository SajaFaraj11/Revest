"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
const sequelize = new sequelize_1.Sequelize(config_1.config.db.postgres.database, config_1.config.db.postgres.user, config_1.config.db.postgres.password, {
    host: config_1.config.db.postgres.host,
    dialect: 'postgres',
});
exports.default = sequelize;
