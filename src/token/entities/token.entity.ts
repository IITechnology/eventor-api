import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  Default,
  Unique,
} from "sequelize-typescript";
import { TRANSACTION_MODE, TRANSACTION_STATUS, TRANSACTION_TYPE } from "src/core/enum";

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
  charset: "utf8",
})
export class Token extends Model<Token> {
  @AllowNull(false)
  @Column(DataType.STRING(200))
  token: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  userId: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(200))
  transactionId: string;

  @AllowNull(false)
  @Default(TRANSACTION_TYPE.DEBIT)
  @Column({
    type: DataType.ENUM,
    values: Object.values(TRANSACTION_TYPE),
  })
  transactionType: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  transactionDescription: string;

  @AllowNull(false)
  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  transactionAmount: number;

  @AllowNull(false)
  @Default(TRANSACTION_STATUS.INPROGRESS)
  @Column({
    type: DataType.ENUM,
    values: Object.values(TRANSACTION_STATUS),
  })
  transactionStatus: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  transactionDate: Date;

  @AllowNull(false)
  @Default(TRANSACTION_MODE.UPI)
  @Column({
    type: DataType.ENUM,
    values: Object.values(TRANSACTION_MODE),
  })
  transactionMode: string;

  @AllowNull(null)
  @Column(DataType.STRING(255))
  transactionReference: string;

  @AllowNull(null)
  @Column(DataType.STRING(255))
  transactionReceipt: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  transactionNotes: string;

  @AllowNull(null)
  @Column(DataType.STRING(255))
  transactionResponse: string;

  @AllowNull(null)
  @Column(DataType.STRING(255))
  transactionResponseCode: string;

  @AllowNull(null)
  @Column(DataType.STRING(255))
  transactionResponseMessage: string;

  @AllowNull(null)
  @Column(DataType.STRING(255))
  transactionResponseData: string;

  @AllowNull(null)
  @Column(DataType.STRING(255))
  transactionResponseStatus: string;


}
