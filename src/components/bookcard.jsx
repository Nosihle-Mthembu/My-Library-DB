

function Bookcard(Book){
    console.log(Book.Book.Book1.CoverDesigner)
    return(
        <>
            <div className="WholeCard">
                    <div className="BookCover" style={{backgroundImage:`url(${require(Book.Book.Book1.CoverDesigner)})`}}></div>
                    <div className="BookName">{Book.Book.Book1.Titles}</div>
                    <div className="authorName">by {Book.Book.Book1.Author}</div>
                    <div className="Bookprice">{Book.Book.Book1.Price}</div>
            </div>
        </>
    )
}
export default Bookcard