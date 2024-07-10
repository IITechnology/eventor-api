import { Admin } from './entities/admin.entity';
import { ADMIN_REPOSITORY } from '../core/constants';

export const AdminProviders = [
  {
    provide: ADMIN_REPOSITORY,
    useValue: Admin,
  },
];
