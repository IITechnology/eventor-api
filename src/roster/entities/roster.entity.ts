import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    AllowNull,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';

import { Lifter } from '../../lifter/entities/lifter.entity';
import { ServiceRequest } from '../../service-request/entities/service-request.entity';
import { SR_Status } from '../../core/enum';
  @Table({
    paranoid: true,
    timestamps: true,
    underscored: true,
  })
  export class Roster extends Model<Roster> {

    @AllowNull(false)
    @Column(DataType.STRING)
    serviceRequestId:string;
      
    @AllowNull(false)
    @ForeignKey(() => Lifter)
    @Column(DataType.INTEGER)
    lifterId: number;
  
    @BelongsTo(() => Lifter)
    lifter: Lifter;

    @AllowNull(false)
    @Column(DataType.DATE)
    assignedTime: Date;
    
    @AllowNull(false)
    @Column(DataType.STRING(50))
    location: string;

    @AllowNull(false)
    @Column(DataType.STRING(50))
    vehicleNo: string;

    @Default(SR_Status.PENDING)
    @Column({
      type: DataType.ENUM,
      values: Object.values(SR_Status)
    })
    Status: string;
    
  }
  