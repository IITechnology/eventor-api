import { Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('create-campaign')
  async createEmailCampaign() {
    return this.emailService.createEmailCampaign();
  }
}
