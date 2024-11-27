"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const app_1 = require("./app");
const config_1 = require("../config/config");
const sequelize_1 = require("sequelize");
const orderModel_1 = require("../models/orderModel");
const productModel_1 = require("../models/productModel");
const productService_1 = require("../services/productService");
const cors = require('cors');
class Server {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            const appInstance = new app_1.App();
            try {
                const sequelize = new sequelize_1.Sequelize(config_1.config.db.postgres.database, config_1.config.db.postgres.user, config_1.config.db.postgres.password, {
                    host: config_1.config.db.postgres.host,
                    dialect: 'postgres',
                    port: 5432,
                    logging: false,
                });
                (0, productModel_1.initProductModel)(sequelize);
                (0, orderModel_1.initOrderModel)(sequelize);
                yield sequelize.authenticate()
                    .then(() => {
                    console.log('Database connected!');
                    sequelize.sync({ force: true })
                        .then(() => {
                        console.log('Database synced successfully');
                        productService_1.ProductService.initializeProducts()
                            .then(() => {
                            console.log('Products initialized');
                        });
                    })
                        .catch((err) => console.error('Error syncing database:', err));
                })
                    .catch((err) => console.error('Unable to connect to the database:', err));
                // Start the server
                appInstance.app.listen(config_1.config.port, () => {
                    console.log(`Server running at http://localhost:${config_1.config.port}`);
                });
            }
            catch (error) {
                console.error('Failed to start the server:', error);
            }
        });
    }
}
exports.Server = Server;
