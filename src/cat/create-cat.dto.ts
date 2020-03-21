import { ObjectType,Field } from "type-graphql";


@ObjectType()
export class CreateCatDto {
    @Field()
    readonly name:String;
    @Field()
    readonly breed:String;
    @Field()
    readonly age:Number;

}



@ObjectType()
export class userOutput {
    @Field()
    readonly _id:String;
    @Field()
    readonly game:String;
    @Field()
    readonly author:String;
    @Field()
    readonly email:String;
    @Field()
    readonly password:String
   
}
 

@ObjectType()
export class deleteoutput{
    @Field()
    readonly _id:String;
}