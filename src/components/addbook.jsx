// This is the C in CRUD this component create / Adds a new book in the database.
function AddBook({Book}){
   
  let MyBook = JSON.parse(localStorage.getItem("BookTable"))
  console.log(Book, "This is what inside the book")
  console.log(MyBook,  "This is inside MYBook")
  MyBook.push(Book)
  localStorage.setItem("MyBook",JSON.stringify(MyBook))
  console.log("The new book " , MyBook)

    return(
        <>
            <div></div>
        </>
    )
}
export default AddBook