import express, {Router} from "express";
import productRoute from "./products.js"

const router = express.Router()

router.get("/hello", (req, res) => {
    res.send("Hello World")
})

router.use("/products", productRoute)


export default router