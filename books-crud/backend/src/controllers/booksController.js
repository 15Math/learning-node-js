const booksModel = require('../models/booksModel')
const getAll = async (_req,res)=>{
    const books = await booksModel.getAll();
    return res.status(200).json({books})
};

const createBook = async(req,res)=>{
    const newBook = await booksModel.createBook(req.body);
    return res.status(200).json(newBook)
}

const deleteBook = async(req,res)=>{
    const {id} = req.params;
    await booksModel.deleteBook(id);
    return res.status(200).json({message:"The book has been deleted"});
}
const updateBook = async(req,res)=>{
    const {id} = req.params;
    await booksModel.updateBook(id,req.body)
    return res.status(200).json({message:"The book has been updated"});
}


module.exports = {
    getAll,
    createBook,
    deleteBook,
    updateBook
}