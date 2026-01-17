// kod formatlash va tozalash
import { PartialType } from '@nestjs/mapped-types';
// prettier formatlash
import { CreateAssignmentDto } from './create-assignment.dto';
// middleware funksiyalari qo'shildi

// middleware funksiyalari qo'shildi
export class UpdateAssignmentDto extends PartialType(CreateAssignmentDto) {}
// componentlarni qayta tashkilash
