import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateCatDto, userOutput, deleteoutput } from "./create-cat.dto";
import { CatInput, userInput, deleteinput, updateInput } from "./ca.input";
import { AppService } from "src/app.service";
import { resolveAny } from "dns";
import { Info } from "type-graphql";



@Resolver()
export class CatResolver {
  constructor(
  //  private readonly authorsService: AuthorsService,
   // private readonly postsService: PostsService,
   private readonly appService: AppService
  ) {}



  @Mutation(() => userOutput )
  async adds(@Args('hol') input:userInput) {
     console.log(input)
     return this.appService.user(input.game,input.author,input.email,input.password)
  }
  @Mutation(() => CreateCatDto )
  async adds2(@Args('input') input:CatInput) {
      console.log(input)
    return input;
  }

  @Query(returns => String)
  ashok(){
     let datas='ashok'
    return datas;
  }

  @Query(returns => [CreateCatDto])
  ashok2(){
    console.log(this.appService.getdata())
    return this.appService.getdata()
  }

  @Mutation(() => userOutput )
  async adduser(@Args('data') data:userInput) {
     return this.appService.user(data.game,data.author,data.email,data.password)
  }

  @Mutation(() => String)
  async edituser(@Args('data') data:updateInput) {
      this.appService.update(data)
      return "hi"
  }

  @Query(() => [userOutput] )
  async getuser() {
     return this.appService.getuser();
  }
  @Mutation(() => String )
  async deleteuser(@Args('data') data:deleteinput) {
     this.appService.delete(data._id);
     return 'hi';
  }

}

