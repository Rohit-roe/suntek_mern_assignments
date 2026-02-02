import exp from 'express';
import { connect } from 'mongoose';
import { userApp } from './APIs/userAPI.js';
import { productApp } from './APIs/productAPI.js';
const app=exp();
const port=4000;
app.use(exp.json())

async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/E-commerce');
        console.log("DB is connected");
        app.listen(port,()=>console.log("Server is connected to port ",port))
    }
    catch(err){
        console.log("error connecting to DB",err);
    }
}
connectDB()
app.use('/user-api',userApp)
app.use('/product-api',productApp)
// Error handling middleware
app.use((err,req,res,next)=>{
    res.status(404).json({message:"Error occurred",reason:err})
})