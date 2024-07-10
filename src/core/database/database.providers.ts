import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../users/entities/user.entity';
import { Client } from '../../client/entities/client.entity';
import { ServiceRequest } from '../../service-request/entities/service-request.entity';
import { Lifter } from '../../lifter/entities/lifter.entity';
import { Admin } from '../../admin/entities/admin.entity';
import { Roster } from '../../roster/entities/roster.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Client, ServiceRequest, Lifter, Admin, Roster]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
