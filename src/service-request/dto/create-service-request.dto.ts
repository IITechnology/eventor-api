
import { IsDate, IsEnum, IsNotEmpty, MinDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SampleCollectorType } from '../../core/enum';
import { Transform } from 'class-transformer';

  export class CreateServiceRequestDto {
    readonly clientId: number;
    @ApiProperty({
      example: new Date(),
      required: true,   
    })

    @IsNotEmpty()
    @IsDate()
    @MinDate(new Date())
    @Transform( ({ value }) => new Date(value))
    readonly requestedTime: Date;
  
    @ApiProperty({
      example: '5000',
      required: true,
    })
    @IsNotEmpty()
    readonly requestedQty: number;

    @IsEnum(SampleCollectorType)
    @ApiProperty({
      required: true,
      enum: SampleCollectorType     
    })
    @IsNotEmpty()
    readonly Type: SampleCollectorType; 
  
  }
  
