import { Injectable, Inject } from '@nestjs/common';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/createuser.dto';
import { USER_REPOSITORY } from '../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const [userdata ,status] = await this.userRepository.findOrCreate<User>({
      where: { email: user.email },
      defaults: user,
    });
    return userdata;
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne<User>({ 
      where: { email, isActive:true },
      attributes: { exclude: ['isActive','createdAt', 'updatedAt', 'deletedAt'] } 
    });
  }

  async findOneById(id: number): Promise<User> {
    return this.userRepository.findOne<User>({ 
      where: { id, isActive:true },
      attributes: { exclude: ['isActive','createdAt', 'updatedAt', 'deletedAt'] } 
    });
  }

  async update(id: number, clientId: number) {
    return this.userRepository.update({clientId:clientId}, 
    {
      where: { id },
      returning: true,
    });
  }

  
  async setPassword(email: string, newPassword: string) { 
    return this.userRepository.update({ password: newPassword}, 
      {
        where: { email },
        returning: true,
      });
  }

  async setFCM(userid: number, useremail:string, token: string) { 
    return this.userRepository.update({ notificationToken: token}, 
      {
        where: { email:useremail,id:userid },
        returning: true,
      });
  }
}
