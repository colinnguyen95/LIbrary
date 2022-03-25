const booksContainer = document.querySelector('.library-container')

let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        numPages: 295,
        read: true
    },
    {
        title: "The Hobbit 2",
        author: "J.R.R. Tolkien",
        numPages: 395,
        read: true
    },
    {
        title: "The Hobbit 3",
        author: "J.R.R. Tolkien",
        numPages: 495,
        read: false
    }
];

function Book(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function(){
        let text = `${title} by ${author}, ${numPages} pages, ${read} yet.`;
        // console.log(text);
        return text;
    }
}

function addBookToLibrary(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#numPages').value;
    const read = document.querySelector('#read').value;
    const newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook);
    // console.log(newBook);
    loopBooks();
}

function loopBooks(){
    booksContainer.textContent = '';
    return myLibrary.map(book => {
        const books = document.createElement('p');
        books.textContent = `${book.title} by ${book.author}, ${book.numPages} pages, ${book.read} yet.`
        booksContainer.appendChild(books);
        console.log(myLibrary.length)
    })
}

loopBooks();

const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read")
console.log(book.info());