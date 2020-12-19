import { Module } from '@nestjs/common';
import { TituloController } from './titulo.controller';
import { TituloService } from './titulo.service';
import {MongooseModule} from '@nestjs/mongoose'
import {TituloSchema} from './schemas/titulo.schema'


@Module({
  imports: [MongooseModule.forFeature([
{name: 'Titulo' , schema : TituloSchema}

  ])
],
  controllers: [TituloController],
  providers: [TituloService]
})
export class TituloModule {}
