import { ApiBody, ApiConsumes, ApiProperty } from "@nestjs/swagger";

export class FileUploadDto {

  @ApiProperty({
    type: 'object',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  file: Express.Multer.File;
}