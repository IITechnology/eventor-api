import {
    IsNotEmpty,
    IsEmail,
    IsEnum
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Publish } from 'src/core/enum';
  export class CreateEventDto {
    @ApiProperty({
      example: 'Sample Title',
      required: true,      
    })
    @IsNotEmpty()
    readonly title: string;
  
    @ApiProperty({
      example: 'Sample description',
      required: true,      
    })
    @IsNotEmpty()
    readonly description: string;
  
    @IsEnum(Publish)
    @ApiProperty({
      enum: Publish,
      required: true,
      example: 1,
    })
    
    @IsNotEmpty()
    readonly publish: Publish;

    @IsNotEmpty()
    @ApiProperty({
      example: 11,
      required: true,
    })
    readonly user_id: number;

    @ApiProperty({
      example: '12/12/2024',
      required: true,
    })
    @IsNotEmpty()
    readonly eventDate: string;
  
    @ApiProperty({
      example: '10:00 AM',
      required: true,
    })
    @IsNotEmpty()
    readonly start_time: string;
  
    @ApiProperty({
      example: '11:00 AM',
      required: true,
    })
    @IsNotEmpty()
    readonly end_time: string;
  
    @ApiProperty({
      example: 'Punjab,India',
      required: true,
    })
    @IsNotEmpty()
    readonly address: string;

    @ApiProperty({
      example: 'Ambala',
      required: true,
    })

    @IsNotEmpty()
    readonly city: string;
  
    @ApiProperty({
      example: '1',
      required: false,
    })

    readonly category: string;
    
    @ApiProperty({
      example: 'https://unsplash.it/20/20?id=1',
      required: false,
    })
    readonly coverImage?: string;

    // @ApiProperty({
    //   example: 12,
    //   required: true,
    // })
    // @IsNotEmpty()
    // readonly userId: bigint;
}
  
