import React from 'react';
import Business, { businesses } from './Business';

function BusinessList() {
    return (
        <div className = "business-list">
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </div>
    )
}

export default BusinessList;