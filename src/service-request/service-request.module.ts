import { Module } from '@nestjs/common';
import { ServiceRequestService } from './service-request.service';
import { ServiceRequestController } from './service-request.controller';
import { ServiceRequestProviders } from './service-request.providers';
import { RosterService } from '../roster/roster.service';
import { RosterProviders } from '../roster/roster.providers';

@Module({
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService, ...ServiceRequestProviders,RosterService,...RosterProviders],
  exports: [ServiceRequestService]
})
export class ServiceRequestModule {}
