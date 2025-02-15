import express from 'express';
import { getProduct,getProductByName,postProduct, deleteProduct} from '../controllers/productController.js';

export const productRouter = express.Router();

productRouter.get('/',getProduct);

productRouter.post('/',postProduct);

productRouter.get('/filter',(req,res)=>{
    res.send("Product is filtered");
});

productRouter.get('/:name', getProductByName);

productRouter.delete('/:name',deleteProduct);



