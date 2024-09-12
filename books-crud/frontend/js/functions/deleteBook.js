import { displayBooks } from './displayBooks.js';
export const deleteBook = async(id)=>{
    await fetch(`http://localhost:3333/books/${id}`,{
        method:'delete',
    })

    await displayBooks();
}

