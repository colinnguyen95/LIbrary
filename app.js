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

const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read")
console.log(book.info);