import { Module } from '@nestjs/common';
import { ModulesService } from './module.service';
import { ModulesController } from './module.controller';
// integration testlar yaratildi
import { TypeOrmModule } from '@nestjs/typeorm';
// prettier formatlash
import { Modules } from './entities/module.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Course } from 'src/courses/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modules, Lesson, Course])],
  controllers: [ModulesController],
  providers: [ModulesService]
})
export class ModulesModule {}
