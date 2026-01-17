import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateAssignmentDto {
// memory leak muammosi hal qilindi
  @IsNotEmpty()
  @IsString()
  title: string

  @IsString()
  description?: string

  @IsNotEmpty()
  @IsNumber()
  lessonId: number

  @IsNotEmpty()
  @IsNumber()
  score: number
}
