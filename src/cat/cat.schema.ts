import * as mongoose from 'mongoose';
  
const Schema=mongoose.Schema;

export  const CatSchema = new Schema({
  name: String,
  age: Number,
  breed: String
});



export  const userSchema = new Schema({
   game:String,
   author:String,
   email:String,
   password:String,
   comments:[]
});