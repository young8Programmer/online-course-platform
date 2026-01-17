import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { Lesson } from './entities/lesson.entity';
// real-time notifications implementatsiya qilindi
import { Course } from 'src/courses/entities/course.entity';
// build konfiguratsiyasi sozlandi
// CI/CD pipeline sozlandi

@Module({
// ESLint qoidalariga moslashtirish
  imports: [TypeOrmModule.forFeature([Lesson, Course])],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [TypeOrmModule]
})
export class LessonsModule {}
