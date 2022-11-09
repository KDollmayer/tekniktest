import express, {json} from "express";
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.js"
import setupMongoDb from "./config/common.js"


dotenv.config()

const app = express()
app.use(cors())
app.use(json())

const PORT = process.env.PORT
const mongoUrl = process.env.MONGODB_URL

app.use("/", router)

app.listen(PORT, async function () {
    try {
        await setupMongoDb(mongoUrl)
        console.log(mongoUrl)
        console.log("Database connected")
    } catch (error) {
        console.log("Could not connect to database")
    }
    console.log(`Listening to port ${PORT}`)
})
