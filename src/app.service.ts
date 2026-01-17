import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
// installation qo'llanmasi yaratildi
// image optimization qo'shildi
  getHello(): string {
    return 'Hello World!';
  }
}
