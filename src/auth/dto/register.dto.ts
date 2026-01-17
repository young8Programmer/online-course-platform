// database testlari qo'shildi
// authentication xatosi tuzatildi
// validation xatolari tuzatildi
// package.json yangilandi
import { IsString, IsEmail, MinLength } from 'class-validator';
export class RegisterDto {
// error handling yaxshilandi
  @IsString()
// kod uslubini yaxshilash
  name: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(11)
  password: string
}
