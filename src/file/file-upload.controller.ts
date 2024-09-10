// file-upload.controller.ts
import { Body, Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadDto } from './dto/file-upload.dto';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileExtender } from 'src/core/interceptors/FileInterceptor';
import { diskStorage } from 'multer';

@Controller('upload')
export class FileUploadController {
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'string' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileExtender)
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
        destination: './public/profile',
        filename: (req, file, cb) => {
            const fileName: string = `${req.body.userId}-${Date.now()}-${file.originalname}`;
            cb(null, fileName)
        }
    })
    }))
  async uploadFile(
    @Body() body: FileUploadDto,
    @UploadedFile(
        new ParseFilePipe({
            validators: [
              new MaxFileSizeValidator({ maxSize: 1000 * 100 }),
              new FileTypeValidator({ fileType: 'image/jpeg' }),
            ],
          }),
    ) file: Express.Multer.File ) {
    return {
        file: file,
        body,
        msg :'File uploaded successfully!',
        // file: file.buffer.toString(),
      };
  }
}