import { IsEnum, IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { TRANSACTION_MODE, TRANSACTION_STATUS, TRANSACTION_TYPE } from "src/core/enum";
export class CreateTokenDto {
  @ApiProperty({
    example: "token",
    required: true,
  })
  @IsNotEmpty()
  readonly token: string;

  @ApiProperty({
    example: "userId",
    required: true,
  })
  @IsNotEmpty()
  readonly userId: string;

  @ApiProperty({
    example: "transactionId",
    required: true,
  })
  @IsNotEmpty()
  readonly transactionId: string;

  @IsEnum(TRANSACTION_TYPE)
  @ApiProperty({
    enum: TRANSACTION_TYPE,
    example: "credit | debit",
    required: true,
  })
  @IsNotEmpty()
  readonly transactionType: 'credit' | 'debit';

  @ApiProperty({
    example: "transactionDescription",
    required: false,
  })
  readonly transactionDescription: string;

  @ApiProperty({
    example: "transactionAmount",
    required: true,
  })
  @IsNotEmpty()
  readonly transactionAmount: number;

  @IsEnum(TRANSACTION_STATUS)
  @ApiProperty({
    example: "pending | completed | inprogress | cancelled | rejected",
    enum: TRANSACTION_STATUS,
    required: true,
  })
  @IsNotEmpty()
  readonly transactionStatus: "pending" | "completed" | "inprogress" | "cancelled" | "rejected";

  @ApiProperty({
    example: "transactionDate",
    required: true,
  })
  @IsNotEmpty()
  readonly transactionDate: Date;

  @IsEnum(TRANSACTION_MODE)
  @ApiProperty({
    example: 'upi | internet | card | wallet | bankToWallet',
    enum: TRANSACTION_MODE,
    required: true,
  })
  @IsNotEmpty()
  readonly transactionMode: "upi" | "internet" | "card" | "wallet" | "bankToWallet";

  @ApiProperty({
    example: "transactionReference",
    required: false,
  })
  readonly transactionReference: string;

  @ApiProperty({
    example: "transactionReceipt",
    required: false,
  })
  readonly transactionReceipt: string;

  @ApiProperty({
    example: "transactionNotes",
    required: false,
  })
  readonly transactionNotes: string;

  @ApiProperty({
    example: "transactionResponse",
    required: false,
  })
  readonly transactionResponse: string;

  @ApiProperty({
    example: "transactionResponseCode",
    required: false,
  })
  readonly transactionResponseCode: string;

  @ApiProperty({
    example: "transactionResponseMessage",
    required: false,
  })
  readonly transactionResponseMessage: string;

  @ApiProperty({
    example: "transactionResponseData",
    required: false,
  })
  readonly transactionResponseData: string;

  @ApiProperty({
    example: "transactionResponseStatus",
    required: false,
  })
  readonly transactionResponseStatus: string;


}
