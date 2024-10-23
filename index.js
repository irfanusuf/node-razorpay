const express = require("express")
const app = express()
const path = require("path")
const { createOrder } = require("./controllers/orderController")




app.use(express.json())



app.get("/payment" , (req,res)=>{res.sendFile(path.join(__dirname , "pages" , "index.html"))})


app.post("/payment-success" , (req,res)=>{res.sendFile(path.join(__dirname , "pages" , "success.html"))})



app.post("/create-order" , createOrder)




app.listen(4000 , ()=>{console.log("Server listening on port 4000")})