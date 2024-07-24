import { HttpCode, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { Veterian } from './entities/veterian.entity';
@Injectable()
export class VeterinariansService {

    private veterians: Veterian[] = [
        {
            id: 1,
            name: "Barbara",
            phone: "42_988853488",
            CFMV: "12312412"

        }
    ]

    findAll(): Veterian[] {
        return this.veterians;
    }

    findOne(id: string): Veterian {
        let veterian = this.veterians.find((veterian: Veterian) => veterian.id === Number(id));

        if (!veterian) {
            throw new HttpException(`Veterian with ID:${id} not found`, HttpStatus.NOT_FOUND);
        } else {
            return veterian
        }
    }

    create(veterian: any): void {
        this.veterians.push(veterian);
    }

    private findIndexVeterian(id: string): number {
        let index = this.veterians.findIndex((veterian: Veterian) => veterian.id === Number(id));

        return index;
    }

    update(id: string, updateVeterianDto: any): void {
        let index = this.findIndexVeterian(id);
        if (!index) {
            throw new HttpException(`Veterian with ID:${id} not found`, HttpStatus.NOT_FOUND)
        } else {
            this.veterians[index] = updateVeterianDto;
        }
    }

    remove(id: string): void {
        let index = this.findIndexVeterian(id);

        this.veterians.splice(index);
    }
}