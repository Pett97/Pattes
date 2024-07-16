import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';

@Module({
  controllers: [AnimalsController]
})
export class AnimalsModule {}
