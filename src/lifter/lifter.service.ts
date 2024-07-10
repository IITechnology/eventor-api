import { Injectable,Inject } from '@nestjs/common';
import { CreateLifterDto } from './dto/create-lifter.dto';
import { UpdateLifterDto } from './dto/update-lifter.dto';
import { LIFTER_REPOSITORY } from '../core/constants';
import { Lifter } from './entities/lifter.entity';

@Injectable()
export class LifterService {
  constructor(
    @Inject(LIFTER_REPOSITORY) private readonly lifterRepository: typeof Lifter,
  ) {}

  async create(createLifterDto: CreateLifterDto) {
    const [userdata ,status] = await this.lifterRepository.findOrCreate<Lifter>({
      where: { email: createLifterDto.email },
      defaults: createLifterDto,
    });
    return userdata;
  }

  async findAll() {
    return this.lifterRepository.findAndCountAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
  }

  async findOne(id: number) {
    return this.lifterRepository.findOne({ 
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
     });
  }

  async update(id: number, updateLifterDto: UpdateLifterDto) {
    return this.lifterRepository.update(updateLifterDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.lifterRepository.destroy({ where: { id } });
  }
}
