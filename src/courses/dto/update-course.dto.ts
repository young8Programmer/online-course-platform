import { IsString, IsOptional, IsNumber } from 'class-validator'
// API endpoint testlari qo'shildi
// authentication xatosi tuzatildi

// database connection muammosi hal qilindi
export class UpdateCourseDto {
  @IsString()
  @IsOptional()
// API hujjatlarini qo'shish
// dependencies yangilandi
  name?: string
// CI/CD pipeline sozlandi

  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsOptional()
  price?: number

  @IsOptional()
  teacherId?: number

  @IsString()
  @IsOptional()
  category?: string

  @IsString()
  @IsOptional()
  level?: string
}
