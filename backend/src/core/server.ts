import { App } from './app';
import { config, swaggerOptions } from '../config/config';
import sequelize from '../db/postgres';
import Order from '../models/orderModel';
import Product from '../models/productModel';

export class Server {
  public static async start() {
    const appInstance = new App();
    try {

      sequelize.models.Product = Product;
      sequelize.models.Order = Order;

      await sequelize.authenticate()
        .then(() => {
          console.log('Database connected!')
          sequelize.sync({ force: true })
            .then(() => console.log('Database synced successfully'))
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
