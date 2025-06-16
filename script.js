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



function displayBooks(){
    const bookCard = document.createElement('div');
    bookCard.className = "book-card";
    let lastBookElement = myLibray.at(-1)
    bookCard.setAttribute("data-id",lastBookElement['id'])

    for (item in lastBookElement){
        if (item != "id"){
            let value = lastBookElement[item];
            const element = document.createElement("p");
            if (item == "read"){
                element.textContent = "Read : " + value;
                element.className = "read-true"
                
            }
            else if(item == "page"){
                element.textContent = value + " pages";
            }
            else {
                element.textContent = value;
            }
            bookCard.appendChild(element);
        }
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.className="delete-btn"
    deleteBtn.textContent = "Delete"
    bookCard.appendChild(deleteBtn)

    booksContainer.appendChild(bookCard);
}


function addBookToLibrary(name,author,pages,read){
    const newBook = new book(name,author,pages,read) 
    myLibray.push(newBook)
    displayBooks();
}
const booksContainer = document.querySelector(".books-container");

addBookToLibrary("Hobbit", "J.R.R Tolkein", 227, "true");
addBookToLibrary("Lord Of The Rings", "J.R.R Tolkein", 217, "true");
addBookToLibrary("Alchemist", "J.R.R Tolkein", 287, "false");
// Dialog

const dialog = document.querySelector("dialog");
const openDialog = document.querySelector(".open-dialog");
const closeDialog = document.querySelector(".close-dialog");
const mainForm = document.querySelector("#main-form");
const submitBtn = document.querySelector(".submit-dialog");
const inputField = document.querySelectorAll("input");

submitBtn.addEventListener("click", (e) => {
    let validity = true;
    inputField.forEach((value) => {
        if (value.checkValidity() == false){
            validity = false;
        }   
    });
    if (validity){
        const bookName = document.querySelector("#bookName").value;
        const author = document.querySelector("#authorName").value;
        const pages = document.querySelector("#pages").value;
        let readBool = document.querySelector("#read").checked;
        addBookToLibrary(bookName,author,pages,readBool);
        mainForm.reset();
        e.preventDefault()
        dialog.close()
    }
})
openDialog.addEventListener("click" , () => {
    dialog.showModal();
})

closeDialog.addEventListener("click", () => {
    dialog.close();
})

console.log(myLibray)