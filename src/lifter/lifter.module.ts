import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LifterService } from './lifter.service';
import { LifterController } from './lifter.controller';
import { LifterProviders } from './lifter.providers';
import { AuthService } from '../auth/auth.service';
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
  controllers: [LifterController],
  providers: [AuthService, LifterService, ...LifterProviders],
  exports: [LifterService]
})
export class LifterModule {}
