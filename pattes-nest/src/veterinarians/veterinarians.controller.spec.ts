import { Test, TestingModule } from '@nestjs/testing';
import { VeterinariansController } from './veterinarians.controller';
import { VeterinariansService } from './veterinarians.service';

describe('VeterinariansController', () => {
  let controller: VeterinariansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeterinariansController],
      providers: [VeterinariansService],
    }).compile();

    controller = module.get<VeterinariansController>(VeterinariansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
