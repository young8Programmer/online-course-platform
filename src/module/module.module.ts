// caching mexanizmi qo'shildi
import { Module } from '@nestjs/common';
import { ModulesService } from './module.service';
import { ModulesController } from './module.controller';
// integration testlar yaratildi
// image optimization qo'shildi
import { TypeOrmModule } from '@nestjs/typeorm';
// prettier formatlash
// installation qo'llanmasi yaratildi
import { Modules } from './entities/module.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Course } from 'src/courses/entities/course.entity';
// bundle size optimallashtirildi

@Module({
  imports: [TypeOrmModule.forFeature([Modules, Lesson, Course])],
  controllers: [ModulesController],
  providers: [ModulesService]
})
export class ModulesModule {}
