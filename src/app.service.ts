import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

import {shortid} from "shortid";

@Injectable()
export class AppService {

  constructor(@InjectModel('Cat') private catModel,@InjectModel('user') private userModel){

  }

  create(name:String,breed: String,age:Number) {
    const newcat=new this.catModel({
        userId:shortid.generate(),
        name:name,
        age:age,
        breed:breed
    })
   return newcat.save()
}


user(game:String,author: String,email:String,password:String) {
  const newuser=new this.userModel({
      game:game,
      author:author,
      email:email,
      password:password
  })
 return newuser.save();
}


 delete(_id:String){
  
    this.userModel.deleteOne({_id:_id});
    return this.userModel.deleteOne({_id:_id},(err,result)=>{
  
    })
 }


 update(data) {
   let options=data;
   console.log(options)
    return this.userModel.update({_id:data._id},options).exec((err,result)=>{
      if(err) {
        console.log(err)
      }
      else {
        console.log(result);
      }
    })
 }

  getdata() {
   return this.catModel.find();
  }
  
  getuser() {
    return this.userModel.find();
   }

  getHello(): string {
    return 'Hello World!';
  }
  heyfriend():string {
    return 'i am ashok'
  }

  
}
