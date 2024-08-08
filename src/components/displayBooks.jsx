// This is the R in CRUD, this component READ the Data.
import Bookcard from "./bookcard"

function DisplayBooks({Book}){

// console.log(Book, "tyeiyti")

    return(
        <>
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto",rowGap:30, marginTop:10}}>
            {Book.map((libry,index) => (
                <Bookcard list = {libry} key = {index} />
            ))}
            
        </div>
         
        
             
      </>
    )
}
export default DisplayBooks