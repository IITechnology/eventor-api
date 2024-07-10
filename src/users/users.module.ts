import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersProviders } from './users.providers';

@Module({
  providers: [UsersService, ...UsersProviders],
  exports: [UsersService],
})
export class UsersModule {}
