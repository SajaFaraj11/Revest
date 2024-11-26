import dotenv from 'dotenv';
dotenv.config();

export const config = {
  db: {
    type: process.env.DB_TYPE || 'postgres', // Change to 'mongo' for MongoDB
    postgres: {
      user: process.env.DB_USERNAME || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_DATABASE || 'postgres',
      password: process.env.DB_PASSWORD || 'revest',
      port: 5432,
    },
    //   mongo: {
    //     uri: 'mongodb://localhost:27017/sales_db',
    //   },
  },
  port: process.env.PORT || 3000,
};



// Swagger setup
export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // version
    info: {
      title: 'My API', // API title
      version: '1.0.0', // API version
      description: 'API Documention for E-Commerce ', // API description
    },
    servers: [
      {
        url: 'http://localhost:3000', // API server URL
      },
    ],
  },
  apis: ['./src/swagger/product.swagger.ts',], // Path to the API route files
};