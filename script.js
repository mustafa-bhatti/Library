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
addBookToLibrary("Hobbit", "J.R.R Tolkein", 227, "true");
addBookToLibrary("Lord Of The Rings", "J.R.R Tolkein", 217, "true");
addBookToLibrary("Hobbit", "J.R.R Tolkein", 287, "true");

const booksContainer = document.querySelector(".books-container");
console.log(booksContainer)
function displayBooks(){
    for (let i=0; i<myLibray.length;i++){
        const bookCard = document.createElement('div');
        bookCard.className = "book-card";
        
        for (item in myLibray[i]){
            if (item != "id"){
                let value = myLibray[i][item];
                const element = document.createElement("p");
                element.textContent = value;
                bookCard.appendChild(element);
            }
        }
        booksContainer.appendChild(bookCard);
    }
}
displayBooks();
for (item in myLibray[1]){
    if (item != "id"){
        
        console.log(myLibray[1][item]);
    }
}
console.log(myLibray)

