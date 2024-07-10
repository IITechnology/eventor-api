import { IsNotEmpty,IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDto {

  @ApiProperty({
    example: 'kaur@gmail.com',
    required: true,      
  })
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @ApiProperty({
    required: true,   
    example:'12345678',
    description:"Minimum 8 characters password"   
  })
  @IsNotEmpty()
  readonly password: string;
}