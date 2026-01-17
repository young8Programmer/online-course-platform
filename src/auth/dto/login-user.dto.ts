import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string
// environment variables sozlandi

  @IsString()
  @IsNotEmpty()
  password: string
}
