import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog =>{
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex m-auto max-w-7xl'>
      <Blogs 
      handleAddToBookmarks={handleAddToBookmarks}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      

      
    </>
  )
}

export default App
