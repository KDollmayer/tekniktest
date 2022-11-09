import { addProduct, loadProducts } from "../models/Products.js"


export const getProducts = async (req, res) => {
    try {
    
        res.json(await loadProducts())
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const createProduct = async (req, res) => {
    const productItem = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        weight: req.body.weight,
    }
    try {
        await addProduct(productItem)

        
    } catch (error) {
        console.error("error", error)
        res.status(400).json({error: "Bad Request"})
    }
    res.json("Product Created")
}