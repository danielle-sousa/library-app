import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Bookslist from './components/books-list/Bookslist';
import SearchBox from './common/utils/search-bar/SearchBar';
import Navbar from './components/navbar/navbar';


const App = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getBookRequest = async () => {
    const url = "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge"

    const response = await fetch(url);
    const responseJSON = await response.json();

    setBooks(responseJSON);
  }

  useEffect(() => {
    getBookRequest();
  }, [])

  return (
    <div className='App'>
      <Navbar heading='Livraria do cowboy' />

      
    <div className='container-fluid'>

      <div className='row d-flex align-itens-center mt-4 mb-4'>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <Bookslist books={books} />
        </div>
      </div>

    </div>
    </div>
  );
}

export default App;
