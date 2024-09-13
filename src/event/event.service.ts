import { Injectable,Inject } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EVENT_REPOSITORY } from '../core/constants';
import { Events } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @Inject(EVENT_REPOSITORY) private readonly eventRepository: typeof Events,
  ) {}

  async create(createEventDto: CreateEventDto) {
    return await this.eventRepository.create<Events>(createEventDto);
  }

  async findAll() {
    return this.eventRepository.findAndCountAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
  }

  async findOne(id: number) {
    return this.eventRepository.findOne({ 
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
     });
  }

  async update(id: number, updateLifterDto: UpdateEventDto) {
    return this.eventRepository.update({ ...updateLifterDto }, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.eventRepository.destroy({ where: { id } });
  }
}
