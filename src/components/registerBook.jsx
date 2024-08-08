import React, { useState } from 'react';
import { addBook } from './addbook';

function RegisterBook(){
    const [Titles, setTitle] = useState('');
    const [Author, setAuthor] = useState('');
    const [Edition, setEdition] = useState('');
    const [Format, setFormat] = useState('');
    const [CoverDesigner, setCoverDesigner] = useState('');
    const [ISBN, setISBN] = useState('');
    const [currency, setCurrency] = useState('');
    const [Price, setPrice] = useState('');

    function handleSubmit(event){
        event.preventDefault()
        console.log("I am hit",Titles, Author,Edition,Format,currency,Price)
    
        const bookData = {
            Titles,
            Author,
            Edition,
            Format,
            CoverDesigner,
            ISBN,
            currency,
            Price,
          };

        //   console.log(bookData, "ehrfh3oig3oig")
          window.location.reload(true)
          addBook(bookData)
      
    }
    

    return(
        <>
            <div className="Library">
                <div className="formInfo">
                    <h2>Welcome to Online Library</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus lobortis primis maecenas natoque ipsum hac fusce augue habitasse.</p>
                    <div className="bookName">
                        <input className="input"
                        type="text" 
                        placeholder="Title"
                        value={Titles} 
                        onChange={(event) => setTitle(event.target.value)}/>
                        <input className="input" 
                        type="text" 
                        placeholder="Author"
                        value={Author} 
                        onChange={(event) => setAuthor(event.target.value)}/>
                    </div>

                    <div>
                        <input className="input2"
                        type="text" 
                        placeholder="Edition"
                        value={Edition}
                        onChange={(event) => setEdition(event.target.value)}
                        />
                        <input className="input2" type="text" 
                        placeholder="Format"
                        value={Format}
                        onChange={(event) => setFormat(event.target.value)}
                        />
                        <input className="input2" type="text" 
                        placeholder="Book Cover"
                        value={CoverDesigner}
                        onChange={(event) => setCoverDesigner(event.target.value)}
                        />
                        <input className="input2" type="text" 
                        placeholder="Book ISBN"
                        value={ISBN}
                        onChange={(event) => setISBN(event.target.value)}
                        />
                        <div>
                            <div>
                                <select className="currencyChoice"
                                value={currency}
                                onChange={(event) => setCurrency(event.target.value)}>
                                    <option value=""></option>
                                    <option value="">R</option>
                                    <option value="">$</option>
                                    <option value="">Rupee</option>
                                </select>
                            <input className="input3" 
                            type="text" 
                            placeholder="R200-00"
                            value={Price}
                            onChange={(event) => setPrice(event.target.value)}/>
                            </div>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
                <div  className="libraryImage" style={{backgroundImage:`url(${require("../assets/original-wee.jpg Form.jpg")})`}}></div>
            </div>
        </>
    )
}
export default RegisterBook