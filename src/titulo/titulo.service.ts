import { Injectable } from '@nestjs/common';
import {Model } from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'

import{Titulo} from './interfaces/titulo.interface'
import {CreateTituloDTO} from './dto/titulo.dto'
import { runInThisContext } from 'vm';


@Injectable()
export class TituloService {

constructor(@InjectModel('Titulo') private readonly tituloModel: Model<Titulo>  ){}

   async getTitulos(): Promise<Titulo[]>{
   const titulos = await this.tituloModel.find();
    return titulos;


    }

async getTitulo(tituloID: string): Promise<Titulo>{

const titulo = this.tituloModel.findById(tituloID);
return titulo;
    }


  async  CreateTitulo(CreateTituloDTO: CreateTituloDTO): Promise<Titulo>{
      const titulo = new this.tituloModel(CreateTituloDTO);
      return await titulo.save();
   
    }

   async deleteTitulo(tituloID: string): Promise<Titulo>{
   const deleteTitulo = await this.tituloModel.findByIdAndDelete(tituloID);
   return deleteTitulo;


 }

   
async updateTitulo(tituloID: string, createTituloDTO: CreateTituloDTO): Promise<Titulo> {
const updatedTitulo =  await this.tituloModel.findByIdAndUpdate(tituloID, createTituloDTO, {new: true}) ;
return updatedTitulo;


}




}
