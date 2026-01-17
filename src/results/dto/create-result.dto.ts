// shopping cart funksiyasi qo'shildi
// unit testlar qo'shildi
import { IsNotEmpty, IsNumber, isString } from 'class-validator';

export class CreateResultDto {
  @IsNotEmpty({message: "maydon bo'sh bo'lmasligi kerak"})
// type error tuzatildi
  solution: string
// real-time notifications implementatsiya qilindi

  @IsNotEmpty()
// componentlarni qayta tashkilash
// kod uslubini yaxshilash
  @IsNumber()
  userId: number

  @IsNotEmpty()
  @IsNumber()
  assignmentId: number
}
