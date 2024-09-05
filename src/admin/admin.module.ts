import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminProviders } from './admin.providers';
import { AuthService } from '../auth/auth.service';
// import { ServiceRequestService } from '../service-request/service-request.service';
// import { ServiceRequestProviders } from '../service-request/service-request.providers';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  controllers: [AdminController],
  providers: [ AuthService, AdminService, ...AdminProviders],
  exports: [AdminService]
})
export class AdminModule {}
