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
  UseGuards,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { EventsService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiTags,ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { RoleType } from '../core/enum';
import { Roles } from '../core/decorator/roles.decorator';
import { EventsInterceptor } from 'src/core/interceptors/FileInterceptor';
import { FileInterceptor } from '@nestjs/platform-express';


@ApiTags('events')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService, private authService: AuthService) {}

  @Roles(RoleType.ADMIN)
  @Post()
  async create(@Body() EventDto: CreateEventDto) {
    try {
        const event = await this.eventService.create(EventDto);
        // if(event){
        //     let eventData: CreateEventDto = {
        //         // role:RoleType.ADMIN,
        //         title:EventDto.title,
        //         description:EventDto.description,
        //         eventDate:EventDto.eventDate,
        //         start_time:EventDto.start_time,
        //         end_time:EventDto.end_time,
        //         location:EventDto.location,
        //         coverImage:EventDto.coverImage,
        //         userId:EventDto.userId,
        //     };
        //     await this.eventService.create(eventData);
        // }
        return event;
    }
    catch(err){
      throw new BadRequestException({ message: err.message, statusCode: HttpStatus.BAD_REQUEST });
    }
  }

  @Roles(RoleType.ADMIN)
  @Get()
  async findAll() {
    return this.eventService.findAll();
  }

  @Roles(RoleType.ADMIN)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.eventService.findOne(+id).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }

  @Roles(RoleType.ADMIN)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() EventDto: UpdateEventDto) {
      try {
        const [affectedCount, affectedRows]= await this.eventService.update(+id, EventDto);
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
        const event = await this.eventService.findOne(+id);
        if (!event) {
          throw new NotFoundException('Event does not exist!');
        }

        return this.eventService.remove(+id);
    }
    catch(err){
        throw new NotFoundException({ message: err.message, statusCode:HttpStatus.NOT_FOUND});
    }
  }

  @Post('coverImage/:id')
  @ApiConsumes('multipart/form-data')
  @ApiBody(EventsInterceptor.body)
  @UseInterceptors(FileInterceptor('file',{storage:EventsInterceptor.storage}))
  async coverImage(@Param('id') id: number,@UploadedFile() file: Express.Multer.File) {
    return {
      url: `/events/${file.filename}`,
      msg :'File uploaded successfully!'
    };
  }
}
