import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
  ConflictException,
  HttpStatus,
  NotFoundException
} from '@nestjs/common';
import { ServiceRequestService } from './service-request.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { RoleType } from '../core/enum';
import { Roles } from '../core/decorator/roles.decorator';
import { UpdateSRLifterDto } from '../service-request/dto/update-sr-by-lifter.dto';
import { RosterService } from '../roster/roster.service';

@ApiTags('service-request')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('service-request')
export class ServiceRequestController {
  constructor(private readonly serviceRequestService: ServiceRequestService,private readonly rosterService:RosterService) {}

  @Roles(RoleType.CLIENT)
  @Post()
  async create(@Body() createServiceRequestDto: CreateServiceRequestDto, @Request() req) {
      return this.serviceRequestService.create(createServiceRequestDto, req.user.clientId).catch(err => {
        throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
      });
  }

  @Roles(RoleType.CLIENT,RoleType.LIFTER,RoleType.ADMIN)
  @Get(':ids')
  async findOne(@Param('ids') ids: string[], @Request() req) {
      return this.serviceRequestService.findOne(ids).catch(err => {
        throw new NotFoundException({ message: err.message, statusCode: HttpStatus.NOT_FOUND });
      });
  } 

  @Roles(RoleType.CLIENT,RoleType.LIFTER,RoleType.ADMIN)
  @Get()
  async findAll(@Request() req) { 
      let whereCond={};
      if(req.user.role===RoleType.LIFTER)
      {
        whereCond={
          lifterId:req.user.clientId,
        };
      }
      else if(req.user.role===RoleType.CLIENT) {
        whereCond={
          clientId:req.user.clientId
        };
      }
      else{
        whereCond={};
      }
      return this.serviceRequestService.findAllReq(whereCond).catch(err => {
        throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
      });
  }

  @Roles(RoleType.ADMIN, RoleType.LIFTER)
  @Patch('srUpdate/:id')
  async updateServiceRequest(@Param('id') id: number, @Body() updateSRLifterDto: UpdateSRLifterDto) {
      try {
        const [affectedCount, affectedRows]= await this.serviceRequestService.update(+id, updateSRLifterDto);
        if(affectedRows)
        {
          this.rosterService.update(updateSRLifterDto.rosterId, {
            Status:updateSRLifterDto.Status
          });
        }
        return affectedRows;
      }
      catch(err){
          throw new ConflictException({ message: err.message, statusCode:HttpStatus.CONFLICT});
      }
  }

}
