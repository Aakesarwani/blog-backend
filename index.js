import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import blog from "./routes/blog.js"

dotenv.config();
const port =process.env.PORT;

const app=express();

//middleware
app.use(express.json());

//mounting
app.use("/api/v1",blog);

app.listen(port,()=>{
    console.log(`App running successfully on port ${port}`)
});
connectDb();