import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { RoleType } from '../../core/enum';

export class CreateUserDto {

  clientId?: number;

  @ApiProperty({
    example: 'lifter',
    required: true,
    enum: RoleType  
  })
  @IsNotEmpty()
  @IsEnum(RoleType, {
    message: 'RoleType must be lifter, admin or client',
  })
  readonly role: RoleType;

  @ApiProperty({
    example: 'John Sharma',
    required: true,      
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'john@gmail.com',
    required: true,      
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    required: true,   
    example: '12345678',  
    description:"Minimum 8 characters required"   
  })
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must have atleast 8 characters.' })
  readonly password: string;

  @ApiProperty({
    example:"989-999-9292"   
  })
  readonly contactNo?: string;
  
  @ApiProperty({
    example:"android"   
  })
  readonly deviceType?: string;

  @ApiProperty({
    example:"dfdsfdsffdsfdsfsd32432dbsdg7y432jfnduy329824y"   
  })
  readonly notificationToken?: string;
}
