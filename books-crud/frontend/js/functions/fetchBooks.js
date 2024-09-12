export const fetchBooks = async()=> {
    try {
        const response = await fetch('http://localhost:3333/books'); 
        const result = await response.json();

        const books = result.books; 

        return books;
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
}