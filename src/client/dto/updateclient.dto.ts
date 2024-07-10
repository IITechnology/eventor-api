import { OmitType } from '@nestjs/swagger';
import { CreateClientDto } from './createclient.dto';

export class UpdateClientDto extends OmitType(CreateClientDto, ['email'] as const) { }