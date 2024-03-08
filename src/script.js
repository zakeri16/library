const books = [];
const bookPages = [];
const authorN = [];
const bookNameEle = document.getElementById("booksName");
const pagesEle = document.getElementById("pages");
const authorNameEle = document.getElementById("authorName");
const resultTable = document.getElementById("result-body");

function addBook() {
  if (bookNameEle.value != "") {
    books.push(bookNameEle.value);
    bookPages.push(pagesEle.value);
    authorN.push(authorNameEle.value);
    bookNameEle.value = "";
    pagesEle.value = "";
    authorNameEle.value = "";
    refreshResult();
  }
}

function deleteBook(index) {
  if (confirm("آیا قصد حذف کتاب را دارید؟")) {
    if (index != undefined) {
      books[index] = undefined;
    } else {
      let code = bookNameEle.value;
      if (code != "") {
        books[code - 1] = undefined;
      }
    }
    refreshResult();
  }
}

function refreshResult() {
  let result = "";
  for (let index = 0; index < books.length; index++) {
    if (books[index] == undefined) continue;
    result +=
      "<tr><td>" +
      (index + 1) +
      "</td><td>" +
      books[index] +
      "</td><td>" +
      bookPages[index] +
      "</td><td>" +
      authorN[index] +
      "</td><td>" +
      "<a onclick='deleteBook(" +
      index +
      ")' class='removBook' ;'>X</a>" +
      "</td></tr>";
  }
  resultTable.innerHTML = result;
}
