import DisplayBooks from './components/displayBooks';
import RegisterBook from './components/registerBook';
import './App.css'


function App() {
  let BookTable = [
    {
    ISBN:1425789632587,
    Titles:"Twelve years a Slave",
    NumOfPages: 264,
    Edition:"thirth edition",
    Publisher:"Harvard Publishers",
    Author:" Solomon Northup",
    Format:"Hard Cover",
    Price:"R"+195,
    CoverDesigner:"https://th.bing.com/th/id/R.e04ff99f691f70c2c9d7e96656f0bd6a?rik=QWkOaZsaioiybg&pid=ImgRaw&r=0",
    ReleaseDate:"November 10, 2021",
  },
  {
    ISBN:1425789683697,
    Titles:"The Phantom Child",
    NumOfPages:316,
    Edition:"Kindle Edition",
    Publisher:"Cherry Tree Publishing",
    Author:"A J Willis",
    Format:"Print out",
    Price:"R"+200,
    CoverDesigner:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701686462i/202336685.jpg",
    ReleaseDate:"February 1, 2024",
  },
  {
    ISBN:1425423895476,
    Titles:"How to make a slave and Essays",
    NumOfPages:166,
    Edition:"Kindle Edition",
    Publisher:"Mad Creek Books",
    Author:"Deric House",
    Format:"Print out",
    Price:"R"+50,
    CoverDesigner:"https://ohiostatepress.org/assets/covers/9780814255995.jpg",
    ReleaseDate:"October 30,2020",}]
  
    // localStorage.setItem("BookTable",JSON.stringify(BookTable))
    let MyBook = JSON.parse(localStorage.getItem("BookTable"))
  return (
    <>
      <RegisterBook/>
      <DisplayBooks Book = {MyBook}/>
    </>
  )
}

export default App
