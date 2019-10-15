import React from 'react';
import BookContextProvider from './context/BookContext'
import Navbar from './components/Navbar';
import BookList from './components/BookList'
import './index.css'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
