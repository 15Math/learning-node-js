const conn = require('./connection')

const getAll = async()=>{
    const [books] = await conn.execute('SELECT * FROM book');
    return books;
}
const createBook = async(book)=>{
    const {title, autor_name, created_at, number_pages} = book;
    const query = 'INSERT INTO book(title, autor_name, created_at, number_pages) VALUES (?,?,?,?)'
    const [newBook] = await conn.execute(query, [title, autor_name, created_at, number_pages])
    return {insertId: newBook.insertId};
}

const deleteBook = async(id)=>{
    const query = 'DELETE FROM book WHERE id = ?'
    const [removedBook] = await conn.execute(query,[id])
    return removedBook;
}

const updateBook = async(id, newData)=>{
    const {title, autor_name, created_at, number_pages} = newData;
    const query = 'UPDATE book SET title = ?, autor_name = ?, created_at = ?, number_pages = ? WHERE id = ? '
    const [updatedBook] = await conn.execute(query,[title, autor_name, created_at, number_pages, id ])
    return updatedBook;
}


module.exports = {
    getAll,
    createBook,
    deleteBook,
    updateBook
}