import { InputType,Field } from "type-graphql";


@InputType()
export class CatInput {
    @Field()
    readonly name:String;
    @Field()
    readonly breed:String;
    @Field()
    readonly age:Number;

}

@InputType()
export class userInput {
    @Field()
    readonly game:String;
    @Field()
    readonly author:String;
    @Field()
    readonly email:String;
    @Field()
    readonly password:String
 
}


@InputType()
export class updateInput {
    @Field()
    readonly game?:String;
    @Field()
    readonly author:String;
    @Field()
    readonly email:String;
    @Field()
    readonly password:String
    @Field()
    readonly _id:String
}


@InputType()
export class deleteinput{
    @Field()
    readonly _id:String;
}