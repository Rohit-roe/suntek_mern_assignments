import exp from 'express';
import { ProductModel } from '../models/ProductModel.js';

// mini express
export const productApp=exp.Router();

productApp.post('/products',async(req,res)=>{
    // get product from request
    let productObj=req.body
    // create product doc
    let newProductDoc=new ProductModel(productObj)
    // save
    await newProductDoc.save()
    // res
    res.status(200).json({message:"product added"})
})

productApp.get('/products',async(req,res)=>{
    
})