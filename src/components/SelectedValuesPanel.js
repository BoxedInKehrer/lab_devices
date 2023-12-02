import React from 'react';
import './SelectedValuesPanel.css';

const SelectedValuesPanel = ({ selectedValues, onRemoveValue }) => {
    return (
        <div className="selected-values-panel">
            {selectedValues.map((value, index) => (
                <div key={index} className="selected-value-item">
                    {value}
                    <button className="remove-button" onClick={() => onRemoveValue(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default SelectedValuesPanel;
