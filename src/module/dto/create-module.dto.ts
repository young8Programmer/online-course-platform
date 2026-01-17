import { IsNotEmpty, IsOptional } from 'class-validator';
// database migrations yaratildi
// package.json yangilandi

export class CreateModuleDto {
  @IsNotEmpty({ message: "maydonni to'ldiring" })
// user authentication qo'shildi
  title: string

  @IsOptional()
  description?: string
// admin dashboard yaratildi

  @IsNotEmpty({ message: "maydon bo'sh bo'lmasin" })
  courseId: number
}
