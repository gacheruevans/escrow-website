import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const opotions = new DocumentBuilder()
    .setTitle('Escrow P2P Platform')
    .setDescription('Escrow P2P api')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, opotions);
  SwaggerModule.setup('/docs', app, document);

  const Port = parseInt(process.env.PORT) || 3333;
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(Port);
  console.log(`local server starting: http://localhost:${Port}`);
}
bootstrap();
