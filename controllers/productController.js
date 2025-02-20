import Product from "../Models/product.js";
import { isAdmin } from "./userController.js";  

export function createProduct(req,res){
    if (isAdmin(req)) {
        const newproduct = new Product(req.body);
        newproduct.save().then(()=>{
            res.json({
                message: "Product is created"
            });
        }).catch((e)=>{
            res.json({
                message: e
            })
        })
    }
}