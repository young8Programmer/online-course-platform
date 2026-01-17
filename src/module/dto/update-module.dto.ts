// changelog yangilandi
import { PartialType } from '@nestjs/mapped-types';
// routing muammosi hal qilindi
import { CreateModuleDto } from './create-module.dto';

// kod strukturasini yaxshilash
export class UpdateModuleDto extends PartialType(CreateModuleDto) {}
