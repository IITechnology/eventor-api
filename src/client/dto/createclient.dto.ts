import {
    IsNotEmpty,
    IsEmail,
    IsDate,
    MinDate,
    IsEnum
  } from 'class-validator';
import { Effluent_Type, Industry_Category, Membership_Status, Security_Deposit } from '../../core/enum';
import { ApiProperty } from '@nestjs/swagger';
import { DateOnlyDataType, FloatDataType } from 'sequelize';
  export class CreateClientDto {
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
      example: 'plot no-123, phase 8',    
    })
    readonly address?: string; 
    
    @ApiProperty({
      example: 'mohali',    
    })
    readonly district?: string;

    @ApiProperty({
        example: 'punjab',    
    })
    readonly state?: string;

    @ApiProperty({
        example: '56.646546',    
    })
    readonly latitude?: string;

    @ApiProperty({
        example: '23.565656',    
    })
    readonly longitude?: string; 
    
    @ApiProperty({
      example: '24fsd4321266'     
    })
    readonly gstNo?: string;
   
    @IsEnum(Effluent_Type)
    @ApiProperty({
      enum:Effluent_Type
    })
    readonly effluentType?: Effluent_Type;

    @ApiProperty({
      example: '22'
    })
    readonly effluentRate?: number;

    @ApiProperty({
      example: 'daily'
    })
    readonly monthlyEffluentGenerated?: string;

    @ApiProperty({
      example: '7000'
    })
    readonly storageTank?: number;

    @ApiProperty({
      default:  new Date().toLocaleDateString()
    })
    //@MinDate(new Date())
    readonly agreementStartDate?: DateOnlyDataType;

    @ApiProperty({
      example:  new Date().toLocaleDateString()
    })
    //@MinDate(new Date())
    readonly agreementEndDate?: DateOnlyDataType;

    @IsEnum(Industry_Category)
    @ApiProperty({
      enum:Industry_Category    
    })
    readonly industryCategory?: Industry_Category;

    @IsEnum(Security_Deposit)
    @ApiProperty({
      enum:Security_Deposit  
    })
    readonly securityDeposit?: Security_Deposit;

    @ApiProperty({
      example:  '12000'
    })
    readonly membershipFees?: number;

    @ApiProperty({
      example:  ''
    })
    readonly remarks?: string;

    @IsEnum(Membership_Status)
    @ApiProperty({
      enum:Membership_Status  
    })
    readonly Status?: Membership_Status;
  }
  
