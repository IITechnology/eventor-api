import { Lifter } from './entities/lifter.entity';
import { LIFTER_REPOSITORY } from '../core/constants';

export const LifterProviders = [
  {
    provide: LIFTER_REPOSITORY,
    useValue: Lifter,
  },
];
