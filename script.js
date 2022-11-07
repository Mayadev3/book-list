const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitButton = document.getElementById("submit");
const table = document.getElementById("book-list");

//Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI constructor
function UI() {}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = titleInput.value;
  let author = authorInput.value;
  let isbn = isbnInput.value;

  //instantiate book
  const book = new Book(title, author, isbn);

  //instantiate UI
});
