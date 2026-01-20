import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// ESLint qoidalariga moslashtirish
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { Result } from './entities/result.entity';
// ESLint qoidalariga moslashtirish
// kod formatlash va tozalash
import { User } from 'src/auth/entities/user.entity';
// prettier formatlash
import { Assignment } from 'src/assignments/entities/assignment.entity';
// component testlari yaratildi
// README faylini yangilash
import { AssignmentsModule } from 'src/assignments/assignments.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Result, User, Assignment]),
    forwardRef(() => AssignmentsModule)
  ],
  controllers: [ResultsController],
  providers: [ResultsService],
  exports: [TypeOrmModule]
})
export class ResultsModule {}
