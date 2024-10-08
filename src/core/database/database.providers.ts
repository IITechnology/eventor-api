import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../users/entities/user.entity';
import { Admin } from '../../admin/entities/admin.entity';
import { Events } from 'src/event/entities/event.entity';
import { Category } from 'src/category/entities/category.entity';
import { Token } from 'src/token/entities/token.entity';

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
      sequelize.addModels([User, Admin, Events, Category, Token]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
