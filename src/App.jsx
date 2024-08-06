import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddBook from './components/addbook';
import DisplayBooks from './components/displayBooks';
import UpdateBook from './components/updateBook';
import DeleteBook from './components/deleteBook';
import Bookcard from './components/bookcard';
import RegisterBook from './components/registerBook';
import './App.css'

function App() {
  
  let BookTable = [{
    Book1:{
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
  Book2:{
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
  Book3:{
    ISBN:1425423895476,
    Titles:"How to make a slave and Other Essays",
    NumOfPages:166,
    Edition:"Kindle Edition",
    Publisher:"Mad Creek Books",
    Author:"Deric House",
    Format:"Print out",
    Price:"R"+50,
    CoverDesigner:"https://ohiostatepress.org/assets/covers/9780814255995.jpg",
    ReleaseDate:"October 30,2020",}}]
  
    localStorage.setItem("BookTable",JSON.stringify(BookTable))

  return (
    <>
      <AddBook Book = {BookTable[0].Book1}/>
      <DisplayBooks/>
      {/* <UpdateBook/>
      <DeleteBook/> */}
      <Bookcard  Book = {BookTable[0]}/>
      <RegisterBook/>
    </>
  )
}

export default App
