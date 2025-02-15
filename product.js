import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number
});

export const Product = mongoose.model("Product", ProductSchema)