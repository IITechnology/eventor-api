import { Controller, Body, Post, Put, Param, UseGuards, Request,ForbiddenException,HttpStatus,UnauthorizedException } from '@nestjs/common';
import { LocalAuthGuard } from '../core/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { AdminService } from '../admin/admin.service';
import { CreateUserDto } from '../users/dto/createuser.dto';
import { LoginUserDto } from '../users/dto/loginuser.dto';
import { DoesUserExist } from '../core/guards/doesUserExist.guard';
import { LogoutGuard } from '../core/guards/logout.guard';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { RoleType } from '../core/enum';
import { ResetPasswordDto } from '../users/dto/resetPassword.dto';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { UpdateFCMTokenDto } from '../users/dto/updateFCMToken.dto';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
@ApiTags('authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private adminService: AdminService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() credentials: LoginUserDto,@Request() req) {
      try {
        return await this.authService.login(req.user);
      }
      catch(err){
          throw new ForbiddenException({ message: err.message, statusCode:HttpStatus.FORBIDDEN});
      }   
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: CreateUserDto) {  
      try {
        const loginResponse = await this.authService.create(user);
        if(loginResponse){
              let mainEntryResponse:any;
              let usertype: CreateAdminDto ={
                name: user.name,
                email: user.email,
                contactNo: user?.contactNo
              }
              switch(user.role){
                case RoleType.ADMIN :{
                  mainEntryResponse= await this.adminService.create(usertype);
                  break;
                }
            }
            await this.authService.updateUserClientId(loginResponse.user.id, mainEntryResponse.id);      
        }
        return loginResponse;
      }
      catch(err){
          throw new ForbiddenException({ message: err.message, statusCode:HttpStatus.FORBIDDEN});
      } 
  }

  
  @Put('resetPassword')
  async setPassword(@Body() body: ResetPasswordDto) {
      const user= await this.authService.setPassword(body);
      if (!user) {
        throw new UnauthorizedException('Invalid User');
      }
      return true;   
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Put('updateFCM')
  async setFCM(@Body() body: UpdateFCMTokenDto,@Request() req) {
      const user= await this.authService.updateFCM(req.user.id,body.email,body.token);
      if (!user) {
        throw new UnauthorizedException('Invalid User');
      }
      return true;   
  }

  // @Put('forgotPassword')
  // async forgotPassword(@Body() body) {
  //   const user= await this.authService.sendTokenLink(body);
  //     if (!user) {
  //       throw new UnauthorizedException('Invalid User');
  //     }
  //     return user;  
  // }

  // @Put('validate-token')
  //  async resetPassword(@Body() body) {
  //    return this.authService.setPassword(body);
  // }

  // @Post('logout')
  // @UseGuards(LogoutGuard)
  // async logout() {
  //   return { message: 'Logout successful' };
  // }
}