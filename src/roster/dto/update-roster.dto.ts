import { OmitType } from '@nestjs/swagger';
import { CreateRosterDto } from './create-roster.dto';

export class UpdateRosterDto extends OmitType(CreateRosterDto, ['serviceRequestId','lifterId','location'] as const) {}
