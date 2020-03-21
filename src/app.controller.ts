import { Controller, Get,Post,Body} from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cat/cat.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService,private readonly Service: CatsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hey')
  heyfriend(): string {
    return this.appService.heyfriend();
  }

  @Post('add')
   add( 
     @Body('name') name:string,
     @Body('breed') breed:string,
     @Body('age') age:Number,) {
     this.appService.create(name,breed,age);
      
     }
 
}
