const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('example'))

app.listen(3002,()=>{
    console.log("Server is running on 3002");
})