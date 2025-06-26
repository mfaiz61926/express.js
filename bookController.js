const express = require('express');
const app = express();
app.use(express.json());

//in memory book collection
let books = [
    {id: 1, title: 'Book1', author: 'Author1'},
    {id: 2, title: 'Book2', author: 'Author2'}
];

const getBooks= (req,res) =>{
    res.json(books);
}

const createBook=(req,res)=>{
    console.log(req.body);
    const newBook=req.body;
    newBook.id=books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
}

const updateBook=(req,res)=>{
    const id=parseInt(req.params.id);
    const updateBook = req.body;
    const index = books.findIndex(book=>book.id==id);

    if(index !==-1){
        books[index]={...books[index],...updateBook};
        res.json(books[index]);
    }
    else{
        res.status(404).json({error:'Book not updated'});
    }
}

const deleteBook=(req,res)=>{
    const id=parseInt(req.params.id);
    const index = books.findIndex(book=>book.id==id);

    if(index!=-1){
        const deletedBook = books[index];
        books.splice(index,1);
        res.json(deletedBook);
    }
    else{
        res.status(404).json({error:'no found for deleting'});
    }
}





module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
}