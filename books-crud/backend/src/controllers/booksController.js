const booksModel = require('../models/booksModel')
const getAll = async (req,res)=>{

    const books = await booksModel.getAll();

    return res.status(200).json({books})

};

module.exports = {
    getAll
}