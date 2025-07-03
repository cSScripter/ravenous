import React from 'react';
import './Business.css';


//business component
function Business({ business }) {
    
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
