"use strict";

(() => {
//------------gets all the books from books.json
    fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(books => console.log(books))
        .catch(error => console.error(error));

//-----------getting a single book by its id
    fetch("http://localhost:3000/books/1")
        .then(res => res.json())
        .then(book => console.log(book))
        .catch(error => console.error(error));

//-----------We can use the authorId property to do another fetch request to get the author data:
    fetch("http://localhost:3000/books/1").then(res => res.json()).then(book => {
        fetch(`http://localhost:3000/authors/${book.authorId}`)
            .then(res => res.json())
            .then(author => {
                console.log(book);
                console.log(author);
            })
            .catch(error => console.error(error))
    })
        .catch(error => console.error(error))


//-----------using the async/await syntax for the above code
    const getBookAndAuthor = async (id) => {
        try {
            //get the book data
            const bookUrl = `http://localhost:3000/books/${id}`
            const bookResponse = await fetch(bookUrl);
            const book = await bookResponse.json();

            // Get the author data
            const authorUrl = `http://localhost:3000/authors/${book.authorId}`;
            const authorResponse = await fetch(authorUrl);
            const author = await authorResponse.json();

            // Add the author to the book object
            book.author = author;

            // Return the book object
            return book;
        } catch (error) {
            console.error(error);
        }
    }
    getBookAndAuthor(1)
        .then(book => console.log(book))
        .catch(error => console.error(error));

})();