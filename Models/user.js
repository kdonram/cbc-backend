import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: "customer"
    },
    profilePicture: {
        type: String,
        default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
    }
})

const User = mongoose.model("User",userSchema)

export default User;

// {
//     "email": "johndoe@example.com",
//     "firstName": "John",
//     "lastName": "Doe",
//     "password": "SecurePassword123!",
//     "isBlocked": false,
//     "type": "admin",
//     "profilePicture": "https://example.com/profile.jpg"
// }
// johndoe45@example.com