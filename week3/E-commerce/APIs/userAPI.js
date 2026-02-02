import exp from 'express';
import { UserModel } from '../models/UserModel.js';
import {hash} from 'bcryptjs';

// mini express
export const userApp=exp.Router();

// create user
userApp.post('/users',async(req,res)=>{
    let newUser=req.body
    // create a new Document
    let newUserDocument=new UserModel(newUser)

    let hashedPassword=await hash(newUser.password,12)
    newUserDocument.password=hashedPassword
    let usersList=newUserDocument.save()

    res.status(200).json({message:"user added",usersList})
})