import { IsNotEmpty,IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ResetPasswordDto {

  @ApiProperty({
    example: 'kaur@gmail.com',
    required: true,      
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    required: true,   
    example:'12345678',
    description:"Minimum 8 characters password"   
  })
  @IsNotEmpty()
  readonly newPassword: string;

}