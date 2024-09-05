const conn = require('./connection')

const getAll = async()=>{
    const [books] = await conn.execute('SELECT * FROM book');
    return books;
}

module.exports = {
    getAll
}