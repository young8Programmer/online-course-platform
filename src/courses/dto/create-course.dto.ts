import { IsNotEmpty, IsString, IsNumber } from 'class-validator'
// caching mexanizmi qo'shildi

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  price: number

  @IsString()
  @IsNotEmpty()
  teacher: string

  @IsString()
  @IsNotEmpty()
  category: string

  @IsString()
  @IsNotEmpty()
  level: string

  enrolledUsers: number[]
}
