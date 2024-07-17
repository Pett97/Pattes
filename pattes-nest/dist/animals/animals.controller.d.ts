import { AnimalsService } from './animals.service';
export declare class AnimalsController {
    private readonly animalsService;
    constructor(animalsService: AnimalsService);
    findAll(): import("./entities/animal.entity").Animal[];
    findOne(id: string): import("./entities/animal.entity").Animal;
    create(body: any): void;
    update(id: string, body: any): void;
    remove(id: string): void;
}
