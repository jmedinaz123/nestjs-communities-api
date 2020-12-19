import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param , NotFoundException, Query} from '@nestjs/common';
import { CreateTituloDTO } from './dto/titulo.dto';
import {TituloService} from './titulo.service'

@Controller('titulo')

export class TituloController {

constructor(private tituloService : TituloService){}


@Post('/create')
async createPost(@Res() res, @Body() createTituloDTO: CreateTituloDTO){
 // console.log(createTituloDTO);
 
const titulo = await this.tituloService.CreateTitulo(createTituloDTO);

    return res.status(HttpStatus.OK).json({
    
        message: 'Titulo creado correctamente',
        titulo
    });
}

  @Get('/')
 async getTitulos(@Res() res){
  const titulos = await this.tituloService.getTitulos();
res.status(HttpStatus.OK).json({
titulos


})

  }



  @Get('/:tituloID')
async getTitulo(@Res() res, @Param('tituloID') tituloID) {
const titulo = await this.tituloService.getTitulo(tituloID);
if(!titulo) throw new NotFoundException('titulo no existe');
return res.status(HttpStatus.OK).json(titulo);
}


@Delete('/delete')
async deleteTitulo(@Res() res, @Query('tituloID') tituloID){
const tituloDeleted= await  this.tituloService.deleteTitulo(tituloID);
if(!tituloDeleted) throw new NotFoundException('titulo no existe');
return res.status(HttpStatus.OK).json({
    message:'titulo eliminado correctamente',
    tituloDeleted
});

}

}




