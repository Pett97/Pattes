import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Animal } from './entities/animal.entity';



@Injectable()
export class AnimalsService {
    private animals: Animal[] = [
        {
            id: 1,
            name: "Belchior",
            weight: 2.45,
            color: "Laranja Com Branco",
            observation: "Aparentemente Saudavel"
        },
        {
            id: 2,
            name: "Tommy",
            weight: 2.67,
            color: "Cinza Com Branco",
            observation: "Aparentemente Saudavel e gordo"
        }
    ];

    findAll(): Animal[] {
        return this.animals;
    }

    findOne(id: string): Animal {
        let animal = this.animals.find((animal: Animal) => animal.id === Number(id));
        if (!animal) {
            throw new HttpException(`Animal With ID:${id} not found`, HttpStatus.NOT_FOUND);
        } else {
            return animal;
        }
    }

    create(createAnimalDto: any): void {
        this.animals.push(createAnimalDto);
    }

    update(id: string, updateAnimalDto: any): void {
        let animal = this.animals.findIndex((animal: Animal) => animal.id === Number(id));

        if (!animal) {
            throw new HttpException(`Animal With ID:${id} not found`, HttpStatus.NOT_FOUND);
        } {
            this.animals[animal] = updateAnimalDto;
        }


    }

    remove(id: string): void {
        let animal = this.animals.findIndex((animal: Animal) => animal.id === Number(id));

        this.animals.splice(animal);
    }

}
