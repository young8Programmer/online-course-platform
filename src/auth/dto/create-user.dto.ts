// component testlari yaratildi
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
// kod uslubini yaxshilash
// database querylarni optimallashtirish
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
