// shopping cart funksiyasi qo'shildi
import { IsNotEmpty, IsNumber, isString } from 'class-validator';

export class CreateResultDto {
  @IsNotEmpty({message: "maydon bo'sh bo'lmasligi kerak"})
  solution: string

  @IsNotEmpty()
// kod uslubini yaxshilash
  @IsNumber()
  userId: number

  @IsNotEmpty()
  @IsNumber()
  assignmentId: number
}
