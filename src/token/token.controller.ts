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
  Query,
} from "@nestjs/common";
import { JwtAuthGuard } from "../core/guards/jwt-auth.guard";
import { RolesGuard } from "../core/guards/roles.guard";
import { TokenService } from "./token.service";
import { CreateTokenDto } from "./dto/create-token.dto";
import { UpdateTokenDto } from "./dto/update-token.dto";
import { ApiTags, ApiBearerAuth, ApiParam } from "@nestjs/swagger";
import { AuthService } from "../auth/auth.service";
import { RoleType, TRANSACTION_MODE, TRANSACTION_STATUS, TRANSACTION_TYPE } from "../core/enum";
import { Roles } from "../core/decorator/roles.decorator";
import { JwtService } from "@nestjs/jwt";

@ApiTags("token")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("token")
export class TokenController {
  constructor(
    private readonly tokenService: TokenService,
    private jwtService: JwtService,
  ) {}

  @Roles(RoleType.ADMIN)
  @Post()
  async create(@Body() TokenDto: CreateTokenDto) {
    try {
      const token = await this.tokenService.create(TokenDto);
      return token;
    } catch (err) {
      throw new BadRequestException({
        message: err.message,
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }
  }

  @Roles(RoleType.ADMIN)
  @Get()
  async findAll() {
    return this.tokenService.findAll();
  }

  @Roles(RoleType.ADMIN)
  @Get(":transactionStatus?/:transactionMode?/:transactionType?")
  @ApiParam({ name: 'transactionStatus', type: String, description: "Status Optional", enum: TRANSACTION_STATUS, required: false })
  @ApiParam({ name: 'transactionMode', type: String, description: "Mode Optional", enum: TRANSACTION_MODE, required: false })
  @ApiParam({ name: 'transactionType', type: String, description: "Type Optional", enum: TRANSACTION_TYPE, required: false })
  async findOne(
      @Request() request,
      @Param('transactionStatus') transactionStatus?: TRANSACTION_STATUS,
      @Param('transactionMode') transactionMode?: TRANSACTION_MODE,
      @Param('transactionType') transactionType?: TRANSACTION_TYPE
    ) {
    const token = request.headers["authorization"];
    const userInfo: any = this.jwtService.decode(token.replace("Bearer ", "")) as string;
    const userId = userInfo.clientId;
    return this.tokenService.findWithFilter(+userId, transactionStatus, transactionMode, transactionType).catch((err) => {
      throw new ConflictException({
        message: err.message,
        statusCode: HttpStatus.CONFLICT,
      });
    })
  }

  // @Roles(RoleType.ADMIN)
  // @Patch(":id")
  // async update(
  //   @Param("id") id: number,
  //   @Body() tokenDto: UpdateTokenDto,
  // ) {
  //   try {
  //     const [affectedCount, affectedRows] = await this.tokenService.update(
  //       +id,
  //       tokenDto,
  //     );
  //     return affectedRows;
  //   } catch (err) {
  //     throw new ConflictException({
  //       message: err.message,
  //       statusCode: HttpStatus.CONFLICT,
  //     });
  //   }
  // }

  // @Roles(RoleType.ADMIN)
  // @Delete(":id")
  // async remove(@Param("id") id: number) {
  //   try {
  //     const token = await this.tokenService.findOne(+id);
  //     if (!token) {
  //       throw new NotFoundException("Token does not exist!");
  //     }

  //     return this.tokenService.remove(+id);
  //   } catch (err) {
  //     throw new NotFoundException({
  //       message: err.message,
  //       statusCode: HttpStatus.NOT_FOUND,
  //     });
  //   }
  // }
}
