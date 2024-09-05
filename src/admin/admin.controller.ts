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
  UseGuards,
  Query
} from '@nestjs/common';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CreateUserDto } from '../users/dto/createuser.dto';
import { RoleType } from '../core/enum';
import { AuthService } from '../auth/auth.service';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../core/decorator/roles.decorator';

@ApiTags('admin')
@ApiBearerAuth()
@Roles(RoleType.ADMIN)
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService, private authService: AuthService) {}

  @Post()
  async create(@Body() AdminDto: CreateAdminDto) {
    try {
        const admin = await this.adminService.create(AdminDto);
        if(admin){
            let userlogin: CreateUserDto = {
                role:RoleType.ADMIN,
                name:AdminDto.name,
                email:AdminDto.email,
                password:AdminDto.name,
                contactNo:AdminDto.contactNo
            };
            await this.authService.create(userlogin);
        }
        return admin;
    }
    catch(err){
      throw new BadRequestException({ message: err.message, statusCode: HttpStatus.BAD_REQUEST });
    }
  }

  @Get()
  async findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.adminService.findOne(+id).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() AdminDto: UpdateAdminDto) {
      try {
        const [affectedCount, affectedRows]= await this.adminService.update(+id, AdminDto);
        return affectedRows;
      }
      catch(err){
          throw new ConflictException({ message: err.message, statusCode:HttpStatus.CONFLICT});
      }
  }
  
  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
        const admin = await this.adminService.findOne(+id);
        if (!admin) {
          throw new NotFoundException('Admin does not exist!');
        }

        return this.adminService.remove(+id);
    }
    catch(err){
        throw new NotFoundException({ message: err.message, statusCode:HttpStatus.NOT_FOUND});
    }
  }  

  // @Get('getAllServiceRequest?')
  // async findAllRequest(
  //     @Query('reqdate') reqdate?: Date, 
  //     @Query('company') company?: number,
  //     @Query('qty') qty?: number
  //   ) {
  //     const whereCond={
  //       requestedTime:reqdate,
  //       clientId:company,
  //       requestedQty: qty
  //     };
  //     return this.ServiceRequestService.findAllReq(whereCond);
  //   }
}
