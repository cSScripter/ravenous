import logo from './logo.svg';
import './App.css';
import Business from './components/Business';
import { businesses } from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
        <header className="App-header"> 
        <h1>ravenous</h1>
        </header>
      <SearchBar />
      <BusinessList />
      
    </div>
  );
}

export default App;
