import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// API endpoint testlari qo'shildi

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
