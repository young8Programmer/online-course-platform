// CI/CD pipeline sozlandi
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// changelog yangilandi
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
// API endpoint testlari qo'shildi
// database querylarni optimallashtirish
}

bootstrap();
