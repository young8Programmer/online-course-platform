// kod formatlash va tozalash
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
// code comments qo'shildi
// kod formatlash va indentatsiya
import { Course } from './entities/course.entity';
import { AuthModule } from '../auth/auth.module';
import { User } from 'src/auth/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, User]), AuthModule ],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
