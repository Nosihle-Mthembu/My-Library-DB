import DeleteBook from "./deleteBook"
import UpdateBook from "./updateBook"


function Bookcard(list){
   
    return(
        <>
            <div className="WholeCard">
                <div className="BookCover" style={{backgroundImage:`url(${require(list.list.CoverDesigner)})`}}></div>  
                <div>
                   <div className="BookName">{list.list.Titles}</div>
                    <div className="authorName">by {list.list.Author}</div>
                    <div className="Bookprice">{list.list.Price}</div>
                    <div style={{display:"flex", float:"right", gap:5}}>
                        <DeleteBook ISBN = {list.list.ISBN}/>
                        <UpdateBook/>
                    </div>
                    
                </div>
                    
            </div>
            
        </>
    )
}
export default Bookcard