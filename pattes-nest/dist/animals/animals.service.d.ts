import { Animal } from './entities/animal.entity';
export declare class AnimalsService {
    private animals;
    findAll(): Animal[];
    findOne(id: string): Animal;
    create(createAnimalDto: any): void;
    update(id: string, updateAnimalDto: any): void;
    remove(id: string): void;
}
