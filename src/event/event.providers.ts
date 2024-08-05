import { Events } from './entities/event.entity';
import { EVENT_REPOSITORY } from '../core/constants';

export const EventProviders = [
  {
    provide: EVENT_REPOSITORY,
    useValue: Events,
  },
];
