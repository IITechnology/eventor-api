import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import { Observable } from "rxjs";

@Injectable()
export class FileExtender implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    req.file['userId'] = Number(req.body.userId);
    // req.file['filename'] = `${req.file['filename']}-${req.file.userId}-${req.file.originalname}`;
    // req.file['path'] = `public/profile/${req.file['filename']}`;
    return next.handle();
  }
}
const fileSanitize = (str: string) : string => {
    return str.replace(/\s/g, '-');
}
export const AdminInterceptor = {
    storage: diskStorage({
        destination: './public/profile',
        filename: (req, file, cb) => {
            const fileName: string = `${req.params.id}-${Date.now()}-${fileSanitize(file.originalname)}`;
            cb(null, fileName)
        }
    }),
    body:{
        schema: {
          type: 'object',
          properties: {
            file: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      }
}

export const EventsInterceptor = {
    storage: diskStorage({
        destination: './public/events',
        filename: (req, file, cb) => {
            const fileName: string = `${req.params.id}-${Date.now()}-${fileSanitize(file.originalname)}`;
            cb(null, fileName)
        }
    }),
    body:{
        schema: {
          type: 'object',
          properties: {
            file: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      }
}