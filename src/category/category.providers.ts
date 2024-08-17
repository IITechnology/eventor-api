import { Category } from './entities/category.entity';
import { CATEGORY_REPOSITORY } from '../core/constants';

export const CategoryProviders = [
  {
    provide: CATEGORY_REPOSITORY,
    useValue: Category,
  },
];
