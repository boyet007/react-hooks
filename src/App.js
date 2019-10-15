import React from 'react';
import BookContextProvider from './context/BookContext'
import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
