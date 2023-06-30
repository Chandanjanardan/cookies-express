const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cookieParser())

app.get("/",(req,res)=>{
    // disable from client side document.cookie
    // to make cookie run only on https secure :true
    // expire maxAge:milisec
    // cookie dis- cross site request forgery
    res.cookie("sky","blue",{httpOnly:true })
    // console.log(req.cookies)
    res.send("Hello cokies")
})

app.listen(4000,(req,res)=>{
    console.log(`App listing at port 4000...`)
})