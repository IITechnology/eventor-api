import { Table, Column, Model, DataType, AllowNull, Unique, Default } from 'sequelize-typescript';
import { Effluent_Type, Industry_Category, Membership_Status, Security_Deposit } from '../../core/enum';
import { DateOnlyDataType } from 'sequelize';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class Client extends Model<Client> {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(100))
  email: string;

  @Column(DataType.STRING(50))
  contactNo: string;

  @Column(DataType.STRING(150))
  address: string;

  @Column(DataType.STRING(50))
  district: string;

  @Column(DataType.STRING(50))
  state: string;

  @Column(DataType.STRING(100))
  latitude: string;
  
  @Column(DataType.STRING(100))
  longitude: string;

  @Column(DataType.STRING(100))
  gstNo: string;
  
  @Default(Effluent_Type.PICKLING)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Effluent_Type)
  })
  effluentType: string;
  
  @Column(DataType.FLOAT)
  effluentRate: number;

  @Column(DataType.STRING(100))
  monthlyEffluentGenerated: string;
  
  @Column(DataType.INTEGER)
  storageTank: number;

  @Column( DataType.DATEONLY)
  agreementStartDate: DateOnlyDataType;

  @Column(DataType.DATEONLY)
  agreementEndDate: DateOnlyDataType;

  @Default(Industry_Category.GREEN)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Industry_Category)
  })
  industryCategory: string

  @Default(Security_Deposit.PENDING)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Security_Deposit)
  })
  securityDeposit: string
  
  @Column(DataType.FLOAT)
  membershipFees: number;
  
  @Column(DataType.STRING(255))
  remarks: string;

  @Default(Membership_Status.ACTIVE)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Membership_Status)
  })
  Status: string;

  @Column(DataType.STRING)
  qrCode: string;

}
