import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
// ESLint qoidalariga moslashtirish
// installation qo'llanmasi yaratildi
// image optimization qo'shildi
  getHello(): string {
    return 'Hello World!';
  }
}
