import React from 'react';
import './AttributeSelector.css';

const AttributeSelector = ({ attributes, onSelectValue }) => {
    return (
        <div className="attribute-selector">
            {attributes.map(attr => (
                <div key={attr.id} className="attribute-section">
                    <h4>{attr.name}</h4>
                    {attr.values.map(value => (
                        <div key={value} className="value-item" onClick={() => onSelectValue(value)}>
                            {value}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AttributeSelector;
