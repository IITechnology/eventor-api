import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { ServiceRequestModule } from './service-request/service-request.module';
import { LifterModule } from './lifter/lifter.module';
import { AdminModule } from './admin/admin.module';
import { RosterModule } from './roster/roster.module';
import { NotificationModule } from './notification/notification.module';
import { PdfModule } from './pdf/pdf.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    ClientModule,
    ServiceRequestModule,
    AdminModule,
    LifterModule,
    RosterModule,
    NotificationModule,
    PdfModule,
    InvoiceModule,
    EmailModule
  ],
  controllers: [],
})
export class AppModule {}
