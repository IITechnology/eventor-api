import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { TokenService } from "./token.service";
import { TokenController } from "./token.controller";
import { TokenProviders } from "./token.providers";
import { AuthService } from "../auth/auth.service";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  controllers: [TokenController],
  providers: [AuthService, TokenService, ...TokenProviders],
  exports: [TokenService],
})
export class TokenModule {}
