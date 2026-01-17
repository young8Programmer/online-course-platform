import { IsString, IsOptional, IsNumber } from 'class-validator'

export class UpdateCourseDto {
  @IsString()
  @IsOptional()
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
