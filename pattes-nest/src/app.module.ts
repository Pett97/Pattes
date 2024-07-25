import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { VeterinariansModule } from './veterinarians/veterinarians.module';
import { Veterian } from './veterinarians/entities/veterian.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '172.18.0.2',
      port: 3306,
      username: 'root',
      password: 'P@ndor@',
      database: 'pattes',
      entities: [Veterian],
      synchronize: true,
    }),
    AnimalsModule,
    VeterinariansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
