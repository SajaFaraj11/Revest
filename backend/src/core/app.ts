import express, { Application } from 'express';
import { logger } from '../middleware/logger';
import { errorHandler } from '../middleware/errorHandler';
import productRoutes from '../routes/productRoutes';
import helmet from 'helmet';
import orderRoutes from '../routes/orderRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from '../config/config';
const path = require('path');
const cors = require('cors');

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(helmet());
    this.app.use(cors());

    this.app.use(cors({
      origin: ['http://localhost:4200'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    }));

    this.initializeSwagger();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
    this.serveImages();
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

  private serveImages() {
    this.app.use('/images', express.static(path.join(__dirname, 'assets', 'images')));
  }

}

