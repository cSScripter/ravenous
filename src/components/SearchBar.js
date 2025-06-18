import React, { useState } from 'react';
import './SearchBar.css';


//seachbar component
function SearchBar() {
    //state to keep track of selected sort option
    const [sortBy, setSortBy] = useState('best_match');

    //sort options with Yelp API Keys as values
    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };
    //handle click on a sort option
    const handleSortByChange = (optionValue) => {
        setSortBy(optionValue);
    };

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
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>

      

        <div className="search-bar-submit">
            <button>Let's Go</button>
            </div>
        </div>

    );
}

export default SearchBar;