import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { CatSchema, userSchema } from './cat.schema';
import { GraphQLModule } from '@nestjs/graphql';
import { CatResolver } from './cat.resolver';
import { AppService } from 'src/app.service';
 

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema },{name:'user', schema:userSchema }]),GraphQLModule.forRoot({
    autoSchemaFile: true
  
  }),],
  controllers: [CatsController],
  providers: [CatsService,CatResolver,AppService],
})
export class CatsModule {}