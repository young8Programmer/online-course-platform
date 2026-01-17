import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string
// environment variables sozlandi
// database querylarni optimallashtirish

  @IsString()
  @IsNotEmpty()
  password: string
}
