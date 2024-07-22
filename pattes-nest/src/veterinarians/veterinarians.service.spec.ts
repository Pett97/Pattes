import { Test, TestingModule } from '@nestjs/testing';
import { VeterinariansService } from './veterinarians.service';

describe('VeterinariansService', () => {
  let service: VeterinariansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeterinariansService],
    }).compile();

    service = module.get<VeterinariansService>(VeterinariansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
