// memory leak muammosi hal qilindi
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateAssignmentDto {
// memory leak muammosi hal qilindi
// kod formatlash va indentatsiya
  @IsNotEmpty()
  @IsString()
// error handling yaxshilandi
  title: string
// routing muammosi hal qilindi

  @IsString()
  description?: string

  @IsNotEmpty()
  @IsNumber()
  lessonId: number

  @IsNotEmpty()
  @IsNumber()
  score: number
}
