import { VeterinariansService } from './veterinarians.service';
import { Veterian } from './entities/veterian.entity';
import { CreateVeterianDto } from './dto/create-veterian.dto';
import { UpdateVeterianDto } from './dto/update-veterian.dto';
export declare class VeterinariansController {
    private readonly veterinariansService;
    constructor(veterinariansService: VeterinariansService);
    findAll(): Promise<Veterian[] | undefined>;
    findOne(id: string): Promise<Veterian | undefined>;
    create(createVeterianDto: CreateVeterianDto): void;
    update(id: string, updateVeterianDto: UpdateVeterianDto): Promise<void>;
    remove(id: string): Promise<void>;
}
