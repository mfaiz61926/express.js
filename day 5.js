//index.js
const express=require('express');
const app=express();
const path=require('path');

app.get('/',(req,res)=>{
    res.send('<h1>Hello is World!</h1>');
})
app.get('/contact',(req,res)=>{
    res.send('<h1>contact</h1>');
})
app.get('/files',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/josnres',(req,res)=>{
    res.json([{
        firstname:'john',
        lastname:'cena'
    },
    {
        firstname:'pika',
        lastname:'chu'
    }])
})
app.use((req, res) => {
    res.status(404).send('Not Found');
});



app.listen(3000,()=>{
    console.log("Server is running");
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
  
