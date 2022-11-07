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
  <td><a href="#" class="delete">X</a></td>`;
  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
};
UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");
  div.className = ` alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const form = document.getElementById("book-form");
  const container = document.querySelector(".container");
  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
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
    ui.showAlert(`Please fill in all the fields`, `error`); //this is the class error which we created in the style sheet
  } else {
    ui.addBookToList(book);
    ui.showAlert(`Book Added !`, `success`);
    ui.clearFields();
  }
});
//event listener for delete item
//here we will use the parent and delegate downwards to the child

document.getElementById("book-list").addEventListener("click", function (e) {
  e.preventDefault();
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert(`Book Deleted !`, `success`);
});
