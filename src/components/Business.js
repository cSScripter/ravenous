import React from 'react';

//Business variable to pass yelp api
const mPizzeria = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}
//business component
function Business() {
    return (
        <div className="business">
            <img src={mPizzeria.imageSrc} alt={mPizzeria.name} />
            <h2>{mPizzeria.name}</h2>   
            <p>{mPizzeria.address}</p>
            <p>{mPizzeria.city}, {mPizzeria.state} {mPizzeria.zipCode}</p>
            <p>{mPizzeria.category}</p>
            <p>Rating: {mPizzeria.rating}</p>
            <p>Reviews: {mPizzeria.reviewCount}</p>
        </div>
    );
}

export default Business;