
const express = require("express");
const user = require("./MOCK_DATA.json");

const app = express();



app.get("/",function(req,res){
    res.send("hello web browser");
})

app.get("/user",function(req,res){
    res.send(user);
    
})


app.listen(2345,function(){
    console.log("port is running");
})