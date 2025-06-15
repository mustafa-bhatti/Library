// Library

const myLibray = [];

function book(name,author,pages,read){
    /* Expected values
    book(Hobbit, J.R.R Tolkein, 287, true )     */

    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.page = pages;
    this.read = read; 
} 

function addBookToLibrary(name,author,pages,read){
    const newBook = new book(name,author,pages,read) 
    myLibray.push(newBook)
}
addBookToLibrary("Hobbit", "J.R.R Tolkein", 287, "true")
addBookToLibrary("Hobbit", "J.R.R Tolkein", 287, "true")
addBookToLibrary("Hobbit", "J.R.R Tolkein", 287, "true")

function displayBooks(){
    for (let i=0; i<myLibray.length;i++){
        
    }
}

console.log(myLibray)

