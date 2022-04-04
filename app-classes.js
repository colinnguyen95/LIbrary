const booksContainer = document.querySelector('.library-container');
const formContainer = document.querySelector('.popupForm-container');
const form = document.querySelector('.popupForm');

let myLibrary = [

];

class Book {
    constructor(title, author, numPages, readStatus){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.readStatus = readStatus;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.numPages} pages. Read Status: ${this.readStatus}.`
    }
}

function addBookToLibrary(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#numPages').value;
    const readStatus = document.querySelector('input[name="read_status"]:checked').value;
    const newBook = new Book(title, author, numPages, readStatus);
    myLibrary.push(newBook);
    
    loopBooks();
    closeForm();
    form.reset();
}

function removeBook(book) {
    const index = myLibrary.indexOf(book)
    // console.log('remove book index: ', index);
    if(index > -1){
        myLibrary.splice(index, 1); //2nd paramter removes on item only
    }
    loopBooks();
}

function toggleReadStatus(e, book) {
    book.readStatus = book.readStatus === 'yes' ? 'no' : 'yes';
    loopBooks();
}

function loopBooks(){
    booksContainer.textContent = '';
    return myLibrary.map(book => {
        const books = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = book.title;
        const author = document.createElement('p');
        author.textContent = `by ${book.author}`;
        const numPages = document.createElement('p');
        numPages.textContent = `${book.numPages} pages`;
        const readStatus = document.createElement('p');
        readStatus.textContent = `Read Status: `;

        books.appendChild(h2);
        books.appendChild(author);
        books.appendChild(numPages);
        books.setAttribute('data-attribute', myLibrary.indexOf(book));

        const button = document.createElement('input');
        button.type = "button";
        button.value = "Remove";
        button.onclick = function() {
            removeBook(book);
        };

        const readStatusBtn = document.createElement('input');
        readStatusBtn.type = "button";
        readStatusBtn.value = book.readStatus;

        if(readStatusBtn.value === "yes") {
            readStatusBtn.classList.add('readYes');
        } else {
            readStatusBtn.classList.add('readNo');
        }
        
        readStatusBtn.onclick = function(e) {
            toggleReadStatus(e, book);
        }
        readStatus.appendChild(readStatusBtn);
        books.appendChild(readStatus);
        books.appendChild(button);
        booksContainer.appendChild(books);
        // console.log('index in loop: ', myLibrary.indexOf(book));
    })
}

function openForm() {
    formContainer.style.display = 'block';
    document.querySelector('.modal').classList.add('open');
}

function closeForm() {
    formContainer.style.display = "none";
    document.querySelector('.modal').classList.remove('open');
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "yes");
const book2 = new Book("The Hobbit 2", "J.R.R. Tolkien", 592, "yes");
const book3 = new Book("The Hobbit 3", "J.R.R. Tolkien", 347, "no");

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

loopBooks();
// console.log(book.info());
