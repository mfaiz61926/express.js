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