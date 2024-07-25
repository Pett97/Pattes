import { Module } from '@nestjs/common';
import { VeterinariansService } from './veterinarians.service';
import { VeterinariansController } from './veterinarians.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veterian } from './entities/veterian.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Veterian])],
  controllers: [VeterinariansController],
  providers: [VeterinariansService],
})
export class VeterinariansModule {}
