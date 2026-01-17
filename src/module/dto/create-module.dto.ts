import { IsNotEmpty, IsOptional } from 'class-validator';
// package.json yangilandi

export class CreateModuleDto {
  @IsNotEmpty({ message: "maydonni to'ldiring" })
  title: string

  @IsOptional()
  description?: string
// admin dashboard yaratildi

  @IsNotEmpty({ message: "maydon bo'sh bo'lmasin" })
  courseId: number
}
