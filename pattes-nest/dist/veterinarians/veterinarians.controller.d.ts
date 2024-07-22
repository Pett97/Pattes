import { VeterinariansService } from './veterinarians.service';
export declare class VeterinariansController {
    private readonly veterinariansService;
    constructor(veterinariansService: VeterinariansService);
    findAll(): import("./entities/veterian.entity").Veterian[];
    findOne(id: string): import("./entities/veterian.entity").Veterian;
    create(body: any): void;
    update(id: string, body: any): void;
    remove(id: string): void;
}
