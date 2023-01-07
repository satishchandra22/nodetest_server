const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute  = require("./routes/auth");

app.use(cors());
mongoose.connect("mongodb+srv://satish:1234@cluster0.dkbt3qx.mongodb.net/shop?retryWrites=true&w=majority").then(
    ()=>console.log('Database Connected')
).catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.get("/api/test",()=>{
    console.log('test sucessful');
})
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.listen(process.env.PORT || 5000, ()=>{
    console.log('server started')
})