// componentlarni qayta tashkilash
import { PartialType } from '@nestjs/mapped-types';
// kod formatlash va tozalash
// installation qo'llanmasi yaratildi
// code comments qo'shildi
import { CreateResultDto } from './create-result.dto';

// component testlari yaratildi
export class UpdateResultDto extends PartialType(CreateResultDto) {}
