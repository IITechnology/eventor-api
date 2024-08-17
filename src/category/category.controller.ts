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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { RoleType } from '../core/enum';
import { Roles } from '../core/decorator/roles.decorator';
import { CreateUserDto } from '../users/dto/createuser.dto';


@ApiTags('category')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard,RolesGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService, private authService: AuthService) {}

  @Roles(RoleType.ADMIN)
  @Post()
  async create(@Body() CategoryDto: CreateCategoryDto) {
    try {
        const category = await this.categoryService.create(CategoryDto);
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
        return category;
    }
    catch(err){
      throw new BadRequestException({ message: err.message, statusCode: HttpStatus.BAD_REQUEST });
    }
  }

  @Roles(RoleType.ADMIN)
  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @Roles(RoleType.ADMIN)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.categoryService.findOne(+id).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }

  @Roles(RoleType.ADMIN)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() CategoryDto: UpdateCategoryDto) {
      try {
        const [affectedCount, affectedRows]= await this.categoryService.update(+id, CategoryDto);
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
        const category = await this.categoryService.findOne(+id);
        if (!category) {
          throw new NotFoundException('Category does not exist!');
        }

        return this.categoryService.remove(+id);
    }
    catch(err){
        throw new NotFoundException({ message: err.message, statusCode:HttpStatus.NOT_FOUND});
    }
  }

}
