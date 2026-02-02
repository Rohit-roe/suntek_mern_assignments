import { Schema,model } from "mongoose";

// create cart Schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"   //name of product model
    }
})
// creating a user schema
let userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is a required field"],
        minLength:[3,"Minimum length is 4 characters"],
        maxLength:[10,"the maximum length is 10 character"]
    },
    email:{
        type:String,
        required:[true,"A email must be given"],
        unique:true  //add to index
    },
    password:{
        type:String,
        required:[true,"A password must be given"]
    },
    cart:{//this is a nested document
        type:[cartSchema]  //
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
});

//  create user model using that schema

export const UserModel=model("user",userSchema)