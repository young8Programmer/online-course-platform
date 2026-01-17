// database testlari qo'shildi
// authentication xatosi tuzatildi
// package.json yangilandi
import { IsString, IsEmail, MinLength } from 'class-validator';
export class RegisterDto {
// error handling yaxshilandi
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(11)
  password: string
}
