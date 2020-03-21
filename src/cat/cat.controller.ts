import { Controller, Get,Post,Body} from '@nestjs/common';
import { CatsService } from './cat.service';


@Controller('user')
export class  CatsController{
  constructor(private readonly Service: CatsService) {}

 
 
}
