import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { ServiceRequestService } from '../service-request/service-request.service';
import { ServiceRequestProviders } from '../service-request/service-request.providers';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService,ServiceRequestService,...ServiceRequestProviders],
})
export class InvoiceModule {}
