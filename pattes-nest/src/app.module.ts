import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { AnimalsService } from './animals/animals.service';


@Module({
  imports: [AnimalsModule],
  controllers: [AppController],
  providers: [AppService, AnimalsService],
})
export class AppModule {}
