const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitButton = document.getElementById("submit");
const list = document.getElementById("book-list");

form.addEventListener("submit", manageData);

function manageData(e) {
  e.preventDefault();
  let title = titleInput.value;
  let author = authorInput.value;
  let isbn = isbnInput.value;

  function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  function UI() {}

  let book = new Book(title, author, isbn);
  let ui = new UI();

  UI.prototype.addBookToList = function (book) {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
  };
  UI.prototype.clearInput = function () {
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
  };
  UI.prototype.showAlert = function (message, className) {
    let div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const form = document.getElementById("book-form");
    const container = document.querySelector(".container");
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  };
  UI.prototype.deleteItem = function (target) {
    if (target.className === `delete`) {
      target.parentElement.parentElement.remove();
    }
  };
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert(`Please fill in all fields!`, `error`);
  } else {
    ui.addBookToList(book);
    ui.clearInput();
    ui.showAlert(`Book Added!`, `success`);
  }

  document.querySelector("#book-list").addEventListener("click", function (e) {
    e.preventDefault();
    let ui = new UI();
    ui.deleteItem(e.target);
    ui.showAlert(`Book Deleted!`, `success`);
  });
}
