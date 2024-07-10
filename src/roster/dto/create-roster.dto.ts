import { IsDate, IsNotEmpty, MinDate, IsEnum} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { SR_Status } from '../../core/enum';
export class CreateRosterDto {
      @ApiProperty({
        example: [1,2,3],
        required: true,   
      })
      @IsNotEmpty()
      readonly serviceRequestId:string[];

      @ApiProperty({
        default: new Date(),
        required: true,
      })
      @IsNotEmpty()
      @IsDate()
      @MinDate(new Date())
      @Transform( ({ value }) => new Date(value))
      readonly assignedTime?: Date;
    
      @ApiProperty({
        example: 'Mohali',
        required: true,
      })
      @IsNotEmpty()
      readonly location?: string;

      @ApiProperty({
        example: 'PB01-33-3333',
        required: true,
      })
      @IsNotEmpty()
      readonly vehicleNo?: string;

      @ApiProperty({
        example: 1,
        required: true,   
      })
      @IsNotEmpty()
      readonly lifterId: number;

      @ApiProperty({
        example: 'completed',
        enum: SR_Status  
      })
      @IsEnum(SR_Status)
      readonly Status?: SR_Status;
}