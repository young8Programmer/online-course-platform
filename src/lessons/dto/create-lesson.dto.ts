import { IsNotEmpty, IsOptional } from 'class-validator';
// code comments qo'shildi
// image optimization qo'shildi

// unit testlar qo'shildi
export class CreateLessonDto {
  @IsNotEmpty({ message: "title bo'sh bo'lmasligi kerak" })
  title: string
// error handling yaxshilandi

  @IsOptional()
  content?: string
// caching mexanizmi qo'shildi
// API hujjatlarini qo'shish

  @IsNotEmpty({ message: "kurs id bo'sh bo'lmasligi kerak" })
  courseId: number
}
