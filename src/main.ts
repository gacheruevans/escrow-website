import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const Port = process.env.PORT || 8888;
  await app.listen(Port);
  console.log(`local server starting: http://localhost:${Port}`);
}
bootstrap();
