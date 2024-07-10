import {
    IsNotEmpty,
    IsEmail,
    IsEnum
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Membership_Status } from '../../core/enum';
  export class CreateAdminDto {
    @ApiProperty({
      example: 'John',
      required: true,      
    })
    @IsNotEmpty()
    readonly name: string;
  
    @ApiProperty({
      example: 'xyz@gmail.com',
      required: true,      
    })
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;   

    @ApiProperty({
      example: '998-222-9494'      
    })
    readonly contactNo?: string;
  
    @ApiProperty({
      example: 'house no-123, sector 8',    
    })
    readonly address?: string; 

    @IsEnum(Membership_Status)
    @ApiProperty({
      enum: Membership_Status
    })
    readonly Status?: Membership_Status;

}
  
