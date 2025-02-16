import User from "../user.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export function createUser(req,res){
    const newUserData = req.body;
    newUserData.password = bcrypt.hashSync(newUserData.password, 10);
    const user = new User(newUserData);
    user.save().then(()=>{
        res.send("User has been created.")
    }).catch((error)=>{
        res.send(error);
    });
}

export function userLogin(req,res){
    User.findOne({email: req.body.email}).then((user)=>{
        if(!user){
            res.send("Your email is wrong");
        } else {
            const pass = bcrypt.compareSync(req.body.password, user.password);
            if(!pass){
                res.send("Your password is wrong");
            } else {
                const token = jwt.sign({
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    isBlocked: user.isBlocked,
                    type: user.type,
                    profilePicture: user.profilePicture

            }, process.env.SECRET);
            response.json({
                message: "User logged in",
                token: token
            })   
            }
        }
    });
}
