import { OmitType } from '@nestjs/swagger';
import { CreateLifterDto } from './create-lifter.dto';

export class UpdateLifterDto extends OmitType(CreateLifterDto, ['email'] as const) {}
