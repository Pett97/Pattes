import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('animals')
export class AnimalsController {

    @Get("list")
    findAll(){
        return "Animais";
    }

    @Get(":id")
    findOne(@Param('id')id:string){
        return `Animal ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body){
        return body;
    }

    @Patch(":id")
    update(@Param("id")id:string, @Body()body){
        return `Atualizado Animal ${id}`;
    }

    @Delete(":id")
    remove(@Param('id')id:string){
        return `Deletado no compsoer Animal ${id}`;
    }
}
