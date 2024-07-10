import { OmitType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends OmitType(CreateAdminDto, ['email'] as const) {}
