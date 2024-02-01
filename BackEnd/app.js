const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.get('/api/users',(req,res)=>{
    res.send("hello");
});

app.get('/',(req,res)=>{
    res.send("hello");
});

app.listen(5500, ()=> console.log('Server is running on port 5500'));
