import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // 👈 Importa esto

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // 👇 Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Login API')
    .setDescription('API para registro y login de usuarios')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // 👆 Esto muestra la documentación en http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
