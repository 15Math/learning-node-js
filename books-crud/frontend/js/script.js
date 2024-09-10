document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
});

const fetchBooks = async()=> {
    try {
        const response = await fetch('http://localhost:3333/books'); 
        const result = await response.json();

        const books = result.books; 

        displayBooks(books);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
}

const displayBooks = (books)=>{
    const main = document.querySelector('main');
    console.log(books);
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard', 'bg-light', 'd-flex', 'mx-auto', 'w-50', 'p-3', 'border', 'rounded', 'mb-3');

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
                    <button class="btn btn-outline-primary p-1 mr-3 d-flex align-items-center justify-content-center">
                        <span class="material-symbols-outlined">edit</span>
                    </button>
                    <button class="btn btn-outline-primary p-1 d-flex align-items-center justify-content-center">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
        `;

        main.appendChild(bookCard);
    });
}