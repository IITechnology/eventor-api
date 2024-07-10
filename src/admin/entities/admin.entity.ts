import { Table, Column, Model, DataType, AllowNull, Unique, Default } from 'sequelize-typescript';
import { Membership_Status } from '../../core/enum';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class Admin extends Model<Admin> {

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

  @Default(Membership_Status.ACTIVE)
  @Column({
    type: DataType.ENUM,
    values: Object.values(Membership_Status)
  })
  Status: string;

}
