const mongoose =require('mongoose')
mongoose.connect("mongodb://localhost:27017/weather").then((res)=>{
console.log("mongoose is connected")
}).catch((err)=>{
    console.log(err)
})