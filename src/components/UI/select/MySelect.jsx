import React from 'react';
import "./MySelect.css"

const MySelect = ({options, defaultOption, value, onChange}) => {
    return (
        <select
            className="my_select"
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultOption}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;