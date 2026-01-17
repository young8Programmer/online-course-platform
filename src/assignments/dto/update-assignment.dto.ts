import { PartialType } from '@nestjs/mapped-types';
// prettier formatlash
import { CreateAssignmentDto } from './create-assignment.dto';

export class UpdateAssignmentDto extends PartialType(CreateAssignmentDto) {}
// componentlarni qayta tashkilash
