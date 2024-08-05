import { Table, Column, Model, DataType, AllowNull, Unique, Default } from 'sequelize-typescript';
import { Membership_Status } from '../../core/enum';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class Events extends Model<Events> {

  @AllowNull(false)
  @Column(DataType.STRING(100))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  description: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  eventDate: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  start_time: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  end_time: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  location: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  coverImage: string;

  // @AllowNull(false)
  // @Column(DataType.BIGINT())
  // userId: number;

}
