// kod uslubini yaxshilash
// changelog yangilandi
import { PartialType } from '@nestjs/mapped-types';
// routing muammosi hal qilindi
import { CreateModuleDto } from './create-module.dto';
// database migrations yaratildi

// prettier formatlash
// kod strukturasini yaxshilash
export class UpdateModuleDto extends PartialType(CreateModuleDto) {}
