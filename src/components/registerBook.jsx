function RegisterBook(){
    return(
        <>
            <div className="Library">
                <div className="formInfo">
                    <h2>Welcome to Online Library</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.Finibus lobortis primis maecenas natoque ipsum hac fusce augue habitasse.</p>
                    <div className="bookName">
                        <input className="input" type="text" placeholder="Title"/>
                        <input className="input" type="text" placeholder="Author"/>
                    </div>

                    <div>
                        <input className="input2" type="text" placeholder="Edition"/>
                        <input className="input2" type="text" placeholder="Format"/>
                        <div>
                            <div>
                                <select className="numberChoice">
                                    <option value=""></option>
                                    <option value="">SA</option>
                                    <option value="">US</option>
                                    <option value="">Egpty</option>
                                </select>
                            <input className="input3" type="text" placeholder="R200-00"/>
                            </div>
                            {/* <button>Submit</button> */}
                        </div>
                    </div>
                </div>
                <div className="libraryImage">this should be an image</div>
            </div>
        </>
    )
}
export default RegisterBook