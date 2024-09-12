import { deleteBook } from './deleteBook.js';
import { editBook } from './editBook.js';
import { fetchBooks } from './fetchBooks.js';


export const displayBooks = async()=>{
    const books = await fetchBooks();
    const main = document.querySelector('main');

    main.innerHTML = '<div class="text-center"><a href="./formBook.html" class="btn btn-lg btn-primary my-3 ">Adicionar livro</a></div>';

    books.slice().reverse().forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard', 'd-flex', 'mx-auto', 'w-50', 'p-3', 'rounded', 'mb-3');

        bookCard.innerHTML = `
            
            <img src="${book.cover || 'https://via.placeholder.com/150'}" alt="Capa do Livro" class="img-fluid me-3" style="max-width: 150px;">
            <div class="pl-3">
                <h3>${book.title}</h3>
                <div class="info">
                    <p><strong>Autor(a):</strong> ${book.autor_name}</p>
                    <p><strong>Data de Publicação:</strong> ${book.created_at}</p>
                    <p><strong>Páginas:</strong> ${book.number_pages}</p>
                </div>
                <div class="d-flex mt-4">
                    <button class=" btn btn-outline-primary p-1 mr-3 d-flex align-items-center justify-content-center" id="edit-${book.id}">
                        <span class="material-symbols-outlined">edit</span>
                    </button>
                    <button class="btn btn-outline-primary p-1 d-flex align-items-center justify-content-center" id="delete-${book.id}">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
        `;
        main.appendChild(bookCard);
        const editBtn = document.getElementById(`edit-${book.id}`);
        const deleteBtn = document.getElementById(`delete-${book.id}`);

        editBtn.addEventListener('click', () => editBook(book.id));
        deleteBtn.addEventListener('click', () => deleteBook(book.id));

        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayBooks();
});
