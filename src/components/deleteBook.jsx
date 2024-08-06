// This is the D in CRUD, it is for Deleting the data
function DeleteBook(){

    function Delete(){
        console.log("I just deleted")
    }

    return(
        <>
        <button onClick={Delete}>Delete</button>
        </>
    )
}
export default DeleteBook