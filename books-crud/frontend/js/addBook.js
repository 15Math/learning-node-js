const addForm = document.getElementById('addForm'); 
const inputTitle = document.getElementById('title');
const inputAutorName = document.getElementById('autor_name');
const inputCreatedAt = document.getElementById('created_at');
const inputNumberPages = document.getElementById('number_pages');
const inputCover = document.getElementById('cover')

const addBook = async (event)=>{
    event.preventDefault();
    const book = {title: inputTitle.value,
                  autor_name: inputAutorName.value,
                  created_at: inputCreatedAt.value,
                  number_pages: inputNumberPages.value,
                  cover:inputCover.value};

    await fetch('http://localhost:3333/books', {
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    })

    window.location.href = 'index.html';
}

addForm.addEventListener('submit', addBook);