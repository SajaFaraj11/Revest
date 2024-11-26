import express, { Application } from 'express';
import { logger } from '../middleware/logger';
import { errorHandler } from '../middleware/errorHandler';
import productRoutes from '../routes/productRoutes';
import helmet from 'helmet';
import { postgresAdapter } from '../dal/adapters/postgresAdapter';
import { DBAdapter } from '../interfaces/dataAdapterInterface';
import orderRoutes from '../routes/orderRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from '../config/config';

export class App {
  public app: Application;

  constructor() {

    this.app = express();
    //this.app.use(cors());          
    this.app.use(helmet());
    this.initializeSwagger();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeSwagger() {
    const swaggerDocs = swaggerJsdoc(swaggerOptions);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(logger);
  }

  private initializeRoutes() {
    this.app.use('/api/products', productRoutes);
    this.app.use('api/orders', orderRoutes);
  }

  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }
}

