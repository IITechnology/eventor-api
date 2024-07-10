import { Injectable,Inject } from '@nestjs/common';
import { CreateRosterDto } from './dto/create-roster.dto';
import { UpdateRosterDto } from './dto/update-roster.dto';
import { Roster } from './entities/roster.entity';
import { QueryTypes } from 'sequelize';
import { ROSTER_RESPOSITORY } from '../core/constants';
import { Lifter } from '../lifter/entities/lifter.entity';

@Injectable()
export class RosterService {
  constructor(@Inject(ROSTER_RESPOSITORY) private readonly srRespository: typeof Roster){}

  async create(createRosterDto) {
    return await this.srRespository.bulkCreate(createRosterDto);
  }
 
  // async findAll(whereCond) {
  //   return this.srRespository.findAndCountAll({where: whereCond,
  //     attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt']},
  //     include: [{
  //       model: Lifter,
  //       required:false,
  //       attributes: { exclude: ['createdAt','updatedAt','deletedAt'] }
  //     }], 
  //   });
  // }

  async findAll(id) {
    let sql = 'SELECT R.id, R.service_request_id as serviceRequestId, (SELECT GROUP_CONCAT(sr.status) as serviceStatus FROM service_requests sr where FIND_IN_SET(sr.id, R.service_request_id) > 0) as serviceRequestStatus, R.assigned_time as assignedTime,R.location as location, R.vehicle_no as vehicleNo, R.lifter_id as lifterId, L.name as lifterName,L.email as lifterEmail, L.contact_no as lifterContact, L.address as lifterAddress, L.vehicle_no as lifterVehicleNo, L.status as lifterStatus FROM `rosters` as R, `lifters` as L where R.lifter_id = L.id'

    if (id) {
      sql += `and R.lifterId=${id};`
    }

    return this.srRespository.sequelize.query(sql,
      {
        type: QueryTypes.SELECT,
      });
  }

  async findOne(id: number) {
    return this.srRespository.findOne({ where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt']},
      include: [{
        model: Lifter,
        required:false,
        attributes: { exclude: ['createdAt','updatedAt','deletedAt'] }
      }], 
    });
  }

  async update(id: number, updateRosterDto: UpdateRosterDto) {
    return this.srRespository.update(updateRosterDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.srRespository.destroy({ where: { id } });
  }
}
