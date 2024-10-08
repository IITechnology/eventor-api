import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { AdminModule } from '../admin/admin.module';
import { EventModule } from 'src/event/event.module';
import { CategoryModule } from 'src/category/category.module';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    EventModule,
    TokenModule,
    CategoryModule,
    AdminModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
