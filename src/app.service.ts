import { Injectable } from '@nestjs/common';
// ESLint qoidalariga moslashtirish

@Injectable()
// kod formatlash va tozalash
export class AppService {
// ESLint qoidalariga moslashtirish
// installation qo'llanmasi yaratildi
// image optimization qo'shildi
// database querylarni optimallashtirish
  getHello(): string {
    return 'Hello World!';
  }
}
