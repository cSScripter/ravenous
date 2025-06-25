//import logo from './logo.svg';
import './App.css';
//import Business from './components/Business';
//import { businesses } from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

const businesses = [
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
];

function App() {
  return (
    <div className="App">
        <header className="App-header"> 
        <h1>ravenous</h1>
        </header>
      <SearchBar />
      <BusinessList businesses={businesses} />
      
    </div>
  );
}

export default App;
