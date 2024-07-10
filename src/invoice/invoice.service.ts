import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class InvoiceService {

  async removeFilesFromFolder(folderPath: string) {
    try {
      // Read the directory contents
      const files = await fs.promises.readdir(folderPath);
      // Loop through each file and remove it
      for (const file of files) {
        const filePath = path.join(folderPath, file);
        await fs.promises.unlink(filePath);
      }
    } catch (error) {
      console.error(`Error while removing files: ${error.message}`);
    }
  }

  async generateInvoice(data: any): Promise<string> {
    const doc = new PDFDocument();
    const fileName = `Invoice_${data.id}.pdf`;
    const filePath = `./public/invoice/${fileName}`;

    //await this.removeFilesFromFolder(`./public/invoice/`);
    //fs.rmdirSync('./public/invoice');
    //fs.mkdirSync('./public/invoice');
    // // Ensure the directory exists
    if (!fs.existsSync('./public/invoice')) {
      fs.mkdirSync('./public/invoice');
    }

    // Pipe the PDF into a writable stream
    doc.pipe(fs.createWriteStream(filePath));

    // Add content to the PDF
    doc.fontSize(12).text(`Company Name: ${data.client?.name}`, { align: 'center' });
    doc.text(`Company Address: ${data.client?.address}`, { align: 'center' });
    doc.text(`Company District, Company State: ${data.client?.district}, ${data.client?.state}`, { align: 'center' });
    doc.text(`Contact Number: ${data.client?.contactNo}`, { align: 'center' });
    doc.text(`Email: ${data.client?.email}`, { align: 'center' });

    doc.moveDown();
    doc.fontSize(16).text('Waste Pickup Invoice', { align: 'center' });
    doc.fontSize(12).text(`Date of Issue: ${new Date().toLocaleDateString()}`, { align: 'center' });

    doc.moveDown();
    doc.text(`Request ID: ${data.id}`);
    doc.text(`Requested Time: ${data.requestedTime}`);
    doc.text(`Requested Quantity: ${data.requestedQty}`);
    doc.text(`Type of Waste: ${data.Type}`);

    doc.moveDown();
    doc.text(`Pickup Time: ${data.pickupTime}`);
    doc.text(`Pickup Quantity: ${data.pickupQty}`);
    doc.text(`Lifter Feedback: ${data.lifterFeedback}`);

    doc.moveDown();
    doc.text(`Lifter Name: ${data.lifter?.name}`);
    doc.text(`Lifter Contact: ${data.lifter?.contactNo}`);
    doc.text(`Lifter Vehicle: ${data.lifter?.vehicleNo}`);

    doc.moveDown();
    doc.text('Thank you for your cooperation!', { align: 'center' });
    doc.text('Any additional notes or terms', { align: 'center' });

    // Finalize the PDF and end the stream
    doc.end();

    return fileName;
  }
}