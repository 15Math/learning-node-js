
import { editSubmit } from './editBook.js'; 
import { addBook } from './addBook.js';

const bookForm = document.getElementById('bookForm');

const handleFormSubmit =async(event) => {
    event.preventDefault();
    const bookId = localStorage.getItem('bookId');
    // Verifica se o ID do livro está no localStorage para decidir se é edição ou adição
    if (bookId){
        await editSubmit(event,bookId);
        localStorage.removeItem('bookId');
    } else {
        await addBook(event);
    }
};


bookForm.addEventListener('submit', handleFormSubmit);
