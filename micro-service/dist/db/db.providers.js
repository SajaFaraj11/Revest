"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sales_order_entity_1 = require("../sales-order/sales-order.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'revest',
                database: 'postgres2',
                logging: false,
            });
            sequelize.addModels([sales_order_entity_1.SalesOrder]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=db.providers.js.map