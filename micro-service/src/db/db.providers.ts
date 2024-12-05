import { Sequelize } from 'sequelize-typescript';
import { SalesOrder } from '../sales-order/sales-order.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'revest',
                database: 'postgres2',
                logging: false,
            });
            sequelize.addModels([SalesOrder]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
