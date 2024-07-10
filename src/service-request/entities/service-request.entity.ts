import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';

import { Client } from '../../client/entities/client.entity';
import { SampleCollectorType,SR_Status } from '../../core/enum';
import { Lifter } from '../../lifter/entities/lifter.entity';
import { Roster } from '../../roster/entities/roster.entity';

@Table({
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class ServiceRequest extends Model<ServiceRequest> {

  
  @ForeignKey(() => Client)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  clientId: number;

  @BelongsTo(() => Client)
  client: Client;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  requestedTime: Date;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  requestedQty: number;
  
  @Default(SampleCollectorType.FLUID)
  @AllowNull(false)
  @Column({
    type: DataType.ENUM,
    values: Object.values(SampleCollectorType)
  })
  Type: string;

  @ForeignKey(() => Lifter)
  @Column(DataType.INTEGER)
  lifterId: number;

  @BelongsTo(() => Lifter)
  lifter: Lifter;

  @ForeignKey(() => Roster)
  @Column(DataType.INTEGER)
  rosterId: number;

  @BelongsTo(() => Roster)
  roster: Roster;

  @Default(false)
  @Column(DataType.BOOLEAN)
  sendReport: boolean;
  
  @Column(DataType.DATE)
  pickupTime: Date;

  @Column(DataType.INTEGER)
  pickupQty: number;
  
  @Column(DataType.STRING)
  lifterFeedback: string;
  
  @Default(SR_Status.PENDING)
  @Column({
    type: DataType.ENUM,
    values: Object.values(SR_Status)
  })
  Status: string;
}