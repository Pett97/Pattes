import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VeterinariansService } from './veterinarians.service';
import { Veterian } from './entities/veterian.entity';
import { CreateVeterianDto } from './dto/create-veterian.dto';
import { UpdateVeterianDto } from './dto/update-veterian.dto';
//Nome define o nome da rota pra consultar
@Controller('veterinarians')
export class VeterinariansController {
  constructor(private readonly veterinariansService: VeterinariansService) {}
  @Get()
  findAll(): Promise<Veterian[] | undefined> {
    return this.veterinariansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Veterian | undefined> {
    return this.veterinariansService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createVeterianDto: CreateVeterianDto): void {
    this.veterinariansService.create(createVeterianDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVeterianDto: UpdateVeterianDto,
  ) {
    return this.veterinariansService.update(id, updateVeterianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.veterinariansService.remove(id);
  }
}
