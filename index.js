import express from 'express';
import bodyParser from 'body-parser';  
import mongoose from 'mongoose';
import { userRouter } from './routes/userRouter.js';
import { productRouter } from './routes/productRouter.js'; 
import { orderRouter } from './routes/orderRouter.js';  
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const mongoUrl = process.env.MONGO_DB_URL;

mongoose.connect(mongoUrl,{});
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Database is connected.");
})

app.use(bodyParser.json());

app.use(
    (req,res,next) => {
        const token = req.header("Authorization")?.replace("Bearer ","");
        // console.log(token);

        (token != null) ? jwt.verify(token,process.env.SECRET, (error,decoded)=>{
            (!error) ? 
            req.user = decoded :
            console.log(error)
        }) :
        "";
        next();
    }
    
)

app.get('/',(req,res)=>{
    console.log("Hello World.");
    res.json({
        message: "Hello World"
    });
    console.log(req.body);
});

app.post('/',(req,res)=>{
    const newStudent = new Student(req.body);

    newStudent.save().then(()=>{
        console.log("New student is created.");
    }).catch((error)=>{
        console.log("error");
    });

});

app.listen(
    3000,()=>{
        console.log('Server is running on port 3000');
    }
);


app.use("/api/user", userRouter);

app.use("/api/product",productRouter);

app.use("/api/order", orderRouter);