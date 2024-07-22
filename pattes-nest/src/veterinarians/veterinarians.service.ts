import { Injectable } from '@nestjs/common';
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
        return this.veterians.find((Veterian: Veterian) => Veterian.id === Number(id));
    }

    create(veterianDto: any): void {
        this.veterians.push(veterianDto);
    }

    private findIndexVeterian(id: string): number {
        let index = this.veterians.findIndex((veterian: Veterian) => veterian.id === Number(id));

        return index;
    }

    update(id: string, updateVeterianDto): void {
        let index = this.findIndexVeterian(id);

        this.veterians[index] = updateVeterianDto;
    }

    remove(id: string): void {
        let index = this.findIndexVeterian(id);

        this.veterians.splice(index);
    }
}