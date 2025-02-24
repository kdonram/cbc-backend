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

export function getProduct(req,res){
    Product.find().then((list)=>{
        res.json(list);
    })
}

export async function deleteProduct(req,res){
    const result = await Product.deleteOne({productId: req.body.productId});
    if (result.deletedCount === 1){
        res.json({
            message: "Product has been deleted."
        });
    } else {
        res.json({
            message: "There is no such product."
        })
    }
}

export async function whichProduct(id,quant){
    const result = await Product.findOne({productId: id});
    const newQuantity = reducingQ(result.quantity,quant)
    await Product.updateOne(
        { productId : id },
        { $set: { quantity : newQuantity } }
    )
    return result;
}
function reducingQ(rq,q){
    return Math.max(0, Number(rq) - Number(q));
}