import { Module } from '@nestjs/common';
import { RosterService } from './roster.service';
import { RosterController } from './roster.controller';
import { RosterProviders } from './roster.providers';
import { ServiceRequestService } from '../service-request/service-request.service';
import { ServiceRequestProviders } from '../service-request/service-request.providers';

@Module({
  controllers: [RosterController],
  providers: [RosterService, ...RosterProviders, ServiceRequestService,...ServiceRequestProviders],
  exports: [RosterService]
})
export class RosterModule {}
