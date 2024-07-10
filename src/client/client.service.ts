import { Injectable, Inject } from '@nestjs/common';
import { CreateClientDto } from './dto/createclient.dto';
import { UpdateClientDto } from './dto/updateclient.dto';
import { Client } from './entities/client.entity';
import { CLIENT_REPOSITORY } from '../core/constants';
@Injectable()
export class ClientService {
  constructor(
    @Inject(CLIENT_REPOSITORY) private readonly clientRepository: typeof Client,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const [userdata ,status] = await this.clientRepository.findOrCreate<Client>({
      where: { email: createClientDto.email },
      defaults: createClientDto,
    });
    return userdata;
  }

  async findAll() {
    return this.clientRepository.findAndCountAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
  }

  async findOne(id: number) {
    return this.clientRepository.findOne({ 
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
     });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(updateClientDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.clientRepository.destroy({ where: { id } });
  }
}
