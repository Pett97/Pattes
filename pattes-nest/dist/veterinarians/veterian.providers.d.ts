import { DataSource } from 'typeorm';
import { Veterian } from './entities/veterian.entity';
export declare const veterianProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Veterian>;
    inject: string[];
}[];
