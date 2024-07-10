import { Table, Column, Model, DataType, Default, AllowNull, Unique } from 'sequelize-typescript';
import { RoleType } from '../../core/enum';
@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class User extends Model<User> {
  @Column(DataType.BIGINT)
  clientId: number;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM,
    values: Object.values(RoleType)
  })
  role: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(100))
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING(50))
  contactNo: string;

  @Column(DataType.STRING(50))
  deviceType: string;

  @Column(DataType.STRING)
  notificationToken: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  isActive: boolean;
}
