import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { AnimalsService } from './animals.service';


//Nome define o nome da rota pra consultar
@Controller('animals')
export class AnimalsController {

    constructor(private readonly animalsService: AnimalsService) {

    }

    @Get()
    findAll() {
        return this.animalsService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return this.animalsService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return this.animalsService.create(body);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body) {
        return this.animalsService.update(id, body);
    }

    @Delete(":id")
    remove(@Param('id') id: string) {
        return this.animalsService.remove(id);
    }
}
