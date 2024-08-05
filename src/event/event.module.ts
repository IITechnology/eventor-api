import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { EventsService } from './event.service';
import { EventsController } from './event.controller';
import { EventProviders } from './event.providers';
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
  controllers: [EventsController],
  providers: [AuthService, EventsService, ...EventProviders],
  exports: [EventsService]
})
export class EventModule {}
