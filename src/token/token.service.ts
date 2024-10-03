import { Injectable, Inject } from "@nestjs/common";
import { CreateTokenDto } from "./dto/create-token.dto";
import { UpdateTokenDto } from "./dto/update-token.dto";
import { TOKEN_REPOSITORY } from "../core/constants";
import { Token } from "./entities/token.entity";
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from "src/core/enum";
import { chain } from "lodash";

@Injectable()
export class TokenService {
  constructor(
    @Inject(TOKEN_REPOSITORY)
    private readonly tokenRepository: typeof Token,
  ) {}

  async create(createTokenDto: CreateTokenDto) {
    return await this.tokenRepository.create<Token>(createTokenDto);
  }

  async findAll() {
    return this.tokenRepository.findAndCountAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    });
  }

  async findWithFilter(userId: number, transactionStatus, transactionMode, transactionType) {
    const where: { userId: number, transactionStatus?: string, transactionMode?: string, transactionType?: string } = { userId };
    if (transactionStatus !== '{transactionStatus}') where.transactionStatus = transactionStatus;
    if (transactionMode !== '{transactionMode}') where.transactionMode = transactionMode;
    if (transactionType !== '{transactionType}') where.transactionType = transactionType;
    let res: any = await this.tokenRepository.findAndCountAll({
      where,
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt", "transactionDescription", "transactionAmount", "transactionId", "transactionDate", "transactionResponseCode", "transactionResponse", "transactionReference", "transactionReceipt", "transactionNotes", "transactionResponseMessage", "transactionResponseData", "transactionResponseStatus"] },
    });
    if (transactionStatus === TRANSACTION_STATUS.COMPLETED && transactionMode === '{transactionMode}' && transactionType === '{transactionType}') {
      const { rows } = res;
      const remainingToken = rows.reduce((acc, curr) => {
        const token = Number(curr.token);
        return curr.transactionType === TRANSACTION_TYPE.CREDIT ? acc + token : acc - token;
      }, 0);
      res = { ...res, remainingToken };
    } else if (transactionStatus === TRANSACTION_STATUS.COMPLETED && transactionMode === '{transactionMode}' && transactionType !== '{transactionType}') {
      const { rows } = res;
      const tokens = rows.reduce((acc, curr) => acc + Number(curr.token), 0);
      res = {
        ...res,
        [transactionType === TRANSACTION_TYPE.CREDIT ? 'buyToken' : 'consumeToken']: tokens,
      };
    }
    return res;
  }

  async findOne(userId: number) {
    return this.tokenRepository.findOne({
      where : { userId },
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    });

  }

  async update(id: number, updateTokenDto: UpdateTokenDto) {
    return this.tokenRepository.update(updateTokenDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.tokenRepository.destroy({ where: { id } });
  }
}
