import { DataSource } from 'typeorm';
import { Veterian } from './entities/veterian.entity';

export const veterianProviders = [
  {
    provide: 'VETERIAN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Veterian),
    inject: ['DATA_SOURCE'],
  },
];
