import React from 'react';
import './Business.css';

//Business variable to pass yelp api
const businesses = [
    {
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
//business component
function Business(props) {
    const business = props.business;
    return (
        <div className="business">
            <img src={business.imageSrc} alt={business.name} />
            <h2>{business.name}</h2>   
            <p>{business.address}</p>
            <p>{business.city}, {business.state} {business.zipCode}</p>
            <p>{business.category}</p>
            <p>Rating: {business.rating}</p>
            <p>Reviews: {business.reviewCount}</p>
        </div>
    );
}

export default Business;
export { businesses };