import { Module } from '@nestjs/common';
import { VeterinariansService } from './veterinarians.service';
import { VeterinariansController } from './veterinarians.controller';

@Module({
  controllers: [VeterinariansController],
  providers: [VeterinariansService],
})
export class VeterinariansModule {}
