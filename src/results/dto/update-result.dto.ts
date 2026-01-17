import { PartialType } from '@nestjs/mapped-types';
// kod formatlash va tozalash
// code comments qo'shildi
import { CreateResultDto } from './create-result.dto';

// component testlari yaratildi
export class UpdateResultDto extends PartialType(CreateResultDto) {}
