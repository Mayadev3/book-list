const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitButton = document.getElementById("submit");
const list = document.getElementById("book-list");

//Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList = function (book) {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="link">X</a></td>`;
  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = titleInput.value;
  let author = authorInput.value;
  let isbn = isbnInput.value;

  //instantiate book
  const book = new Book(title, author, isbn);

  //instantiate UI
  const ui = new UI();

  //validate
  if (title === "" || author === "" || isbn === "") {
  } else {
    ui.addBookToList(book);
    ui.clearFields();
  }

  /*this is one way to clear fields too
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";*/
});
