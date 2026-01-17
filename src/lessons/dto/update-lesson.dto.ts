// validation xatolari tuzatildi
// API response formatini yaxshilash
import { PartialType } from '@nestjs/mapped-types';
// component testlari yaratildi
// prettier formatlash
// code comments qo'shildi
import { CreateLessonDto } from './create-lesson.dto';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
// package.json yangilandi
