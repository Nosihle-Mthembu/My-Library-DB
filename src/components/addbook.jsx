// This is the C in CRUD this component create / Adds a new book in the database.
export function addBook(Book){
   
  let MyBook = JSON.parse(localStorage.getItem("BookTable"))
  MyBook.push(Book)
  localStorage.setItem("BookTable",JSON.stringify(MyBook))


}
