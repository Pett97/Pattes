import { Veterian } from './entities/veterian.entity';
export declare class VeterinariansService {
    private veteriansRepository;
    findAll(): Promise<Veterian[]>;
    findOne(idNumber: string): Promise<Veterian | undefined>;
    create(veterian: any): Promise<void>;
    update(id: string, update: Partial<Veterian>): Promise<void>;
    remove(id: string): Promise<void>;
}
