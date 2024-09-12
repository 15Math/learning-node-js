import { fetchBooks } from './fetchBooks.js';

const inputTitle = document.getElementById('title');
const inputAutorName = document.getElementById('autor_name');
const inputCreatedAt = document.getElementById('created_at');
const inputNumberPages = document.getElementById('number_pages');
const inputCover = document.getElementById('cover');



export const editBook = async (id) => {
    const books = await fetchBooks();
    const editedBook = books.find((book) => book.id === id);

    localStorage.setItem('editedBook', JSON.stringify(editedBook));
    localStorage.setItem('bookId',id);
    window.location.href = 'formBook.html';
}

export const editSubmit = async(event, id)=>{
    event.preventDefault();
    const book = {title: inputTitle.value,
                  autor_name: inputAutorName.value,
                  created_at: inputCreatedAt.value,
                  number_pages: inputNumberPages.value,
                  cover:inputCover.value};

    await fetch(`http://localhost:3333/books/${id}`, {
        method:'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    })

    window.location.href = 'index.html';
}


const fillFormWithBookData = (editedBook) => {

    if (editedBook) {
        // Preenche os campos do formulário com os dados do livro
        inputTitle.value = editedBook.title;
        inputAutorName.value = editedBook.autor_name;
        inputCreatedAt.value = editedBook.created_at;
        inputNumberPages.value = editedBook.number_pages;
        inputCover.value = editedBook.cover;

        localStorage.removeItem('editedBook');
       
    }
}

window.addEventListener('DOMContentLoaded', () => {
    
    const bookId = localStorage.getItem('bookId');

    if (bookId) {
        const editedBook = JSON.parse(localStorage.getItem('editedBook'));
        fillFormWithBookData(editedBook);
    }
});