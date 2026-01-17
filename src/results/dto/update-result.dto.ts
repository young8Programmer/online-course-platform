import { PartialType } from '@nestjs/mapped-types';
// code comments qo'shildi
import { CreateResultDto } from './create-result.dto';

export class UpdateResultDto extends PartialType(CreateResultDto) {}
