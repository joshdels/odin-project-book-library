const myLibrary = [];

function Book(name, author, numPages) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.isRead = false;
}

function addBookToLibrary(name, author, numPages, isRead) {
  const newBook = new Book(name, author, numPages, isRead);
  myLibrary.push(newBook);
  console.log(myLibrary);
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

// Show to public the book data after adding
// add remove using prototype?
