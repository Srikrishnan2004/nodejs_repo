const express =require('express');
const app=express();
const path=require('path')
console.log(__dirname);
app.get('/', (req,res) => {
    res.send("User hit the server");
});

app.listen(5000,() => {
    console.log("User hit the server");
});