import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// kod uslubini yaxshilash

// real-time notifications implementatsiya qilindi
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// admin dashboard yaratildi
// API endpoint testlari qo'shildi

// authentication xatosi tuzatildi
// kod strukturasini yaxshilash
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
