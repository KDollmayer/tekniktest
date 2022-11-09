import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    weight: {type: String, required: true},
    
})

const product = mongoose.model("products", productSchema)

export const loadProducts = async () => {
    const products = await product.find({}).exec()
    return  products
   
}

export const addProduct = async (productItem) => {
   await product.create(productItem)
}