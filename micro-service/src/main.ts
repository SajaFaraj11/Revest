import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true, // Automatically transform input data to DTOs
            // whitelist: true, // Remove extra fields not defined in the DTO
            //forbidNonWhitelisted: true, // Throw an error for extra fields
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('Sales Order API')
        .setDescription('API for managing sales orders')
        .setVersion('1.0')
        //.addTag('Sales Orders')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3001, () => console.log('Server is running on http://localhost:3001'));
}
bootstrap();
