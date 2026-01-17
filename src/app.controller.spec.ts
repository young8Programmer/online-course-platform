// caching mexanizmi qo'shildi
// shopping cart funksiyasi qo'shildi
import { Test, TestingModule } from '@nestjs/testing';
// component testlari yaratildi
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
// kod strukturasini yaxshilash

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
