import React from 'react';
import './SubcategorySection.css';

const SubcategorySection = ({ subcategories, onSelectSubcategory }) => {
    return (
        <div className="subcategory-section">
            {subcategories.map(sub => (
                <div key={sub.id} className="subcategory-item" onClick={() => onSelectSubcategory(sub)}>
                    {sub.name}
                </div>
            ))}
        </div>
    );
};

export default SubcategorySection;
