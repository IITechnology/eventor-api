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
  Query,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { RolesGuard } from '../core/guards/roles.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CreateUserDto } from '../users/dto/createuser.dto';
import { RoleType } from '../core/enum';
import { AuthService } from '../auth/auth.service';
import { ApiTags,ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { Roles } from '../core/decorator/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileExtender } from 'src/core/interceptors/FileInterceptor';
import { FileUploadDto } from 'src/file/dto/file-upload.dto';
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
  //     return whereCond;
  //   }
  @Post('UploadProfile')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'string' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileExtender)
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
        destination: './public/profile',
        filename: (req, file, cb) => {
            const fileName: string = `${req.body.userId}-${Date.now()}-${file.originalname}`;
            cb(null, fileName)
        }
    })
    }))
  async uploadProfile(@Body() body: FileUploadDto, @UploadedFile() file: Express.Multer.File) {
    return {
      file: file,
      msg :'File uploaded successfully!'
    };
  }
}
