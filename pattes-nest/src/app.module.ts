import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { VeterinariansModule } from './veterinarians/veterinarians.module';




@Module({
  imports: [AnimalsModule, VeterinariansModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
