import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { ClientModule } from '../client/client.module';
import { LifterModule } from '../lifter/lifter.module';
import { AdminModule } from '../admin/admin.module';
import { EventModule } from 'src/event/event.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    ClientModule,
    LifterModule,
    EventModule,
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
