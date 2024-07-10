import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  ConflictException,
  BadRequestException,
  UseGuards
} from '@nestjs/common';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/createclient.dto';
import { UpdateClientDto } from './dto/updateclient.dto';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { RoleType } from '../core/enum';
import { Roles } from '../core/decorator/roles.decorator';
import { CreateUserDto } from '../users/dto/createuser.dto';

@ApiTags('client')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService, private authService: AuthService) {}

  @Roles(RoleType.ADMIN)
  @Post()
  async create(@Body() ClientDto: CreateClientDto) {
    try {
        const client = await this.clientService.create(ClientDto);
        if(client){
            let userlogin: CreateUserDto = {
                clientId:client.id,
                role:RoleType.CLIENT,
                name:ClientDto.name,
                email:ClientDto.email,
                password:ClientDto.name,
                contactNo:ClientDto.contactNo
            };
          await this.authService.create(userlogin);
        }
        return client;
    }
    catch(err){
      throw new BadRequestException({ message: err.message, statusCode: HttpStatus.BAD_REQUEST });
    }
  }

  @Roles(RoleType.ADMIN)
  @Get()
  async findAll() {
    return this.clientService.findAll();
  }

  @Roles(RoleType.ADMIN, RoleType.CLIENT)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }

  @Roles(RoleType.ADMIN, RoleType.CLIENT)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() ClientDto: UpdateClientDto) {
      try {
        const [affectedCount, affectedRows]= await this.clientService.update(+id, ClientDto);
        return affectedRows;
      }
      catch(err){
          throw new ConflictException({ message: err.message, statusCode:HttpStatus.CONFLICT});
      }
  }
  
  @Roles(RoleType.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
        const user = await this.clientService.findOne(+id);
        if (!user) {
          throw new NotFoundException('Client does not exist!');
        }

        return this.clientService.remove(+id);
    }
    catch(err){
        throw new NotFoundException({ message: err.message, statusCode:HttpStatus.NOT_FOUND});
    }
  }
}
