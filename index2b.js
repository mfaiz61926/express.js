//using MORGAN FOR LOGGER   AND FOR LOCKING ROUTS.....
const express=require('express');
const morgan = require('morgan');
const app=express();
const logger = require('morgan');

app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.send('Home')
})
app.get('/about',(req,res) => {
    res.send('About');
})

app.listen(3000,()=>{
    console.log('listening...')
})