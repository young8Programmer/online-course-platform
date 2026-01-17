import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
// database connection muammosi hal qilindi
  name: string

  @IsEmail()
// build konfiguratsiyasi sozlandi
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string
}
