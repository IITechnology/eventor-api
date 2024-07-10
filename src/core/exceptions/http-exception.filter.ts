import { ExceptionFilter, Catch, ArgumentsHost, HttpException,HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    console.log(exception);
    // Custom structure for HTTP exceptions
    const errorResponse = {
      statusCode: status,
      message: (exceptionResponse as any).message || exceptionResponse,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    };

    response.status(status).json(errorResponse);
  }


      
  
}