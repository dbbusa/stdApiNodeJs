const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:3000/emp",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(3000,()=>{
            console.log("Server Started on 3000 !!");
        });
    }
);