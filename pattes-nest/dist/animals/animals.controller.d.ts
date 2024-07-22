import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
export declare class AnimalsController {
    private readonly animalsService;
    constructor(animalsService: AnimalsService);
    findAll(): import("./entities/animal.entity").Animal[];
    findOne(id: string): import("./entities/animal.entity").Animal;
    create(createAnimalDto: CreateAnimalDto): void;
    update(id: string, updateAnimalDto: UpdateAnimalDto): void;
    remove(id: string): void;
}
