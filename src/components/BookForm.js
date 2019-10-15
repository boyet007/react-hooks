import React, {useContext, useState} from 'react'
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
   const { addBook } = useContext(BookContext)
   const[title, setTitle] = useState('bobo')
   const[author, setAuthor] = useState('philip')
   const handleSubmit = (e) => {
       e.preventDefault()
       addBook(title, author)
       setTitle('')
       setAuthor('')
   }
   return ( 
       <form onSubmit={handleSubmit}>
           <input type="text" placeholder="book title" value={ title }
            onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="author" value={ author }
            onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="add book" />
       </form>
    );
}
 
export default NewBookForm;