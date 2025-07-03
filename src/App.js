//import logo from './logo.svg';
import './App.css';
//import Business from './components/Business';
//import { businesses } from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import React, { useState } from 'react';
import Yelp from './utils';

/* const businesses = [
  {
    id: '1',
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: '2',
    imageSrc: 'https://i.imgur.com/avyCu0s.jpeg',
    name: 'Joni Macaroni',
    address: '123 Doghouse Rd',
    city: 'Sylvieland',
    state: 'NY',
    zipCode: '10101',
    category: 'Macaroni',
    rating: 4.5,
    reviewCount: 90
  }
]; */

function App() {
  const [businesses, setBusinesses] = useState([]);

  //function to handle searchbar
const searchYelp = (term, location, sortBy) => {
  Yelp.search(term, location, sortBy).then((businesses) =>
    setBusinesses(businesses)
);
};
  
  return (
    <div className="App">
        <header className="App-header"> 
        <h1>ravenous</h1>
        </header>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;