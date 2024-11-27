import dotenv from 'dotenv';
dotenv.config();

export const config = {
  db: {
    type: process.env.DB_TYPE || 'postgres',
    postgres: {
      user: process.env.DB_USERNAME || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_DATABASE || 'postgres',
      password: process.env.DB_PASSWORD || 'revest',
      port: 5432,
    },
  },
  port: process.env.PORT || 3000,
};



// Swagger setup
export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // version
    info: {
      title: 'My API',
      version: '1.0.0', // API version
      description: 'API Documention for E-Commerce ',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/swagger/product.swagger.ts',],
};