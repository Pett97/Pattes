
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { VeterinariansService } from './veterinarians.service';
//Nome define o nome da rota pra consultar 
@Controller('veterinarians')
export class VeterinariansController {
  constructor(private readonly veterinariansService:VeterinariansService) {
  }
  @Get()
  findAll() {
    return this.veterinariansService.findAll();
  }

  @Get(":id")
    findOne(@Param('id') id: string) {
        return this.veterinariansService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return this.veterinariansService.create(body);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body) {
        return this.veterinariansService.update(id, body);
    }

    @Delete(":id")
    remove(@Param('id') id: string) {
        return this.veterinariansService.remove(id);
    }


}
