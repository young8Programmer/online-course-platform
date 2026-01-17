import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
// database connection muammosi hal qilindi
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string
}
