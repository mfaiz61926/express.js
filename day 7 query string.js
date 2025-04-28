//INDEX.JS
const express= require('express');
const app=express();
const phone=require('./data');

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/phone">phone</a>');
})

app.get('/api/phone',(req,res)=>{
    const newItem=phone.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image};

    })
    res.json(newItem);
})

app.get('/api/phone/:phoneID',(req,res)=>{
    const {phoneID}=req.params;
    console.log(req.params);
    const singleProduct=phone.find((product)=>product.id===Number(phoneID));

    if(!singleProduct){
        res.status(404).send('Product not found.....');
    }
    res.send(singleProduct);
})


app.get('/api/v1/query',(req,res)=>{
    let sortedPhone=[...phone];
    const {search,limit}=req.query;
    if(search){
        sortedPhone=sortedPhone.filter((product)=>{
            return product.name.toLowerCase().startsWith(search);
        })
    }
    res.json(sortedPhone );
})
app.listen(30001,()=>{
    console.log("started");
})

//DATA.JS IS SAME AS BEFORE
