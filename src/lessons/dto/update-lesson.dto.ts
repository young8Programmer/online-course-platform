// API response formatini yaxshilash
import { PartialType } from '@nestjs/mapped-types';
// prettier formatlash
import { CreateLessonDto } from './create-lesson.dto';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
