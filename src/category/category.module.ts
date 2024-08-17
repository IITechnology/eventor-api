import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryProviders } from './category.providers';
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
  controllers: [CategoryController],
  providers: [AuthService, CategoryService, ...CategoryProviders],
  exports: [CategoryService]
})
export class CategoryModule {}
