import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// admin dashboard yaratildi
// API endpoint testlari qo'shildi

// kod strukturasini yaxshilash
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
