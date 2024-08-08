// This is the R in CRUD, this component READ the Data.
import Bookcard from "./bookcard"

function DisplayBooks({Book}){

// console.log(Book, "tyeiyti")

    return(
        <>
        <div style={{display:"flex", marginTop:10, gap:5}}>
            {Book.map((libry,index) => (
                <Bookcard list = {libry} key = {index} />
            ))}
            
        </div>
         
        
             
      </>
    )
}
export default DisplayBooks