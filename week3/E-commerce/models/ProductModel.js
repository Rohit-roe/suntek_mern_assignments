import { Schema,model} from 'mongoose'
//creating a new product schema

let productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"A name must be given"],
        minLength:[3,"min length is 3"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[1,"min price is 1"]
    },
    brand:{
        type:String,
        required:[true,"brandname is a must"]
    }
},{
    strict:"throw",  //throw an erroe when it occurs
    timestamps:true,
    versionKey:false //the version key will be removed
});

export const ProductModel = model("product", productSchema);