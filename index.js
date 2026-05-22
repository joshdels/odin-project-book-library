const myLibrary = [];



class Book {
  constructor(name, author, numPages, isRead) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
  }
  toggleRead() {
    this.isRead = !this.isRead();
  }
}

function addBookToLibrary(name, author, numPages, isRead) {
  const newBook = new Book(name, author, numPages, isRead);
  myLibrary.push(newBook);
  renderBookCard(newBook);
}

const books = document.querySelector(".books-contents");

function renderBookCard(book) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("book-card");

  newDiv.innerHTML = `
      <h1>${book.name}</h1>
      <h3>Author: ${book.author}</h3>
      <span>Number of Pages: ${book.numPages}</span>
      <div>
        <label>Read</label>
        <input type="checkbox" ${book.isRead ? "checked" : ""}>
      </div>
      <button id=${book.id}>Delete</button>
      `;

  const deleteBtn = newDiv.querySelector("button");

  deleteBtn.addEventListener("click", function (e) {
    const removeId = e.target.id;

    const updatedLibrary = myLibrary.filter((book) => book.id !== removeId);

    myLibrary.length = 0;
    myLibrary.push(...updatedLibrary);

    delete myLibrary[removeId];
    newDiv.remove();
  });

  const checkbox = newDiv.querySelector("input");

  checkbox.addEventListener("change", function () {
    book.toggleRead();
  });

  books.append(newDiv);
}

const form = document.getElementById("my-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  const allInputs = Object.fromEntries(formData.entries());

  addBookToLibrary(
    allInputs.name,
    allInputs.author,
    allInputs.numPages,
    allInputs.isRead,
  );
  form.reset();
});
