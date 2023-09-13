import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setRedingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) =>{
    // console.log("reading time",time);
    const newRedingTime = readingTime+ time;
    setRedingTime(newRedingTime);

    // console.log("remove ", id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex m-auto max-w-7xl'>
      <Blogs 
      handleAddToBookmarks={handleAddToBookmarks}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks  
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
      

      
    </>
  )
}

export default App
