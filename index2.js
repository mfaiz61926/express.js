//  MANUAL METHOD FOR LOGGERS.....
const express = require('express');
const app=express();

const logger=(req,res,next)=> {
    console.log(`${new Date()} , Request[${req.method}], [${req.url}]`);
    next();
}
app.use(logger);
// app.use('/about',logger); //to send at particular link

// app.use([logger1,logger2])  for using multiple loggers

app.get('/',(req,res)=>{
    res.send('Home');
})
app.get('/about',(req,res)=>{
    res.send('about');
})

app.listen(3000,()=>{
    console.log("started");
})