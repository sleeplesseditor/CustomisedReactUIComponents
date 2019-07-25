import React from 'react';

const DropDownSelect = ({ name, placeholder, required, val, _handleChange }) => (
    <div className="form-input-select">
        <label className="dropdown-label">{placeholder}</label>
        <select 
            name={name} 
            required={required} 
            onChange={_handleChange}
        >
            <option value="">Please Select</option>
            {val.map(
                values => <option value={values} key={values}>{values}</option>
            )}
        </select>
    </div>
);

export default DropDownSelect;