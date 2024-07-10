import { ApiProperty } from '@nestjs/swagger';
import { SR_Status } from '../../core/enum';
import { IsEnum, IsDate, MinDate } from 'class-validator';
import { Transform } from 'class-transformer';
export class UpdateSRLifterDto {

      @ApiProperty({
        example: 1
      })
      readonly lifterId: number;

      @ApiProperty({
        example: 1
      })
      readonly rosterId: number;

      @ApiProperty({
        example: new Date()
      })
      @IsDate()
      @MinDate(new Date())
      @Transform( ({ value }) => new Date(value))
      readonly pickupTime?: Date;
    
      @ApiProperty({
        example: '5000'
      })
      readonly pickupQty?: number;

      @ApiProperty({
        example: true,
      })
      readonly sendReport?: boolean;

      @ApiProperty({
        example: 'Type your Feedback'
      })
      readonly lifterFeedback?: string;

      @ApiProperty({
        example: 'completed',
        enum: SR_Status  
      })
      @IsEnum(SR_Status)
      readonly Status?: SR_Status;

}
