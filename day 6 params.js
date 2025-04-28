// INDEX.JS
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
app.listen(30001,()=>{
    console.log("started");
})


//DATA.JS 
const phone = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      image: "https://example.com/images/iphone15pro.jpg",
      price: 999
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      image: "https://example.com/images/galaxys24ultra.jpg",
      price: 1199
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      image: "https://example.com/images/pixel8pro.jpg",
      price: 899
    },
    {
      id: 4,
      name: "OnePlus 12",
      image: "https://example.com/images/oneplus12.jpg",
      price: 799
    },
    {
      id: 5,
      name: "Xiaomi 14 Pro",
      image: "https://example.com/images/xiaomi14pro.jpg",
      price: 749
    }
  ];

  module.exports=phone;
  
