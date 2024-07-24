import { Veterian } from './entities/veterian.entity';
export declare class VeterinariansService {
    private veterians;
    findAll(): Veterian[];
    findOne(id: string): Veterian;
    create(veterian: any): void;
    private findIndexVeterian;
    update(id: string, updateVeterianDto: any): void;
    remove(id: string): void;
}
