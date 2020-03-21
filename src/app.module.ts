import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {MongooseModule, InjectModel} from '@nestjs/mongoose';
import { CatsService } from './cat/cat.service';

import { CatsModule } from './cat/cat.module';
import { CatsController } from './cat/cat.controller';
import { Injectable } from '@nestjs/common';
import { CatSchema, userSchema} from "./cat/cat.schema"
import { GraphQLModule } from '@nestjs/graphql';
import { Model} from 'mongoose';

@Module({
  imports: [

  MongooseModule.forRoot(
    'mongodb://127.0.0.1:27017/nestjs-intro', {useNewUrlParser: true}
  ),
  MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema },{name:'user', schema:userSchema }]),
  CatsModule
  ],
  controllers: [AppController,CatsController],
  providers: [AppService,CatsService]
})
export class AppModule {
  constructor(){
  }
  

}
