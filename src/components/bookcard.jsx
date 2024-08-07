

function Bookcard(list){
    return(
        <>
            <div className="WholeCard">
                    <div className="BookCover" style={{backgroundImage:`url(${require(list.list.CoverDesigner)})`}}></div>
                    <div className="BookName">{list.list.Titles}</div>
                    <div className="authorName">by {list.list.Author}</div>
                    <div className="Bookprice">{list.list.Price}</div>
            </div>
        </>
    )
}
export default Bookcard