import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Veterian } from './entities/veterian.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VeterinariansService {
  @InjectRepository(Veterian)
  private veteriansRepository: Repository<Veterian>;

  async findAll(): Promise<Veterian[]> {
    return this.veteriansRepository.find();
  }

  async findOne(idNumber: string): Promise<Veterian | undefined> {
    const id = Number(idNumber);
    const veterian = await this.veteriansRepository.findOneBy({ id });

    if (!veterian) {
      throw new HttpException(
        `Veterian with ID:${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      return veterian;
    }
  }

  async create(veterian: any) {
    await this.veteriansRepository.save(veterian);
  }

  async update(id: string, update: Partial<Veterian>) {
    await this.veteriansRepository.update(Number(id), update);
  }

  async remove(id: string) {
    await this.veteriansRepository.delete(Number(id));
  }
}
