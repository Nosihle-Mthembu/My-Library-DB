// This is the R in CRUD, this component READ the Data.
import Bookcard from "./bookcard"

function DisplayBooks(){

const book = localStorage.getItem("BookTable")
const bookArray = JSON.parse(book)

    return(
        <>
        <div style={{display:"flex", marginTop:10}}>
            {bookArray.map((libry,index) => (
                <Bookcard list = {libry} key = {index} />
            ))}
        </div>
         
        
             
      </>
    )
}
export default DisplayBooks