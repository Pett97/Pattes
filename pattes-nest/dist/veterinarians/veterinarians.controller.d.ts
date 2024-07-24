import { VeterinariansService } from './veterinarians.service';
import { Veterian } from './entities/veterian.entity';
import { CreateVeterianDto } from './dto/create-veterian.dto';
import { UpdateVeterianDto } from './dto/update-veterian.dto';
export declare class VeterinariansController {
    private readonly veterinariansService;
    constructor(veterinariansService: VeterinariansService);
    findAll(): Veterian[];
    findOne(id: string): Veterian;
    create(createVeterianDto: CreateVeterianDto): void;
    update(id: string, updateVeterianDto: UpdateVeterianDto): void;
    remove(id: string): void;
}
