import { Controller, Get, Post, Body, Patch, Param, Delete, Request, ConflictException, NotFoundException, HttpStatus, UseGuards } from '@nestjs/common';
import { RosterService } from './roster.service';
import { CreateRosterDto } from './dto/create-roster.dto';
import { UpdateRosterDto } from './dto/update-roster.dto';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { RoleType } from '../core/enum';
import { Roles } from '../core/decorator/roles.decorator';
import { ServiceRequestService } from '../service-request/service-request.service';
@ApiTags('roster')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('roster')

export class RosterController {
  constructor(private readonly rosterService: RosterService, private readonly SRService: ServiceRequestService) {}

  @Roles(RoleType.ADMIN)
  @Post()
  async create(@Body() createRosterDto: CreateRosterDto) {
      const dataObj =[];
      const ids= createRosterDto.serviceRequestId;
      ids.forEach(id => {
        dataObj.push({...createRosterDto, serviceRequestId: id})  
      });

      try {
        const result= await this.rosterService.create(dataObj);
        if(result)
          this.SRService.updateSRStatus(ids, createRosterDto.Status,createRosterDto.lifterId);
        return result;
      }
      catch(err){
          throw new ConflictException({ message: err.message, statusCode:HttpStatus.CONFLICT});
      }
  }

  @Roles(RoleType.ADMIN,RoleType.LIFTER)
  @Get()
  async findAll(@Request() req) {
    let whereCond={};
    if(req.user.role===RoleType.LIFTER)
    {
      whereCond=req.user.clientId
    }
    else if(req.user.role===RoleType.ADMIN) {
      whereCond='';
    }
    return this.rosterService.findAll(whereCond);
  }

  @Roles(RoleType.ADMIN,RoleType.LIFTER)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.rosterService.findOne(+id).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }

  @Roles(RoleType.ADMIN)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRosterDto: UpdateRosterDto) {
      try {
        const [affectedCount, affectedRows]= await this.rosterService.update(+id, updateRosterDto);
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
        const admin = await this.rosterService.findOne(+id);
        if (!admin) {
          throw new NotFoundException('Roster does not exist!');
        }
        return this.rosterService.remove(+id);
    }
    catch(err){
        throw new NotFoundException({ message: err.message, statusCode:HttpStatus.NOT_FOUND});
    }
  }

}
