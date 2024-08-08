// This is the D in CRUD, it is for Deleting the data


function DeleteBook({ISBN}){
   
    let myBooks = JSON.parse(localStorage.getItem("BookTable"))

         function handleDelete(){
         const filteredBooks = myBooks.filter((book) =>book.ISBN !== ISBN)
         myBooks = filteredBooks
         localStorage.setItem("BookTable", JSON.stringify(myBooks))
         window.location.reload(false)
         }

      
        return(
            <>
            <button onClick={handleDelete} style={{float:"right", width:100}}>Delete</button>
            </>
        )
    }
    export default DeleteBook