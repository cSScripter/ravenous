import React from 'react';
import Business from './Business';
import './BusinessList.css';


function BusinessList( { businesses }) {
    return (
        <div className = "business-list">
            {businesses.map((business, index) => (
                <Business key={business.id} business={business} />
            ))}
        </div>
    )
}

export default BusinessList;