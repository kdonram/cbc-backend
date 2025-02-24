import Order from '../Models/order.js';
import { isCustomer } from './userController.js';
import { whichProduct } from './productController.js';

export async function createOrder(req,res){

    if (isCustomer(req)) {
        res.json({
            message: "Please login to create an order."
        })
        return;
    }

    // Take the latest productId
    try{
        const latestOrder = await Order.find().sort({date: -1}).limit(1);
         
        let orderId;

        if(latestOrder.length == 0){
            orderId = "CBC0001";
        } else {
            const currentOrderId = latestOrder[0].orderId;
            let number = currentOrderId.replace("CBC","");
            number = (parseInt(number, 10) + 1).toString().padStart(4, "0");

            orderId = "CBC" + number;
        }

        const newOrderData = req.body;

        const orderArray = newOrderData.orderedItem;
        const len = orderArray.length;
        
        
        for (let i = 0; i < len; i++){
            let ar = orderArray[i]
            const result = await whichProduct(ar.id,ar.quantity);
            if (!result) {
                return res.status(400).json({ message: "Invalid product selection." });
            }

            delete ar.id;
            ar.name = result.productName
            ar.price = result.price
            ar.image = result.images[0]

        }
        
        newOrderData.orderId = orderId;
        newOrderData.email = req.user.email;

        const order = new Order(newOrderData);

        await order.save();

        res.json({
            message: "Order Created."
        })
        

    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export function getOrders(req,res){
    Order.find().then((orderList)=>{
        res.json(orderList);
    }).catch((e)=>{
        res.json({
            message: e
        })
    })
}

