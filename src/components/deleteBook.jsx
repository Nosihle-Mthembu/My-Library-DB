// This is the D in CRUD, it is for Deleting the data


function DeleteBook({isbn}){

    

    // console.log(MyBook)
     function handleDelete(){
       
        let MyBook = localStorage.getItem("BookTable")
        const filterTable = MyBook.filter()
        return(
            localStorage.getItem("filteredTable")
        )

     }
  
    return(
        <>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}
export default DeleteBook