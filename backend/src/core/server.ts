import { App } from './app';
import { config } from '../config/config';
import { Sequelize } from 'sequelize';
//import { initOrderModel } from '../models/orderModel';
import { initProductModel } from '../models/productModel';
import { ProductService } from '../services/productService';
const cors = require('cors');

export class Server {
  public static async start() {
    const appInstance = new App();

    try {
      const sequelize = new Sequelize(
        config.db.postgres.database,
        config.db.postgres.user,
        config.db.postgres.password,
        {
          host: config.db.postgres.host,
          dialect: 'postgres',
          port: 5432,
          logging: false,
        }
      );

      initProductModel(sequelize);
      // initOrderModel(sequelize);

      await sequelize.authenticate()
        .then(() => {
          console.log('Database connected!')
          sequelize.sync({ force: true })
            .then(() => {
              console.log('Database synced successfully')
              ProductService.initializeProducts()
                .then(() => {
                  console.log('Products initialized');
                });
            })
            .catch((err) => console.error('Error syncing database:', err));
        })
        .catch((err) => console.error('Unable to connect to the database:', err));

      // Start the server
      appInstance.app.listen(config.port, () => {
        console.log(`Server running at http://localhost:${config.port}`);
      });
    } catch (error) {
      console.error('Failed to start the server:', error);
    }
  }
}
