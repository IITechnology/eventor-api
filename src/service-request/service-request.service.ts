import { Injectable, Inject } from '@nestjs/common';
import { SR_REPOSITORY } from '../core/constants';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ServiceRequest } from './entities/service-request.entity';
import { Client } from '../client/entities/client.entity';
import { Lifter } from '../lifter/entities/lifter.entity';
import { Roster } from '../roster/entities/roster.entity';
import { UpdateSRLifterDto } from './dto/update-sr-by-lifter.dto';
import { Op } from 'sequelize';
@Injectable()
export class ServiceRequestService {
  constructor(
    @Inject(SR_REPOSITORY) private readonly srRepository: typeof ServiceRequest,
  ) {}

  async create(createServiceRequestDto: CreateServiceRequestDto, clientId) {
    const [user,status] = await this.srRepository.findOrCreate<ServiceRequest>({
      where: {clientId, requestedTime : createServiceRequestDto.requestedTime, Type: createServiceRequestDto.Type },
      defaults: {...createServiceRequestDto, clientId},
    });
    return user;
  }

  async findAllReq(whereCond) {
    return this.srRepository.findAndCountAll({ where: whereCond,
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt']},
      include: [{
        model: Client,
        attributes: { exclude: ['gstNo','effluentType','effluentRate','storageTank','monthlyEffluentGenerated','agreementStartDate','agreementEndDate','industryCategory','securityDeposit','membershipStatus','qrCode','createdAt','updatedAt','deletedAt'] }
      },
      {
        model: Lifter,
        required:false,
        attributes: { exclude: ['createdAt','updatedAt','deletedAt'] }
      },
      {
        model: Roster,
        required:false,
        attributes: { exclude: ['createdAt','updatedAt','deletedAt'] }
      }], 
    });
  }


  async findOne(ids: string[]) {
    return this.srRepository.findAll({ where: { id: { [Op.in]: ids }, },
      attributes: { exclude: ['isActive', 'createdAt', 'updatedAt', 'deletedAt'] },
      include: [{
          model: Client,
          attributes: { exclude: ['gstNo','effluentType','effluentRate','storageTank','monthlyEffluentGenerated','agreementStartDate','agreementEndDate','industryCategory','securityDeposit','membershipStatus','qrCode','createdAt','updatedAt','deletedAt'] }
      },
      {
        model: Lifter,
        required:false,
        attributes: { exclude: ['createdAt','updatedAt','deletedAt'] }
      },
      {
        model: Roster,
        required:false,
        attributes: { exclude: ['createdAt','updatedAt','deletedAt'] }
      }], 
    });
  }

  async update(id: number, updateSRlifterDto: UpdateSRLifterDto) {
    return this.srRepository.update(updateSRlifterDto, {
      where: { id },
      returning: true,
    });
  } 

  async updateSRStatus(ids: string[], status: string,lifterId:number) {
    return this.srRepository.update({Status:status,lifterId:lifterId}, {
      where : { id : ids },
      returning: true,
    });
  } 
}
