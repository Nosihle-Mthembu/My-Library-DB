// This is the U in CRUD, it is for Updating the data

function UpdateBook(){
    let myBooks = JSON.parse(localStorage.getItem("BookTable"))
    console.log(myBooks, "nanalala")
    function addBook(){
        console.log("I am clicked")
    }
    addBook()


    return(
        <>
        <button style={{width:100}} onClick={addBook}>Update</button>
        </>
    )
}
export default UpdateBook