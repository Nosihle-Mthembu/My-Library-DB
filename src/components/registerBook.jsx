import React, { useState } from 'react';
import { addBook } from './addbook';

function RegisterBook({Book}){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [edition, setEdition] = useState('');
    const [format, setFormat] = useState('');
    const [currency, setCurrency] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit(event){
        event.preventDefault()
        console.log("I am hit",title, author)
    
        const bookData = {
            title,
            author,
            edition,
            format,
            currency,
            price,
          };

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
                        value={title} 
                        onChange={(event) => setTitle(event.target.value)}/>
                        <input className="input" 
                        type="text" 
                        placeholder="Author"
                        value={author} 
                        onChange={(event) => setAuthor(event.target.value)}/>
                    </div>

                    <div>
                        <input className="input2"
                        type="text" 
                        placeholder="Edition"
                        value={edition}
                        onChange={(event) => setEdition(event.target.value)}
                        />
                        <input className="input2" type="text" 
                        placeholder="Format"
                        value={format}
                        onChange={(event) => setFormat(event.target.value)}
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
                            value={price}
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