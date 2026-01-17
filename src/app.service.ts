import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
// image optimization qo'shildi
  getHello(): string {
    return 'Hello World!';
  }
}
