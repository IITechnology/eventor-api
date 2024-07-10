import { IsNotEmpty,IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateFCMTokenDto {

  @ApiProperty({
    example: 'kaur@gmail.com',
    required: true,      
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    required: true,   
    example:'1234fetrt5678',
  })
  @IsNotEmpty()
  readonly token: string;

}