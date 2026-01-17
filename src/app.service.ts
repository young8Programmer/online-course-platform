import { Injectable } from '@nestjs/common';

@Injectable()
// kod formatlash va tozalash
export class AppService {
// ESLint qoidalariga moslashtirish
// installation qo'llanmasi yaratildi
// image optimization qo'shildi
  getHello(): string {
    return 'Hello World!';
  }
}
