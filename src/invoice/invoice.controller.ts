import { Controller, Post, Body, Res, Get,Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InvoiceService } from './invoice.service';
import { ServiceRequestService } from '../service-request/service-request.service';

@ApiTags('invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService, private readonly ServiceReq:ServiceRequestService) {}

  @Get('generate/:id')
  async generateInvoice(@Param('id') id: string){
    const arrid= id.split('');
    const serviceRequest= await this.ServiceReq.findOne(arrid);
    if(serviceRequest)
    {
      const filePath = await this.invoiceService.generateInvoice(serviceRequest[0]);
      return {"filename":`${filePath}`};
    }
    else{
      return {"error":"Record not Found"};
  }
}

}