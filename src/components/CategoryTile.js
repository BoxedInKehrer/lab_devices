// CategoryTile.js

import React from 'react';
import './CategoryTile.css'; // Assuming you have a corresponding CSS file for styling

const CategoryTile = ({ category, onSelectCategory }) => {
    return (
        <div className="category-tile" onClick={() => onSelectCategory(category)}>
            {category.name}
        </div>
    );
};

export default CategoryTile;
