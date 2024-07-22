import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { AnimalsService } from './animals/animals.service';
import { VeterinariansModule } from './veterinarians/veterinarians.module';
import { VeterinariansService } from './veterinarians/veterinarians.service';



@Module({
  imports: [AnimalsModule, VeterinariansModule],
  controllers: [AppController,],
  providers: [AppService, AnimalsService, VeterinariansService],
})
export class AppModule { }
