import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
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