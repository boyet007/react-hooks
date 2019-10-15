import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'patrick rofuss', id: 1},
        { title: 'the final empire', author: 'brandon sherman', id: 2 }
    ]);
    const addBook = (title, author) => {
        console.log(title)
        console.log(author)
        setBooks([...books, { title, author, id: uuid() }])
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id ))
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider
