import { Injectable } from '@nestjs/common';
import * as SibApiV3Sdk from 'sib-api-v3-sdk';
import {EmailVerification} from './Template/EmailVerification'
@Injectable()
export class EmailService {
  private apiInstance: SibApiV3Sdk.EmailCampaignsApi;
  private sendSmtpEmail: SibApiV3Sdk.SendSmtpEmail;
  // private emailBody: SibApiV3Sdk.GetSmtpTemplate;

  constructor() {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY; // Ensure you have this in your .env file

    this.apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    this.sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
   
  }

  async createEmailCampaign(): Promise<any> {
    // this.emailBody = await this.apiInstance.getSmtpTemplate(1);
    this.sendSmtpEmail.subject = "My {{params.subject}}";
    const {htmlContent} = await this.apiInstance.getSmtpTemplate(3);
    this.sendSmtpEmail.htmlContent = htmlContent;
    this.sendSmtpEmail.sender = { "name": "Eventor", "email": "bitu95776@gmail.com" };
    this.sendSmtpEmail.to = [
      { "email": "ratholmohit95@gmail.com", "name": "Rathor Mohit" },
      { "email": "ramkumar20064@gmail.com", "name": "Ram Kumar" },
    ];
    this.sendSmtpEmail.replyTo = { "email": "bitu95776@gmail.com", "name": "Eventor" };
    // this.sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
    // this.sendSmtpEmail.params = {"VERIFICATION":{ "FIRST_NAME": "CodeShapers", "LAST_NAME": "Team","verificationCode": "123456", "subject": "Welcome to Eventor Verification" },
    //                             "CONTACT":{ "FIRST_NAME": "CodeShapers", "LAST_NAME": "Team","verificationCode": "123456", "subject": "Welcome to Eventor Verification" }};
    // this.sendSmtpEmail.attachmentUrl = "https://bantech-800966e3a23c.herokuapp.com/invoice/Invoice_1.pdf";
    this.sendSmtpEmail.attachmentUrl = "./public/invoice/Invoice_1.pdf";
    // Make the call to the client
    try {
      const data = await this.apiInstance.sendTransacEmail(this.sendSmtpEmail);
      //console.log('API called successfully. Returned data: ' + JSON.stringify(data));
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to send email');
    }
  }
}
