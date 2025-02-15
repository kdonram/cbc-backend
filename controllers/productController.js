import { Product } from "../product.js";

export function getProduct(req,res){
    if (req.user == null){
        res.send("You are not logged in.");
        return;
    }
    
    if (req.user.type != "admin"){
        res.send("You are not an Admin");
        return;
    }

    const newProduct = new Product(req.body);
    newProduct.save().then(()=>{
        res.send("A new product has been created.")
    }).catch((error)=>{
        console.log(error);
    })
}

export function postProduct(req,res){
    let arr = [];
    Product.find({name: req.body.name}).then((productList)=>{
        productList.map((product)=>{
            arr.push(product.name);
        });
        res.send(arr);
    }).catch((error)=>{
        console.log(error);
    })
}

// export function getProductByName(req,res){
//     Product.find().then((productList)=>{
//         productList.forEach((product) => {
//             if (product.name == req.body.name){
//                 res.json(product);
//             }
//         });
//     })
// }

export function getProductByName(req,res){
    const name = req.params.name;
    Product.find({name : name}).then((productList)=>{
        if (!productList || productList.length == 0){
            res.send("Product is Not Found")
        }else{
            res.send(productList);
        }
    })
}


export function deleteProduct(req,res){
    const name = req.params.name;
    Product.deleteOne({name: name}).then(
        res.send(`The product with ${name} has been deleted.`)
    )
}