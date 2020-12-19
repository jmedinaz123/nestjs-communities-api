import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TituloModule } from './titulo/titulo.module';
import{ MongooseModule } from '@nestjs/mongoose'


@Module({
  imports: [TituloModule, MongooseModule.forRoot('mongodb://localhost/community')],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
