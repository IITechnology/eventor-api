import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  HttpStatus,
  NotFoundException,
  ConflictException,
  BadRequestException,
  UseGuards
} from '@nestjs/common';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { LifterService } from './lifter.service';
import { CreateLifterDto } from './dto/create-lifter.dto';
import { UpdateLifterDto } from './dto/update-lifter.dto';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { RoleType } from '../core/enum';
import { Roles } from '../core/decorator/roles.decorator';
import { CreateUserDto } from '../users/dto/createuser.dto';


@ApiTags('lifter')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('lifter')
export class LifterController {
  constructor(private readonly lifterService: LifterService, private authService: AuthService) {}

  @Roles(RoleType.ADMIN)
  @Post()
  async create(@Body() LifterDto: CreateLifterDto) {
    try {
        const lifter = await this.lifterService.create(LifterDto);
        if(lifter){
            let userlogin: CreateUserDto = {
                role:RoleType.LIFTER,
                name:LifterDto.name,
                email:LifterDto.email,
                password:LifterDto.name,
                contactNo:LifterDto.contactNo
            };
            await this.authService.create(userlogin);
        }
        return lifter;
    }
    catch(err){
      throw new BadRequestException({ message: err.message, statusCode: HttpStatus.BAD_REQUEST });
    }
  }

  @Roles(RoleType.ADMIN)
  @Get()
  async findAll() {
    return this.lifterService.findAll();
  }

  @Roles(RoleType.ADMIN, RoleType.LIFTER)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.lifterService.findOne(+id).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }

  @Roles(RoleType.ADMIN, RoleType.LIFTER)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() LifterDto: UpdateLifterDto) {
      try {
        const [affectedCount, affectedRows]= await this.lifterService.update(+id, LifterDto);
        return affectedRows;
      }
      catch(err){
          throw new ConflictException({ message: err.message, statusCode:HttpStatus.CONFLICT});
      }
  }
  
  @Roles(RoleType.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
        const lifter = await this.lifterService.findOne(+id);
        if (!lifter) {
          throw new NotFoundException('Lifter does not exist!');
        }

        return this.lifterService.remove(+id);
    }
    catch(err){
        throw new NotFoundException({ message: err.message, statusCode:HttpStatus.NOT_FOUND});
    }
  }

}
