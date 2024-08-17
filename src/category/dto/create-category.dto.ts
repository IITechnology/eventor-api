import {
    IsNotEmpty,
    IsEmail,
    IsEnum
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
  export class CreateCategoryDto {
    @ApiProperty({
      example: 'Sample TitleCat',
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
    
    @ApiProperty({
      example: 'https://unsplash.it/20/20?id=1',
      required: false,
    })
    @IsNotEmpty()
    readonly categoryImage: string;

}
  
