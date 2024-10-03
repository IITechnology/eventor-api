import { OmitType } from "@nestjs/swagger";
import { CreateTokenDto } from "./create-token.dto";

export class UpdateTokenDto extends OmitType(
  CreateTokenDto,
  [] as const,
) {}
