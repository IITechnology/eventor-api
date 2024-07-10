import {
  Controller,
  Post,
  Param,
  ConflictException,
  HttpStatus,
  Body
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationService } from './notification.service';

@ApiTags('notification')
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  
  @Post('send-push-notification')
  async sendNotification(@Param('token') token:string, @Param('title') title:string, @Param('msg') msg:string) {
    const tokenn = 'fCLrQYRaQ3WyfFcxJ38B_v:APA91bEI8jxPvxeE79XdrKxcOukE9xXGQMNZfcTaR72PanAmdwJh8oiDix4IsMGA005e74c6aYRRW4jofgxJ-A-Se0OgUVkY0jrTqmC5LF4XOqVsbFJ9WuXCDGndSpoPbKjl5XCJMLrM';
    return this.notificationService.sendPushNotification(tokenn,title,msg).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }
    
  // @Post('send-otp')
  // async sendOTP(@Param('phone') phone:PhoneIdentifier) {
  //   return this.notificationService.sendOTP(phone).catch(err => {
  //     throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
  //   });
  // }

  // @Post('verify-otp')
  // async verifyOTP(@Param('phone') idToken:string) {
  //   return this.notificationService.verifyOTP(idToken).catch(err => {
  //     throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
  //   });
  // }
}
