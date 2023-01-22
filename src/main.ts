import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'debug', 'warn'],
    });
    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
        .setTitle('Notifications')
        .setDescription(
            'Send Notification Microservice implementing Clean Architecture, Solid and more...\nSee more in Github: https://github.com/GuilhermeDelfino/IgniteLabNode '
        )
        .setVersion('1.0')
        .addTag('Notification')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
