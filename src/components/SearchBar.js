import React, { useState } from 'react';
import './SearchBar.css';


//seachbar component
function SearchBar() {
//USESTATES
    //state to keep track of selected sort option
    const [sortBy, setSortBy] = useState('best_match');

    //state for search term and location
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    //sort options with Yelp API Keys as values
    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };
//EVENT HANDLERS
    //handle click on a sort option
    const handleSortByChange = (optionValue) => {
        setSortBy(optionValue);
    };

    //handle changes to search term input
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    //handle changes to location input
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleSearch = () => {
        console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`);
    }

    //render sort options list dynamically
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(option => {
            const optionValue = sortByOptions[option];
            //add 'active' class to selected sort option
            const className = sortBy === optionValue ? 'active' : '';

            return (
                <li
                    key={optionValue}
                    className={className}
                    onClick={() => handleSortByChange(optionValue)}
                >
                    {option}
                </li>
            );
        });
    };
    return (
        <div className="search-bar">
              <div className="search-bar-sort-options">
            <ul>
                {renderSortByOptions()}
            </ul>    
            </div>
            
            <div className="search-bar-fields">
                <input placeholder="Search Businesses"
                        value={searchTerm}
                        onChange={handleSearchTermChange} />
                <input placeholder="Where?" 
                        value={location}
                        onChange={handleLocationChange}/>
            </div>

      

        <div className="search-bar-submit">
            <button onClick={handleSearch}>Let's Go</button>
            </div>
        </div>

    );
}

export default SearchBar;