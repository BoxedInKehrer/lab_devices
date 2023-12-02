import React, { useState, useEffect } from 'react';
import CategoryTile from './components/CategoryTile';
import SubcategorySection from './components/SubcategorySection';
import AttributeSelector from './components/AttributeSelector';
import SelectedValuesPanel from './components/SelectedValuesPanel';
import { fetchCategories } from './services/api';
import './App.css'; // Your global styles

const App = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [selectedValues, setSelectedValues] = useState([]);

    useEffect(() => {
        fetchCategories().then(response => {
            setCategories(response.data);
        }).catch(error => {
            console.error('Error fetching categories:', error);
        });
    }, []);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null); // Reset subcategory selection
    };

    const handleSelectSubcategory = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    const handleSelectValue = (value) => {
        setSelectedValues(prevValues => [...prevValues, value]);
    };

    const handleRemoveValue = (index) => {
        setSelectedValues(prevValues => prevValues.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <div className="category-container">
                {categories.map(category => (
                    <CategoryTile
                        key={category.id}
                        category={category}
                        onSelectCategory={handleSelectCategory}
                    />
                ))}
            </div>
            {selectedCategory && 
                <SubcategorySection
                    subcategories={selectedCategory.subcategories}
                    onSelectSubcategory={handleSelectSubcategory}
                />
            }
            {selectedSubcategory && 
                <AttributeSelector
                    attributes={selectedSubcategory.attributes}
                    onSelectValue={handleSelectValue}
                />
            }
            <SelectedValuesPanel
                selectedValues={selectedValues}
                onRemoveValue={handleRemoveValue}
            />
        </div>
    );
};

export default App;
