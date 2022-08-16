const express=require("express")
const path=require("path")
const app=express()
require('dotenv').config()
const port=process.env.PORT||3000;
app.use(express.static(path.join(__dirname,'..', 'public')))
app.listen(port,()=>{
console.log("server is listening")
})
