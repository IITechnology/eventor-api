import { Injectable,Inject } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ADMIN_REPOSITORY } from '../core/constants';
import { Admin } from './entities/admin.entity';
@Injectable()
export class AdminService {
  constructor(
    @Inject(ADMIN_REPOSITORY) private readonly adminRepository: typeof Admin,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const [userdata ,status] = await this.adminRepository.findOrCreate<Admin>({
      where: { email: createAdminDto.email },
      defaults: createAdminDto,
    });
    return userdata;
  }

  async findAll() {
    return this.adminRepository.findAndCountAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
  }

  async findOne(id: number) {
    return this.adminRepository.findOne({ 
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
     });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.adminRepository.destroy({ where: { id } });
  }
}
